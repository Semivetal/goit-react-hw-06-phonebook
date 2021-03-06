import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.context}>
      <h1 className="text">Phonebook</h1>
      <ContactForm />
      <h2 className="text">Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
