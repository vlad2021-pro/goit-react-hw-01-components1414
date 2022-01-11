import React from 'react'
import PropTypes from 'prop-types'
import {FriendCase, FriendItem, FriendStatus, FriendAvatar, FriendName, } from '../Friendlist/FriendListItem.styled'

const FriendListItem = ({avatar, name, isOnline, id}) => {
    return (
        <FriendCase>
            <FriendItem key={id}>
                
  <FriendStatus>{isOnline}</FriendStatus>
  <FriendAvatar src={avatar} alt="User avatar" width="48" />
                <FriendName> {name}</FriendName>
</FriendItem>
        </FriendCase>
    )
}

export default FriendListItem 

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
