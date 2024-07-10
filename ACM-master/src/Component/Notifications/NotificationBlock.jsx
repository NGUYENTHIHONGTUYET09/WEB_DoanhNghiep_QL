import React from "react";
import styled from "styled-components";
import { format } from 'date-fns';
import useNotificationStore from "../../Context";
import { deleteNotification } from "../../API/Notification";
import { useAuth } from "../../Context/Auth.context";

const NotificationBlock = ({ data }) => {
  const {
    editInteract, displayInteract, setInteractType,
    isDisplayContent, toggleContent, showContent, selectedNotificationId,
  } = useNotificationStore();

  const { user } = useAuth()
  const { id, time, sender, title, type, content } = data;
  const formatTime = format(time, 'dd/MM/yyyy HH:mm');
  const [dayDate, dayTime] = formatTime.split(' ');

  const handleEditClick = () => {
    setInteractType("Edit");
    displayInteract();
    editInteract({
      id: id,
      type: data.type,
      title: data.title,
      content: data.content,
    });
  };

  const handleReadClick = () => {
    if (selectedNotificationId === id && isDisplayContent) {
      toggleContent(id);
    } else {
      showContent({
        date: dayDate,
        time: dayTime,
        sender: sender,
        title: title,
        content: content,
      });
      toggleContent(id);
    }
  };

  const handleDeleteClick = async () => {
    await deleteNotification(id);
  }

  return (
    <FullContent>
      <BlockStyled>
        <DayTime>At: {dayTime}</DayTime>
        <Status> [{type}]</Status>
        <Sender>From : {sender}</Sender>
        <DayDate>Date: {dayDate}</DayDate>
        <Content>Title: {title}</Content>
        {
          user.role_name === "Admin" ? (
            <ButtonBlock>
              <p className="Read" onClick={handleReadClick}>Read</p>
              <p className="Edit" onClick={handleEditClick}>Edit</p>
              <p className="Delete" onClick={handleDeleteClick}>Delete</p>
            </ButtonBlock>) : (
            <ButtonBlock>
              <p className="Read" onClick={handleReadClick}>Read</p>
            </ButtonBlock>
          )
        }
      </BlockStyled>
      {selectedNotificationId === id && isDisplayContent && (
        <Read>{content}</Read>
      )}
    </FullContent>
  );
};

export default NotificationBlock;

const FullContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const BlockStyled = styled.div`
  padding: 0 1%;
  background-color: white;
  width: 100%;
  height: 10vh;
  margin-top: 2%;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  display: flex;
  font-weight: bold;
  gap: 1%;

  & > * {
    font-size: 22px;
    margin: 0;
    display: flex;
    justify-content: start;
    align-items: center;
  }
`;

const DayDate = styled.div`
  width: 12%;
  color: black;
`;

const DayTime = styled.div`
  width: 6%;
  color: black;
`;

const Status = styled.div`
  width: 9%;
  color: red;
`;

const Sender = styled.div`
  width: 15%;
  color: black;
`;

const Content = styled.div`
  color: black;
  margin: 0;
  flex-grow: 1;
  width: 42%;
`;

const ButtonBlock = styled.div`
  min-width: 12%;
  display: flex;

  p {
    font-size: 22px;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;

    &:hover {
      cursor: pointer;
      transition: all 0.3s ease;
      color: black;
    }
  }

  .Delete {
    color: red;
  }
`;

const Read = styled.p`
  width: 100%;
  min-height: 5vh;
  background-color: white;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  font-size: 1.5em;
  padding-left: 2%;
`;
