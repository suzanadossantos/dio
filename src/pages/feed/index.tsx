import React from 'react';
import { Link } from "react-router-dom";

import banner from '../../assets/banner-dio.png'
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import { Header } from '../../components/Header';

import {
    Container,
    Column,
    Title,
    TitleHighlight
} from './styles';

const Feed = () => {
    return(<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                <UserInfo percentual={35} name='Suzana dos Santos' image='https://avatars.githubusercontent.com/u/94690066?v=4'/>
                <UserInfo percentual={75} name='Suzana dos Santos' image='https://avatars.githubusercontent.com/u/94690066?v=4'/>
                <UserInfo percentual={5} name='Suzana dos Santos' image='https://avatars.githubusercontent.com/u/94690066?v=4'/>
                <UserInfo percentual={20} name='Suzana dos Santos' image='https://avatars.githubusercontent.com/u/94690066?v=4'/>
                <UserInfo percentual={80} name='Suzana dos Santos' image='https://avatars.githubusercontent.com/u/94690066?v=4'/>
            </Column>
        </Container>
    </>)
}

export { Feed }