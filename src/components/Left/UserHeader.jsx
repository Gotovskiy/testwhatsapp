import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup , faCommentDots , faCircleNotch , faEllipsisVertical} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import React from 'react';
const UserInfo = styled.div`
width: 100%;
height: 49px;
min-height: 49px;
padding-top: 5px;
padding-bottom: 5px;
display: flex;
justify-content: space-between;
align-items: center;
overflow: hidden;
`
const UserAvatar = styled.img`
margin-left: 16px;
height: 40px;
width: 40px;
overflow: hidden;
border: none;
border-radius: 100px;
background-color: teal;
`
const UserBtnGroup = styled.span`
width: 190px;
height: 40px;
display: flex;
`
const UserBtn = styled.div`
height: 40px;
width: 40px;
padding-right: 8px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
font-size: 1.4rem;
`


function UserHeader() {
    return ( <UserInfo>
        <UserAvatar src="./img/logo.png"/>
            <UserBtnGroup>
            <UserBtn>
            <FontAwesomeIcon icon={faUserGroup} />
            </UserBtn>
            <UserBtn>
            <FontAwesomeIcon icon={faCircleNotch} />
            </UserBtn>
            <UserBtn>
            <FontAwesomeIcon icon={faCommentDots}/>
            </UserBtn>
            <UserBtn>
            <FontAwesomeIcon icon={faEllipsisVertical} />
            </UserBtn>
            </UserBtnGroup>
    </UserInfo> );
}

export default UserHeader;