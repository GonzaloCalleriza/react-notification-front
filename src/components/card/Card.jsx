import "./card.css";
import Heart from "../../img/heart.svg";
import HeartFilled from "../../img/heartFilled.svg";
import Comment from "../../img/comment.svg";
import Share from "../../img/share.svg";
import Info from "../../img/info.svg";
import { useState } from "react";


const Card = ({post}) => {
    return (
        <div className='card'>
            <div className='info'>
                <img src={post.userImg} alt='user' className='userImg' />
                <span>{post.fullname}</span> 
            </div>
            <img className='postImg' src={post.postImg} alt='postImg' />
            <div className='interaction'>
                <img src={Heart} alt='interaction' className='cardIcon' />
                <img src={Comment} alt='interaction' className='cardIcon' />
                <img src={Share} alt='interaction' className='cardIcon' />
                <img src={Info} alt='interaction' className='cardIcon' />
            </div>
        </div>
    );
}

export default Card;
