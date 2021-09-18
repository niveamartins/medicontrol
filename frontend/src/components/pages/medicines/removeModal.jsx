import { useState, useEffect } from 'react';

import Modal from 'react-modal';
import styled from 'styled-components';
import Loading from '../../shared/loading';
import Content from '../../styled/content';

function RemoveModal(props) {

    const [MedicineInfo, setMedicineInfo] = useState(undefined);

    useEffect(() => {
    
        if (props.dataToDelete) {
            setMedicineInfo(props.dataToDelete)
            
        } 

    }, [props.dataToDelete])


    function closeModal() {
        props.setShowModal(false)
        props.setMedicineInfo(undefined)
    }

    Modal.setAppElement(document.getElementById('root'))

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
    };

    if (
        MedicineInfo === undefined 
    ) {
        return (<Modal
            isOpen={props.show}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Não foi selecionado nenhum medicamento">
            <Title>Não foi selecionado nenhum medicamento</Title>
            <Content>
                <Loading />
            </Content>
        </Modal>)
    } else {
        return (
            <>
                <Modal
                    isOpen={props.show}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Registrar Medicamento"
                >
                    <Title>Excluir medicamento</Title>

                    <p>Você tem certeza que deseja excluir {MedicineInfo.name}?</p>
                    
                    <ModalFooter>
                        <RemoveButton>Sim, excluir medicamento</RemoveButton>
                        <CancelButton onClick={closeModal}>Cancelar</CancelButton>
                    </ModalFooter>
                </Modal>
            </>
        );
    }
}

const Title = styled.div`
  font-family: 'Passion One', cursive;
  font-size: 2em;
  color: #CA0B00;
  margin-bottom: 1em;
`;

const RemoveButton = styled.button`
    font-size: 1em;
    color: #FFFFFF;
    background-color: #CA0B00;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;

    :hover {
        filter: brightness(1.2);
    }
`;

const ModalFooter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-top: 3em;
`;

const CancelButton = styled.p`
    font-size: 1em;
    color: #CA0B00;
    width: 40%;
    display:flex;
    align-items: center;
    justify-content: center;

    :hover {
        filter: brightness(1.2);
    }
`;



export default RemoveModal;
