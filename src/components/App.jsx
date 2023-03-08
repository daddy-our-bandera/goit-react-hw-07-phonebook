import AddForm from 'components/AddForm/AddForm';
import { ContactList } from './ContactList/ContactList';
import { Section } from './Section/Section.styled';

function App() {
  return (
    <div>
      <Section>
        <h1>Phonebook</h1>
        <AddForm />
      </Section>

      <Section>
        <ContactList />
      </Section>
    </div>
  );
}

export { App };
