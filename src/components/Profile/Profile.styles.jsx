import styled from 'styled-components';

export const ProfileContainer = styled('div')`
    display: flex;
    justify-content: center;
    height:500px;
    width:400px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px rgba(107,107,107,0.5);
`;

export const ProfileDescription = styled('div')`
    text-align: center;
`;

export const ProfileText = styled('p')`
    font-size: 24px;
`;

export const ProfileImage = styled('img')`
    width:150px;
    height:150px;
    padding: 40px 0;
    border-radius:50%;
`;