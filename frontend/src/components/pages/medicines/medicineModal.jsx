import { useState, useEffect } from 'react';

import Modal from 'react-modal';
import styled from 'styled-components';
import Loading from '../../shared/loading';
import Content from '../../styled/content';
import Input from '../../styled/input';

function MedicineModal(props) {

    const [FrequencyOptions, setFrequencyOptions] = useState(undefined)
    const [DosageOptions, setDosageOptions] = useState(undefined)
    const [MedicineInfo, setMedicineInfo] = useState(undefined);
    const [title, setTitle] = useState(undefined)

    useEffect(() => {
        setDosageOptions([{
            name: "ml",
            id: 1
        }])

        setFrequencyOptions([{
            name: "ml",
            id: 1
        }])

        if (props.dataToEdit) {
            setMedicineInfo(props.dataToEdit)
            setTitle("Editar")
        } else {
            setMedicineInfo({
                name: "",
                dosage: "",
                frequency: ""
            })
            setTitle("Cadastrar")
        }
    }, [title, props.dataToEdit])

    function handleChange(e) {
        const {value, name} = e.target 
        setMedicineInfo(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

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
        },
    };

    if (
        FrequencyOptions === undefined || DosageOptions === undefined || MedicineInfo === undefined || title === undefined 
    ) {
        return (<Modal
            isOpen={props.show}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Registrar Medicamento">
            <Title>{title} medicamento</Title>
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
                    <Title>{title} medicamento</Title>

                    <Form>
                        <div>
                            <Label>Nome</Label>
                            <Input value={MedicineInfo.name} name="name" onChange={handleChange}/>
                        </div>

                        <div>
                            <Label>Dosagem</Label>

                            <InputGroup>
                                <Input group value={MedicineInfo.dosage} name="dosage" onChange={handleChange}/>
                                <Select>
                                    {
                                        DosageOptions.map((option) => {
                                            return <option value={option.id}>{option.name}</option>
                                        })
                                    }
                                </Select>
                            </InputGroup>
                        </div>

                        <div>
                            <Label>Frequência</Label>
                            <InputGroup >
                                <Input group value={MedicineInfo.frequency} name="frequency" onChange={handleChange}/>
                                <Select >
                                    {
                                        FrequencyOptions.map((option) => {
                                            return <option value={option.id}>{option.name}</option>
                                        })
                                    }
                                </Select>
                            </InputGroup>
                        </div>

                        <ModalFooter>
                            <Input group primary type="submit" value="Registrar" />
                            <CancelButton onClick={closeModal}>Cancelar</CancelButton>
                        </ModalFooter>
                    </Form>
                </Modal>
            </>
        );
    }
}

const Title = styled.div`
  font-family: 'Passion One', cursive;
  font-size: 2em;
  color: #3B929C;
`;

const Form = styled.form`
    margin-top: 1.5em;
    font-family: 'Roboto', sans-serif;

    div {
        margin-bottom: 1em;
    }
`;

const Label = styled.p`
    margin-bottom: 0.2em;
    font-size: 0.8em;
`;

const InputGroup = styled.div`
    display: flex;
    justify-content: space-between;
`;


const Select = styled.select`
    padding: 0.2em 0.5em;
    width: 30%;
    background-color: white;
    border: 1px solid grey;
    border-radius: 2px;
`;

const ModalFooter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-top: 2em;
`;

const CancelButton = styled.p`
    font-size: 0.8em;
    color: #3B929C;
    width: 40%;
    display:flex;
    align-items: center;
    justify-content: center;

    :hover {
        filter: brightness(1.2);
    }
`;


export default MedicineModal;
