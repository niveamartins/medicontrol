import styled from 'styled-components';
import { LogOutOutline } from 'react-ionicons'
import Button from '../styled/button';

function NavBar() {
    return (
        <Bar>
            <Title>Medicontrol</Title>
            <Button outline>
                <LogOutOutline
                    color={'#FFFFFF'} 
                    height="1.2em"
                    width="1.2em"
                    />
            </Button>
        </Bar>    
    );
  }

  const Bar = styled.div`
  background-color: #3B929C;
  padding: 1em 2em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
  
const Title = styled.div`
  font-family: 'Passion One', cursive;
  font-size: 2em;
  color: white;
`;


  export default NavBar;
  