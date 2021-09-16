
import styled from 'styled-components';

const Input = styled.input`
    padding: 0.2em 0.5em;
    width: ${props => props.group? "60%" : "95%"};

    background-color: ${props => (props.type === 'submit')? "#3B929C" : ""};
    border: ${props => (props.type === 'submit')? "none" : ""};
    border-radius: ${props => (props.type === 'submit')? "4px" : ""};
    color: ${props => (props.type === 'submit')? "white" : ""};
    :hover {
      filter: ${props => (props.type === 'submit')? "brightness(1.2)" : ""};
    }
`;

export default Input;