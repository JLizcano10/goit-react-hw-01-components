import styled from "styled-components";


export const StatisticsSection = styled('section')`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 445px;
    background-color: white;
    border-radius: 5px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 0px 4px 0px;
    overflow: hidden;
`;

export const StatisticsTitle = styled('h2')`
    font-size: 50px;
    font-weight: 700;
    padding: 25px;
`;

export const StatisticsList = styled('ul')`
    display: flex;
    width: 100%;
    border-radius: 5px
`;

export const StatisticsListItem = styled('li')`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: 100%;
    padding: 10px 0 10px 0; 
    box-shadow: 0px 0px 1px 1px rgba(0,0,0,0.1) inset;
`;

export const StatisticsText = styled('span')`
    font-size:20px;
    font-weight: 500;
    color: #d9f2f5;
`;

