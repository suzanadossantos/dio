import React from 'react';
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png';
import { Button } from '../Button';

import{
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles';
import { IHeader } from './types';


const Header = ({autenticado} : IHeader) => {

    const navigate = useNavigate();

    const handleClickSignIn = () =>{
        navigate('/login');
    }

    const handleClickCadastrar = () =>{
        navigate('/cadastrar');
    }

  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="Logo DIO" />
                {autenticado ? (
                    <>
                        <BuscarInputContainer>
                        <Input placeholder='Buscar...'/>
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                ) : null}
                
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src='https://avatars.githubusercontent.com/u/94690066?v=4'/>
                ) : (
                    <>
                        <MenuRight href="#">Home</MenuRight>
                        <Button title="Entrar" onClick={handleClickSignIn}/>
                        <Button title="Cadastrar" onClick={handleClickCadastrar}/>
                    </>
                )}
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }