import { FriendItem } from 'components/FriendItem/FriendItem';

import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
return <ul className={css.friendList}>
{friends.map(({ id,  avatar, name, isOnline }) => (
<FriendItem 
key={id}
avatar={avatar}
name={name}
isOnline={isOnline}/>   
))}
</ul>
}

FriendList.prototype = {
friends: PropTypes.arrayOf(
PropTypes.exact({
id: PropTypes.string.isRequired,
avatar: PropTypes.string.isRequired,
name: PropTypes.string.isRequired,
isOnline: PropTypes.bool.isRequired 
})
)
};