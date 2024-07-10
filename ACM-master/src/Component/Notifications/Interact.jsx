import React from "react";
import styled from "styled-components";
import useFetchNotificationTypes from "../../Hooks/Notification/useFetchNotificationTypes";
import useNotificationStore from "../../Context";
import { createNotification, updateNotification } from "../../API/Notification";
import { Loading } from "../../Page/Loading";
import { Error } from "../../Page/Error";

const Interact = () => {
  const { notificationTypes, loading, error, refetch } = useFetchNotificationTypes();
  const { interactInput, editInteract, cancelInteract, interactType, setInteractType, userId } = useNotificationStore();

  const handleBackClick = async () => {
    setInteractType("Create");
    cancelInteract();
  };

  const handleSaveClick = async () => {
    const requestData = {
      employee_id: userId,
      type: interactInput.type,
      notification: {
        title: interactInput.title,
        content: interactInput.content
      }
    };
    if (interactType === "Edit") {
      await updateNotification(interactInput.id, requestData)
        .then(data => {
          console.log('Notification update successfully:', data);
        })
        .catch(error => {
          console.error('Error updating notification:', error);
        });
    } else {
      await createNotification(requestData)
        .then(data => {
          console.log('Notification created successfully:', data);
        })
        .catch(error => {
          console.error('Error creating notification:', error);
        });
    }
    refetch();
  };

  const handleTitleChange = (e) => {
    editInteract({ title: e.target.value });
  };

  const handleTypeChange = (e) => {
    editInteract({ type: e.target.value });
  };

  const handleContentChange = (e) => {
    editInteract({ content: e.target.value });
  };

  if (loading) return <Loading></Loading>
  if (error) return <Error error={error}></Error>
  return (
    <InteractStyled>
      <Label>Type</Label>
      <Select value={interactInput.type} onChange={handleTypeChange}>
        <option disabled></option>
        {notificationTypes.map((value) => (
          <option key={value.id} value={value.name}>{value.name}</option>
        ))}
      </Select>
      <Label>Title</Label>
      <Input value={interactInput.title} onChange={handleTitleChange} />
      <Label>Content</Label>
      <TextArea value={interactInput.content} onChange={handleContentChange} />
      <BackCreateButton>
        <div className="Back" onClick={handleBackClick}>Back</div>
        <div className="Create" onClick={handleSaveClick}>{interactType}</div>
      </BackCreateButton>
    </InteractStyled>
  );
};

export default Interact;

const InteractStyled = styled.div`
  padding: 0 3%;
  margin: auto;
  margin-top: 2%;
  background-color: #2b2e38;
  width: 70%;
  height: 60%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Label = styled.p`
  color: #007bff; 
  font-size: 1.5em;
  height: auto;
  margin: 0;
`;

const Input = styled.input`
  height: auto;
  width: 100%;
  font-size: 1.5em;
  border-radius: 20px;
  padding: 1% 1.5%;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: auto;
  font-size: 1.5em;
  border-radius: 20px;
  padding: 1% 1.5%;
`;

const Select = styled.select`
  width: 100%;
  border-radius: 20px;
  font-size: 1.5em;
  padding: 1% 1.5%;
  option {
    font-size: 1.1em;
  }
  &:hover {
    cursor: pointer;
  }
`;

const BackCreateButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  .Back {
    margin: 1%;
    font-size: 1.5em;
    color: #007bff;
    &:hover {
      cursor: pointer;
    }
  }
  .Create {
    margin: 1%;
    font-size: 1.5em;
    color: #007bff;
    &:hover {
      cursor: pointer;
    }
  }
`;
