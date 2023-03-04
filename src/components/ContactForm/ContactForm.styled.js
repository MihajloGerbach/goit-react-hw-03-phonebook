import styled from '@emotion/styled';
import { Form as FormikForm, Field, ErrorMessage } from 'formik';

export const Form = styled(FormikForm)`
  width: 500px;
  border: 1px solid #808080;
  border-radius: 5px;
  padding: 30px 40px;
  background-color: #e6e6fa;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const Input = styled(Field)`
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 18px;
  font-weight: 500;
  background-color: #fff;
  border: 1px solid grey;
  border-radius: 4px;
  transition: all 300ms linear;

   &:focus {
        outline: none;
        border-color: rgb(65,105,225);
        box-shadow: 0 0 0 3px rgba(0, 116, 217, 0.3);
`;

export const ErrorText = styled(ErrorMessage)`
  margin: 5px 0;
  color: red;
  font-size: 16 px;
  font-style: italic;
`;

export const Button = styled.button`
  display: inline-block;
  padding: 10px 20px;
  margin-top: 30px;
  border-color: rgb(65, 105, 225);
  color: white;
  background-color: #0074d9;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: all 300ms linear;

  &:hover,
  &:focus {
    background-color: blue;
    color: white;
  }
`;