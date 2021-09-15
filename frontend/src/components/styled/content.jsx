
import styled from 'styled-components';

function Content(props) {
    return (
        <Container>
            {props.children}
        </Container>
    );
  }

const Container = styled.div`
  background: #FFF;
  padding: 2%;
  box-sizing: box-border;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
  
export default Content;