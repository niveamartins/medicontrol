import styled from "styled-components";
import Button from "../../styled/button";
import { PencilSharp, TrashBinSharp } from 'react-ionicons'

function Medicine(props) {

    const {name, dosage, frequency} = props.data

    return (
        <MedicineStyled>
            <MedicineBar>
                <h2>{name}</h2>

                <MedicineButtons>
                    <Button outline primary onClick={() => {
                        props.setMedicineInfo(props.data)
                        props.setShowMedicineModal(true)
                    }}>
                        <PencilSharp color={'#3B929C'} />
                    </Button>
                    <Button outline primary onClick={() => {
                        props.setMedicineInfo(props.data)
                        props.setShowRemoveModal(true)
                    }}>
                        <TrashBinSharp color={'#3B929C'} />
                    </Button>
                </MedicineButtons>
            </MedicineBar>
            <hr/>
            <p><strong>Dosagem:</strong> {dosage}</p>
            <p><strong>Frequência:</strong> {frequency}</p>
        </MedicineStyled>
    );
  }

  const MedicineStyled = styled.div`
    background-color: #FFF;
    padding: 1.2em;
    margin: 1.2em;
    box-shadow: 2px 2px 6px #000000;
    border-radius: 5px;
    width: 350px;

    h2 {
        font-family: 'Passion One', cursive;
        font-size: 2em;
        color: #3B929C;
        padding-right: 1.2em;
    }

    p {
        font-size: 1.2em;
        padding-right: 1.2em;
    }

    strong {
        font-weigth: bold;
    }

    @media (max-width: 450px){
            width:90%;
        }
`;
  
const MedicineBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const MedicineButtons = styled.div`
    display: flex;
    flex-direction: row;
    
    button {
        margin: 0.1em;
    }

    
`;


export default Medicine;
  