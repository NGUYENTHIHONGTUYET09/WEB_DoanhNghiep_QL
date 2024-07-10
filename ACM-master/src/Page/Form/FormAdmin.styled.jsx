import styled from "styled-components";

export const Header = styled.div`
  height: 10%;
  display: flex;
  justify-content: start;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 3em;
  margin: 0;
  margin-bottom: 2%;
`;

export const FormAdminStyled = styled.div`
  width: 100%;
  height: 100%;
  user-select: none;
  padding-left: 2%;
  padding-right: 2%;
`

export const CustomPagination = styled.div`
  .ant-pagination-item {
    background-color: #001529;
    border: none;

    a {
      color: white;
    }
  }

  .ant-pagination-item-active {
    background-color: #1890ff;

    a {
      color: white;
    }
  }

  .ant-pagination-prev, .ant-pagination-next {
    button {
      color: white;
      background-color: #001529;
      border: none;
    }
  }
`;