import React from 'react'
import { FriendListAvatar, FriendListComponent, FriendListItem, FriendListStatus } from './FriendList.styles';

// const colorStatus = (isOnline) => {
//     if () {
        
//     }
// }

const FriendList = ({friends}) => {
    return (
        <FriendListComponent className="friend-list">
            {friends.map(({ avatar, name, isOnline, id }) => (
                <FriendListItem className="item" key={id}>
                    <FriendListStatus className="status" style={{backgroundColor: isOnline === true ? "#4eae51" : "#fd5351"}}></FriendListStatus>
                    <FriendListAvatar className="avatar" src={avatar} alt={name} width="48" />
                    <p className="name">{name}</p>
                </FriendListItem>
            ))}
            
        </FriendListComponent>
  )
}

export default FriendList;