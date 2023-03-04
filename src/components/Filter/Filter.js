import { Label, Input } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <Label>
      Find contact by name:
      <Input type="text" value={value} onChange={onChange}></Input>
    </Label>
  );
};
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};