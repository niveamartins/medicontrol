
import styled from 'styled-components';
import Input from '../../styled/input';
import {ReactComponent as LoginImg} from '../../../assets/imgs/login-svg.svg';
import { Link, useHistory } from 'react-router-dom';
import { useContext, useState } from 'react';
import UserContext from '../../../contexts/userContext';
import {login} from '../../../services/userServices'


function LoginPage() {
    
    const {setUserData} = useContext(UserContext)
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })

    let history = useHistory()

    async function sendUser(e) {
       e.preventDefault() 
       const response = await login(loginData, setUserData)
       console.log(response)
       if (!response) {
           alert("não foi possível realizar o login")
       }  else {
            history.push('/medicines')
       }
    }

    function handleChange(e) {
        const {name, value} = e.target

        setLoginData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <>
            <Box>
                <ImgTab>
                    <LoginImg />
                </ImgTab>
                <LoginTab>
                    <Title>Medicontrol</Title>
                    <Form onSubmit={(e) => sendUser(e)}>
                        <Group>
                            <Label>E-mail</Label>
                            <Input type="email" required name="email" value={loginData.email} onChange={handleChange}/>
                        </Group>

                        <Group>
                            <Label>Senha</Label>
                            <Input type="password" required name="password" value={loginData.password} onChange={handleChange} />
                        </Group>

                        <LoginFooter>
                            <Input group darker type="submit" value="Entrar"/>
                            <LinkStyled to="/register">
                                <RegisterButton>Não tem conta? Cadastre-se</RegisterButton>
                            </LinkStyled>
                        </LoginFooter>
                    </Form>
                </LoginTab>
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

const LoginTab = styled.div`
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

const LinkStyled = styled(Link)`
    text-decoration: none;
    width: 40%;
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

const LoginFooter = styled.div`
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

const RegisterButton = styled.p`
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
export default LoginPage;
