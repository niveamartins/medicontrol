
import styled from 'styled-components';
import Input from '../../styled/input';
import {ReactComponent as RegisterImg} from '../../../assets/imgs/register-svg.svg';
import { Link } from 'react-router-dom';


function RegisterPage() {
    return (
        <>
            <Box>
                <ImgTab>
                    <RegisterImg />
                </ImgTab>
                <RegisterTab>
                    <Title>Medicontrol</Title>
                    <Form>
                        <Group>
                            <Label>Nome</Label>
                            <Input />
                        </Group>

                        <Group>
                            <Label>E-mail</Label>
                            <Input />
                        </Group>

                        <Group>
                            <Label>Senha</Label>
                            <Input />
                        </Group>

                        <RegisterFooter>
                            <Input group darker type="submit" value="Entrar"/>
                            <LinkStyled to="/login">
                                <LoginButton>Já tem conta? Entre.</LoginButton>
                            </LinkStyled>
                        </RegisterFooter>
                    </Form>
                </RegisterTab>
            </Box>
        </>
    );
}

const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const Label = styled.p`
    margin-bottom: 0.2em;
    font-size: 0.8em;
`;

const Title = styled.div`
  font-family: 'Passion One', cursive;
  font-size: 4em;
  color: white;

  @media (max-width: 350px){
    font-size: 2em;
    }
`;

const Form = styled.form`
    margin-top: 1.5em;
    width: 60%;
    font-family: 'Roboto', sans-serif;
    color: white; 

`;

const Group = styled.div`
    display:flex;
    justify-content: flex-start;
    flex-direction: column;
    margin-top: 0.8em;
    font-size: 1.2em;
`;

const LinkStyled = styled(Link)`
    text-decoration: none;
    width: 40%;
`;

const RegisterTab = styled.div`
  background-color: #3B929C;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100vh;

  @media (max-width: 900px){
    width: 100%;
    }
`;

const ImgTab = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
      width: 60%;
  }

  @media (max-width: 900px){
    display: none;
    }
  
`;

const RegisterFooter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-top: 2em;

    @media (max-width: 1050px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

const LoginButton = styled.p`
    font-size: 0.8em;
    color: white;
    display:flex;
    align-items: center;
    justify-content: center;

    :hover {
        filter: brightness(1.2);
    }

    @media (max-width: 1050px){
        margin-top: 1em;
        width: 100%;
    }
`;
export default RegisterPage;
