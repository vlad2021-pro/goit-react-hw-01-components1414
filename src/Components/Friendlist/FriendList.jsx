import React from 'react'
import PropTypes from 'prop-types'
import FriendListItem from '../Friendlist/FriendListItem'
import {FriendListUl} from '../Friendlist/FriendList.styled'

const FriendList = ({friends}) => {
    return (
       <FriendListUl>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </FriendListUl>

    )
}

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};



