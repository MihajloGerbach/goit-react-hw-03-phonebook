import { Component } from 'react';
import { nanoid } from 'nanoid';
import contacts from '../contacts.json';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container, Header, SubHeader } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      const parsedContacts = JSON.parse(savedContacts);
      this.setState({ contacts: parsedContacts });
      return;
    }
    this.setState({ contacts: contacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = contact => {
    if (
      this.state.contacts.some(
        item => item.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      return alert(`${contact.name} is already in contacts`);
    } else {
      contact.id = nanoid();
      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
    }
  };

  onDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  onSearhContact = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  onUpdateSearhContact = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const visible = this.onSearhContact(contacts, filter);
    return (
      <Container>
        <Header>Phonebook</Header>
        <ContactForm onSubmit={this.addContact} />
        <SubHeader>Contacts</SubHeader>
        <Filter value={filter} onChange={this.onUpdateSearhContact} />
        <ContactList
          contacts={contacts}
          onDelete={this.onDeleteContact}
          onFilteredContact={visible}
        />
      </Container>
    );
  }
}