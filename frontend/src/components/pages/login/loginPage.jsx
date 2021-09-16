
import styled from 'styled-components';

function LoginPage() {
    return (
        <>
            <Box>
                <LoginTab>
                    Um teste
                </LoginTab>
                
            </Box>
        </>
    );
  }

  const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: end;
`;

  const LoginTab = styled.div`
  background-color: #3B929C;
  width: 40%;
  height: 100vw;
`;
  
  export default LoginPage;
  