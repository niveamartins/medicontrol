import styled from "styled-components";

function Medicine(props) {

    const {name, dosage, frequency} = props.data

    return (
        <MedicineStyled>
            <h2>{name}</h2>
            <hr/>
            <p><strong>Dosagem:</strong> {dosage}</p>
            <p><strong>Frequência:</strong> {frequency}</p>
        </MedicineStyled>
    );
  }

  const MedicineStyled = styled.div`
    background-color: #FFF;
    padding: 1%;
    margin: 1.2em;
    box-shadow: 2px 2px 6px #000000;
    border-radius: 5px;
    width: 200px;

    h2 {
        font-family: 'Passion One', cursive;
        font-size: 2em;
        color: #3B929C;
        padding-right: 3%;
    }

    p {
        font-size: 1.2em;
        padding-right: 3%;
    }

    strong {
        font-weigth: bold;
    }
`;
  
  export default Medicine;
  