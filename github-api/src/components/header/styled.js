import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 4px;
  input {
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    height: 44px;
    padding: 8px;
    font-weight: 500;
  }
  button {
    background-color: #1f6feb;
    padding: 8px 16px;
    margin: 0 16px;
    border-radius: 8px;
    &:hover {
      background-color: #3182ce;
    }
    span {
      font-weight: bold;
      color: #ffff;
    }
  }
`;