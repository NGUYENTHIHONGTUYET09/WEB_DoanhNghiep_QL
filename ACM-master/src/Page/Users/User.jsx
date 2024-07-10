import React, { useState } from 'react';
import { Input, Button, Modal, Form, Upload, Avatar, List, Typography } from 'antd';
import { PlusOutlined, UserOutlined } from '@ant-design/icons';
import {
  UserStyled, Header, RightContainer, LeftContainer, ButtonBlock, SearchBlock, EmployeeDetails, EmployeeAvatar,
  EmployeeInfo, EmployeeName, EmployeeListContainer, EmployeeItem,
} from "./User.styled";
import { createEmployee } from '../../services/employeeService';
import { useFetchEmployees } from '../../Hooks/Employee/useFetchEmployee';

const User = () => {
  const { employees, loading, error, refetch } = useFetchEmployees();
  const [isModalOpen, setModalOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [form] = Form.useForm();

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
    if (!isModalOpen) {
      form.resetFields();
      setPreviewImage(null);
    }
  };

  const handleCreate = () => {
    form.validateFields()
      .then(values => {
        console.log('Form values:', values);
        // Convert appointment_date to ISO format
        values.appointment_date = new Date(values.appointment_date).toISOString();
  
        // Tạo formData từ giá trị của form
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('citizen_id', values.citizen_id);
        formData.append('birthdate', values.birthdate);
        formData.append('phone', values.phone);
        formData.append('appointment_date', values.appointment_date);
        // Thêm ảnh vào formData nếu có
        if (values.image) {
          formData.append('image', values.image);
        }
  
        // Gọi service createEmployee với formData
        createEmployee(formData)
          .then(() => {
            // Xử lý khi thêm thành công
            toggleModal(); // Đóng modal sau khi thêm thành công
          })
          .catch((error) => {
            // Xử lý khi có lỗi
          });
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

  const handleCancel = () => {
    setModalOpen(false);
  };

  const handleUploadChange = ({ fileList }) => {
    if (fileList && fileList.length > 0) {
      const file = fileList[0];
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file.originFileObj);
    } else {
      setPreviewImage(null);
    }
  };

  const selectEmployee = (employee) => {
    setSelectedEmployee(employee);
    console.log(employee)
  };

  const handleSearchChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <UserStyled>
      <LeftContainer>
        <Header>
          Employee manage
        </Header>
        {selectedEmployee && (
          <EmployeeDetails>
            <Avatar size={100} icon={<UserOutlined />} src={"https://images.baoangiang.com.vn/image/fckeditor/upload/2023/20230708/images/3307710562093596416648618621888356324719940n-16315649.jpg" || null} />
            <Typography.Title level={4} style={{ margin: '20px 0 0' }}>{selectedEmployee.name}</Typography.Title>
            <Typography.Text>Citizen ID: {selectedEmployee.citizen_id}</Typography.Text>
            <Typography.Text>Birthdate: {new Date(selectedEmployee.birthdate).toLocaleDateString()}</Typography.Text>
            <Typography.Text>Phone: {selectedEmployee.phone}</Typography.Text>
            <Typography.Text>Appointment Date: {new Date(selectedEmployee.appointment_date).toLocaleDateString()}</Typography.Text>
          </EmployeeDetails>
        )}
      </LeftContainer>
      <RightContainer>
        <ButtonBlock>
          <Button type="primary" style={{ width: '100%', height: '40px' }} onClick={toggleModal}>
            Thêm nhân viên
          </Button>
        </ButtonBlock>

        <SearchBlock>
          <Input
            placeholder="Tìm kiếm nhân viên..."
            style={{ width: '100%', height: '40px' }}
            value={searchKeyword}
            onChange={handleSearchChange}
          />
        </SearchBlock>

        <EmployeeListContainer>
          {filteredEmployees.map(employee => (
            <EmployeeItem key={employee.id} onClick={() => selectEmployee(employee)}>
              <EmployeeAvatar size={64} icon={<UserOutlined />} src={"https://images.baoangiang.com.vn/image/fckeditor/upload/2023/20230708/images/3307710562093596416648618621888356324719940n-16315649.jpg" || null} />
              <EmployeeInfo>
                <EmployeeName>{employee.name}</EmployeeName>
              </EmployeeInfo>
            </EmployeeItem>
          ))}
        </EmployeeListContainer>
      </RightContainer>
      <Modal
        title="Thêm nhân viên"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleCreate}>
            Create
          </Button>,
        ]}
      >
        <Form form={form} layout="vertical">
          <Form.Item label="Image" name="image" valuePropName="fileList" getValueFromEvent={(e) => e && e.fileList}>
            <Upload
              name="image"
              listType="picture-card"
              showUploadList={false}
              beforeUpload={() => false}
              onChange={handleUploadChange}
            >
              {previewImage ? <img src={previewImage} alt="avatar" style={{ width: '100%' }} /> : (
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              )}
            </Upload>
          </Form.Item>
          <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input the name!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Citizen ID" name="citizen_id" rules={[{ required: true, message: 'Please input the citizen ID!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Birthdate" name="birthdate" rules={[{ required: true, message: 'Please input the birthdate!' }]}>
            <Input type="date" />
          </Form.Item>
          <Form.Item label="Phone" name="phone" rules={[{ required: true, message: 'Please input the phone number!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Appointment Date" name="appointment_date" rules={[{ required: true, message: 'Please input the appointment date!' }]}>
            <Input type="date" />
          </Form.Item>
        </Form>
      </Modal>
    </UserStyled>
  );
}

export default User;
