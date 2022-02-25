import "./card.css";
import Heart from "../../img/heart.svg";
import HeartFilled from "../../img/heartFilled.svg";
import Comment from "../../img/comment.svg";
import Share from "../../img/share.svg";
import Info from "../../img/info.svg";
import { useState } from "react";


const Card = ({post, socket, user }) => {

    const [liked, setLiked] = useState(false);

    const handleNotification = (type) => {
        setLiked(true);
        socket.emit('sendNotification', {
            senderName: user,
            receiverName: post.username,
            type: type,

        })
    }

    return (
        <div className='card'>
            <div className='info'>
                <img src={post.userImg} alt='user' className='userImg' />
                <span>{post.fullname}</span> 
            </div>
            <img className='postImg' src={post.postImg} alt='postImg' />
            <div className='interaction'>
                {liked ? (
                    <img src={HeartFilled} alt='interaction' className='cardIcon' onClick={() => setLiked(false)}/>
                ) : (
                    <img src={Heart} alt='interaction' className='cardIcon' onClick={() => handleNotification(1)} />
                )}
                <img src={Comment} alt='interaction' className='cardIcon' onClick={() => handleNotification(2)}/>
                <img src={Share} alt='interaction' className='cardIcon' onClick={() => handleNotification(3)}/>
                <img src={Info} alt='interaction' className='cardIcon infoIcon' onClick={() => handleNotification(4)}/>
            </div>
        </div>
    );
}

export default Card;
