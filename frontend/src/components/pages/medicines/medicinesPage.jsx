import { useState, useEffect, useContext } from 'react'
import Loading from '../../shared/loading';
import Medicine from './medicine';
import NavBar from "../../shared/navbar";
import Content from '../../styled/content';
import Button from '../../styled/button';
import { AddOutline } from 'react-ionicons'
import styled from "styled-components";
import MedicineModal from './medicineModal';
import RemoveModal from './removeModal';
import {getMedicines} from '../../../services/medicineServices';
import UserContext from '../../../contexts/userContext';
import { verifyLogin } from '../../../services/userServices';



function MedicinesPage() {
    const [medicines, setMedicines] = useState(undefined)
    const [showMedicineModal, setShowMedicineModal] = useState(false)
    const [showRemoveModal, setShowRemoveModal] = useState(false)
    const [selectedMedicine, setSelectedMedicine] = useState(undefined)
    const {userData, setUserData} = useContext(UserContext)

    useEffect(() => {
        
        if (medicines === undefined) {
            if (userData) {
                getMedicines(userData.token, setMedicines)
            } else {
                verifyLogin(setUserData)
            }
        }
    }, [userData])


    if (medicines === undefined) {
        return (
            <>
                <NavBar />
                <Content>
                    <Loading />
                </Content>
            </>
        )
    } else if (medicines.length === 0) {
        return (
            <>
                <NavBar />
                <Content>
                    <h1>
                        Não há medicamentos cadastrados
                    </h1>

                    <Button primary onClick={() => {setShowMedicineModal(true)}}>
                        <InnerButton>
                            <AddOutline
                                color={'#FFFFFF'} />

                            Adicionar Medicamento
                        </InnerButton>
                    </Button>
                    <MedicineModal show={showMedicineModal} setShowModal={setShowMedicineModal} setMedicineInfo={setSelectedMedicine} dataToEdit={selectedMedicine} />
                </Content>
            </>
        )
    } else {
        return (
            <>
                <NavBar />
                <Content>
                    <Medicines>
                        {medicines.map((medicine) => {
                            return (
                                <Medicine data={medicine} setMedicineInfo={setSelectedMedicine} setShowMedicineModal={setShowMedicineModal} setShowRemoveModal={setShowRemoveModal}/>
                            )
                        })}
                    </Medicines>
                    <Button primary onClick={() => {setShowMedicineModal(true)}}>
                        <InnerButton>
                            <AddOutline
                                color={'#FFFFFF'} />

                            Adicionar Medicamento
                        </InnerButton>
                    </Button>
                </Content>
                <MedicineModal show={showMedicineModal} setShowModal={setShowMedicineModal} setMedicineInfo={setSelectedMedicine} dataToEdit={selectedMedicine} />
                <RemoveModal show={showRemoveModal} setShowModal={setShowRemoveModal} setMedicineInfo={setSelectedMedicine} dataToDelete={selectedMedicine} setMedicines={setMedicines} />
                        
            </>
        );
    }
}

const Medicines = styled.div`
        margin-bottom: 2%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;

        
        @media (max-width: 600px){
            justify-content: center;
            display: flex;
            flex-direction: row;
            align-items: center;
        }

    `;

const InnerButton = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 300px;
    `;

export default MedicinesPage;
