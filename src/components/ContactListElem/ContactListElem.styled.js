import styled from '@emotion/styled';

export const Contact = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #808080;
`;
export const Item = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
export const Button = styled.button`
  display: block;
  width: 80px;
  height: 34px;
  padding: 5px 10px;

  color: #fff;
  background-color: #0074d9;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
  }
  &:hover {
    background-color: red;
  }
`;