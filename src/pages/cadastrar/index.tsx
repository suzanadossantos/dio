import React from 'react';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { MdPerson, MdEmail, MdLock } from 'react-icons/md';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { api } from '../../services/api';
import {
    Container,
    Title,
    CadastrarContainer
} from './styles';
import { IFormData } from './types';

const schema = yup.object({
    name: yup.string().min(5, 'No minimo 5 caracteres').required('Campo obrigatorio'),
    email: yup.string().email('email não é válido').required('Campo obrigatorio'),
    password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatorio'),
}).required();

const Cadastrar = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () =>{
        navigate('/login');
    }

    const { control, handleSubmit, formState: { errors }} = useForm<IFormData>({
        resolver: yupResolver (schema),
        mode: 'onChange',
    });

    const onSubmit = async (formData : IFormData) => {
        try{
            const { data } = await api.get(`users?name=${formData.name}&email=${formData.email}&senha=${formData.password}`);
            if(data.length === 1){
              navigate('/feed');  
            }else{
                alert('Nome, email ou senha invalido')
            }      
        }catch{
            alert('Houve um erro, tente novamente.')
        }
    };

    return(<>
        <Header/>
        <Container>
            <Title>
                A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
            </Title>
            <CadastrarContainer>
                <div>
                    <h3>Comece agora grátis</h3>
                    <p>Crie sua conta e make the change._</p>  
                </div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="name" errorMessage={errors?.name?.message} control={control} placeholder="Nome completo" leftIcon={<MdPerson />}/>
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />}/>
                        <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Password" type="password" leftIcon={<MdLock />}/>
                        <Button title="Criar minha conta" variant="secondary"  type="submit"/>
                    </form>   
                </div>
                <div className='info'>
                    <p>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</p>
                    <br/>
                    <p>Já tenho conta. <a href="#" onClick={handleClickSignIn}>Fazer login</a></p>   
                </div>
            </CadastrarContainer>
        </Container>
    </>)
}

export { Cadastrar }