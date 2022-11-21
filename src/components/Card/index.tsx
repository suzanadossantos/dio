import React from 'react';

import { FiThumbsUp } from 'react-icons/fi';

import {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture
} from './styles';

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/94690066?v=4"/>
          <div>
            <h4>Suzana dos Santos</h4>
            <p>Há 7 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso HTML e CSS</h4>
          <p>Projeto feito no curso de HTML e CSS no bootcamp dio do Global avenade...<strong>Saiba Mais</strong></p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #Javascript</h4>
          <p>
            <FiThumbsUp /> 27
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  )
}

export { Card }