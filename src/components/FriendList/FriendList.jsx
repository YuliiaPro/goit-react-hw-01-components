import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({ friends  }) => {
    return <ul className={css.friendList}>
        {friends .map(({ id,  avatar, name, isOnline }) => (
            <li className={css.item} key={id}>
{isOnline ? <span style={{background: "#07ee1a"}} className={css.status}>{isOnline}</span> : <span style={{background: "red"}} className={css.status}>{isOnline}</span>}
                <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                <p className={css.name}>{name}</p>
            </li>
        ))}
</ul>
}

FriendList.prototype = {
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
};