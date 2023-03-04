import PropTypes from 'prop-types';
import { ContactListElem } from 'components/ContactListElem/ContactListElem';
import { ListItem } from './ContactList.styled';

export const ContactList = ({ onDelete, onFilteredContact }) => {
  return (
    <ListItem>
      {onFilteredContact.map(({ id, name, number }) => {
        return (
          <ContactListElem
            key={id}
            name={name}
            number={number}
            id={id}
            onDelete={onDelete}
          />
        );
      })}
    </ListItem>
  );
};
ContactList.propTypes = {
  onFilteredContact: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};