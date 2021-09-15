import { useState, useEffect } from 'react'
import Loading from '../../shared/loading';
import Medicine from './medicine';
import NavBar from "../../shared/navbar";
import Content from '../../styled/content';
import Button from '../../styled/button';
import { AddOutline } from 'react-ionicons'
import styled from "styled-components";



function MedicinesPage() {
    const [medicines, setMedicines] = useState(undefined)

    useEffect(() => {
        setMedicines([{
            name: "Dipirona",
            dosage: 2,
            frequency: 1
        }, {
            name: "Dipirona",
            dosage: 2,
            frequency: 1
        }, {
            name: "Dipirona",
            dosage: 2,
            frequency: 1
        },
        {
            name: "Dipirona",
            dosage: 2,
            frequency: 1
        },
        {
            name: "Dipirona",
            dosage: 2,
            frequency: 1
        },
        {
            name: "Dipirona",
            dosage: 2,
            frequency: 1
        }])
    }, [])


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
                                <Medicine data={medicine} />
                            )
                        })}
                    </Medicines>
                    <Button primary>
                        <InnerButton>
                            <AddOutline
                                color={'#FFFFFF'} />

                            Adicionar Medicamento
                        </InnerButton>
                    </Button>
                </Content>
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
