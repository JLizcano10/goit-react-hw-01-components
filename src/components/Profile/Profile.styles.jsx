import styled from 'styled-components';

export const ProfileContainer = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 35px;
    width:345px;
    background-color: white;
    border-radius: 5px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const ProfileDescription = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 40px;
    overflow: hidden;
`;

export const ProfileName = styled('p')`
    font-size: 30px;
    font-weight: 700;
    color: #19283b;
`;

export const ProfileText = styled('p')`
    font-size: 24px;
    font-weight: 400;
    color: #8f9ba8;
`;

export const ProfileImage = styled('img')`
    width:150px;
    height:150px;
    margin-bottom: 30px;
    border-radius:50%;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 0px 4px 0px;
`;

export const ProfileStatBox = styled('ul')`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #f3f6f9;
    border-radius: 0 0 5px 5px;
    border-top: 1px solid #8f9ba830;
`;

export const ProfileStatsListItem = styled('li')`
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    width: 99.9%;
    padding: 20px;
    border-right:  1px solid #8f9ba830;

    &:last-child {
    border-right: none;
  }
`;

export const ProfileStatsLabel = styled('span')`
    font-size: 21px;
    font-weight: 400;
    color: #8f9ba8;
`;

export const ProfileStatsQuantity = styled('span')`
    font-size: 21px;
    font-weight: 500;
    color: #19283b;
`;