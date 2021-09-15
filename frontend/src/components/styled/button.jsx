
import styled from 'styled-components';

function Button(props) {
    return (
        <ButtonStyled primary={props.primary} outline={props.outline} secondary={props.secondary}>
            {props.children}
        </ButtonStyled>
    );
}

const ButtonStyled = styled.button`
  background-color: ${props => props.outline? "transparent" : props.primary? "#3B929C" : props.secondary? "#FFFFFF" : ""};
  border: ${props => props.outline? "2px solid white" : "none"};
  padding: 4px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.outline? "#FFFFFF" : props.primary? "#FFFFFF" : props.secondary? "#3B929C" : ""};
  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Button;