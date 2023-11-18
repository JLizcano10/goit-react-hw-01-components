import styled from "styled-components";

export const FriendListComponent = styled('ul')`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 445px;
`;

export const FriendListItem = styled('li')`
    display: flex;
    align-items: center;
    gap: 15px;
    height: 90px;
    padding: 10px 15px;
    border-radius: 5px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 5px;
`;

export const FriendListStatus = styled('span')`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: green;
`;

export const FriendListAvatar = styled('img')`
    border-radius: 5px;
`;
