import PropTypes from 'prop-types';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Contact, Item, Button } from './ContactListElem.styled';

export const ContactListElem = ({ id, name, number, onDelete }) => {
  return (
    <Contact key={id}>
      <Item>
        {name} : {number}
      </Item>
      <Button type="button" onClick={() => onDelete(id)}>
        <RiDeleteBinLine />
      </Button>
    </Contact>
  );
};
ContactListElem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};