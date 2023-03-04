import styled from '@emotion/styled';

export const Label = styled.label`
  dispay: block;
  width: 500px;
  margin-top: 20px;
  font-size: 18px;
  font-weight: 500;
  transition: all 300ms linear;
  &:focus {
    color: #0074d9;
    cursor: pointer;
  }
`;
export const Input = styled.input`
  margin-top: 5px;
  width: 100%;
  padding: 10px;
  font-size: 18 px;
  font-weight: 500;

  background-color: #fff;
  border: 1px solid grey;
  border-radius: 4px;
  transition: all 300ms linear;
  &:focus {
    outline: none;
    border-color: rgb(65, 105, 225);
    box-shadow: 0 0 0 3px rgba(0, 116, 217, 0.3);
  }
`;