import styled from "styled-components";

export const Container = styled.main  `
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const CadastrarContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    div.info{
       margin-top: 20px;
    }

    h3{
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        margin-bottom: 20px;
        line-height: 44px;

        color: #FFF;
    }

    p{
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        margin-bottom: 20px;
        line-height: 22px;

        color: #FFF;
    }

    a{
        color: #23DD7A;
    }
`

export const Title = styled.h2 `
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #FFF;
`