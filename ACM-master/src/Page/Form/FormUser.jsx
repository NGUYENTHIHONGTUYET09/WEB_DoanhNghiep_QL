import React, { useState } from 'react';
import {
  Container, Header, FormContainer,
  Label, Input, Select, Button,
  ModalContainer, ModalContent, BlurBackground,
  CloseButton, HeaderWrapper, HeaderButton, StatusCell, TextArea, Table,
} from './FormUser.styled';
import { getFormById, createForm } from '../../services/formService';
import { useFormStore } from '../../Context/formStore';
import { useAuth } from '../../Context/Auth.context';
import { useFetchFormType } from '../../Hooks/Form/useFetchFormType';
import { Loading } from '../Loading';
import { Error } from '../Error';

export const FormUser = () => {
  const { formTypes, loading, error } = useFetchFormType()
  const { user } = useAuth();
  const { setFormsById, formsById } = useFormStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    selectType: '',
    title: '',
    content: '',
  });

  const handleButtonClick = async () => {
    const response = await getFormById(user.employee_id);
    if (Array.isArray(response.data)) {
      setFormsById(response.data);
    } else {
      setFormsById([]);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestData = {
      "employee": user.employee_id,
      "type": formData.selectType,
      "title": formData.title,
      "content": formData.content,
      "status": "Pending"
    }
    await createForm(requestData)
    const response = await getFormById(user.employee_id);
    if (Array.isArray(response.data)) {
      setFormsById(response.data);
    } else {
      setFormsById([]);
    }
    setIsModalOpen(true);
  };

  if (loading) return <Loading></Loading>
  if (error) return <Error error={error}></Error>

  return (
    <Container>
      <HeaderWrapper>
        <Header>Form</Header>
        <HeaderButton onClick={handleButtonClick}>Tổng hợp biểu mẫu</HeaderButton>
      </HeaderWrapper>
      <FormContainer onSubmit={handleSubmit}>
        <Label>Select type</Label>
        <Select name="selectType" value={formData.selectType} onChange={handleChange}>
          <option value="" disabled></option>
          {
            formTypes.map((value) => {
              return (
                <option key={value.id} value={value.name}>{value.name}</option>
              )
            })
          }
        </Select>

        <Label>Title:</Label>
        <Input type="text" name="title" value={formData.title} onChange={handleChange} />

        <Label>Content:</Label>
        <TextArea name="content" value={formData.content} onChange={handleChange} />

        <Button type="submit" onClick={handleSubmit}>Submit</Button>
      </FormContainer>
      {isModalOpen && <Modal onClose={closeModal} />}
    </Container>
  );
};

const Modal = ({ onClose }) => {
  const { formsById } = useFormStore();

  return (
    <>
      <BlurBackground />
      <ModalContainer>
        <ModalContent>
          <CloseButton onClick={onClose}>X</CloseButton>
          <div className='title'>Biểu mẫu đã gửi</div>
          <Table>
            <thead>
              <tr>
                <th>Created At</th>
                <th>Type</th>
                <th>Title</th>
                <th>Content</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {formsById?.map((value, index) => (
                <tr key={index}>
                  <td>{new Date(value.created_at).toLocaleString()}</td>
                  <td>{value.type}</td>
                  <td>{value.title}</td>
                  <td>{value.content}</td>
                  <StatusCell status={value.status}>{value.status}</StatusCell>
                </tr>
              ))}
            </tbody>
          </Table>
        </ModalContent>
      </ModalContainer>
    </>
  );
};

export default FormUser;
