import React from "react";
import styled from "styled-components";
import {useNavigate} from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const handleNotificationClick  = () => {
        navigate('/home/notification')
    }
    
    const handleCelebrationClick = () => {
        navigate('/home/celebration')
    }
    return (
        <Container>
            <ChooseContent>
                <Title>Choose which you want to show ?</Title>
                <Choice>
                    <div onClick={handleNotificationClick}>Notification</div>
                    <div onClick={handleCelebrationClick}>Celebration</div>
                </Choice>
            </ChooseContent>
        </Container>
    );
}

export default Home;

const Container = styled.div`
    user-select: none;
    width: 100%;
    height: 100%;;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ChooseContent = styled.div`
    width: 60vw;
    height: 50vh;
`

const Title = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
    color: white; 
    font-size: 3.5em;
    font-weight: bold;
`

const Choice = styled.div`
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    div{
        background-color: #1f2029;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 30%;
        color: white;
        border: none;
        border-radius: 20px;
        font-size: 2em;
        font-weight: bold;
        &:hover{
            cursor: pointer;
            transition: transform 0.5s ease;
            color: #007bff;
            transform: scale(1.1);
        }
    }
`