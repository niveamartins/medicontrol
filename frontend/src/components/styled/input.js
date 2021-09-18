
import styled from 'styled-components';

const Input = styled.input`
    padding: 0.4em 0.5em;
    width: ${props => props.group? "50%" : "95%"};

    background-color: ${props => (props.type === 'submit' && props.primary)? "#3B929C" : (props.type === 'submit' && props.darker)? "#255B61" : (props.type === 'submit' && props.secondary)? "white" : ""};
    border: ${props => (props.type === 'submit')? "none" : ""};
    border-radius: ${props => (props.type === 'submit')? "4px" : ""};
    color: ${props => (props.type === 'submit' && props.primary)? "white" : (props.type === 'submit' && props.darker)? "white" : (props.type === 'submit' && props.secondary)? "#3B929C" : ""};;
    :hover {
      filter: ${props => (props.type === 'submit')? "brightness(1.2)" : ""};
    }

    @media (max-width: 1050px){
      width: ${props => props.group? "90%" : "95%"};
    }
`;

export default Input;