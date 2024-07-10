import React, { useState } from 'react';
import { Table, Button, Modal } from 'antd';
import { useFetchForm } from '../../Hooks/Form/useFetchForms';
import { FormAdminStyled, Header, CustomPagination } from './FormAdmin.styled';
import { updateForm } from '../../services/formService';

const FormAdmin = () => {
  const { forms, formsLoading, formError, refetch } = useFetchForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState('');

  const handleApprove = async (e, record) => {
    e.stopPropagation();
    await updateForm(record.id, { status: "Approved" })
    refetch();
  };

  const handleRowClick = (record) => {
    setSelectedContent(record.content);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedContent('');
  };

  const columns = [
    {
      title: 'Create at',
      dataIndex: 'created_at',
      key: 'created_at',
      width: "15%",
      render: (text) => {
        const date = new Date(text).toLocaleString();
        return (
          <span style={{ fontFamily: 'Poppins', lineHeight: "3em", fontSize: "1.25em" }}>
            {date}
          </span>
        );
      },
    },
    {
      title: 'Sender',
      dataIndex: 'employee_name',
      key: 'employee_name',
      width: "15%",
      render: (text) => (
        <span style={{ fontFamily: 'Poppins', lineHeight: "3em", fontSize: "1.25em" }}>
          {text}
        </span>
      ),
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      width: "20%",
      render: (text) => (
        <span style={{ fontFamily: 'Poppins', lineHeight: "3em", fontSize: "1.25em", overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 1 }}>
          {text}
        </span>
      ),
    },
    {
      title: 'Content',
      dataIndex: 'content',
      key: 'content',
      width: "30%",
      render: (text) => (
        <span style={{ fontFamily: 'Poppins', lineHeight: "3em", fontSize: "1.25em", overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 1 }}>
          {text}
        </span>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: "10%",
      render: (text) => (
        <span style={{ fontFamily: 'Poppins', color: text === 'Approved' ? 'green' : 'red', lineHeight: "3em", fontSize: "1.25em" }}>
          {text}
        </span>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      width: "10%",
      render: (text, record) => {
        if (record.status === 'Pending') {
          return (
            <Button onClick={(e) => handleApprove(e, record)}>Phê duyệt</Button>
          );
        }
        return null;
      },
    },
  ];

  const paginationConfig = {
    pageSize: 7,
  };

  return (
    <FormAdminStyled>
      <Header>Form</Header>
      <CustomPagination>
        <Table
          dataSource={forms.map(item => ({ ...item, key: item.id }))}
          columns={columns}
          loading={formsLoading}
          pagination={paginationConfig}
          onRow={(record) => ({
            onClick: () => handleRowClick(record),
          })}
        />
      </CustomPagination>
      <Modal
        title="Content"
        open={isModalOpen}
        onOk={handleModalClose}
        onCancel={handleModalClose}
        style={{ top: 20 }}
        width={800}
      >
        <p>{selectedContent}</p>
      </Modal>
    </FormAdminStyled>
  );
};

export default FormAdmin;
