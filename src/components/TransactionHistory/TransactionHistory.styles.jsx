import styled from "styled-components";

export const TransactionTable = styled('table')`
    width: 728px;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 5px;
    overflow: hidden;
    border-collapse: collapse;
`;

export const TransactionTableHead = styled('thead')`
    font-size: 22px;
    text-transform: uppercase;
    color: #dcffff;
    background-color: #00bcd5;
    border: 1px solid #e7e7e7;
    display: table-header-group;
`;

export const TransactionTableTh = styled('th')`
    border: 1px solid #e7e7e7;
`;
export const TransactionTableInfo = styled('tr')`
    color: #8d8e91;
    background-color: white;
    border: 1px solid #e7e7e7;
`;

export const TransactionTableTd = styled('td')`
    font-size: 22px;
    font-weight: 200;
    border: 1px solid #e7e7e7;
    text-align: center;
`;
