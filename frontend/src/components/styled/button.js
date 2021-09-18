
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => (props.outline && !props.primary)? "transparent" : (props.outline && props.primary)? "transparent" : (!props.outline && props.primary)? "#3B929C" : props.secondary? "#FFFFFF" : "" };
  border: ${props => (props.outline && !props.primary)? "2px solid white" : (props.outline && props.primary)? "3px solid #3B929C" : "none"};
  padding: 4px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => (props.outline && !props.primary)? "#FFFFFF" : (props.outline && props.primary)? "#3B929C" : (!props.outline && props.primary)? "#FFFFFF" : props.secondary? "#3B929C" : "" };

  :hover {
    filter: brightness(1.2);
  }
  
  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Button;