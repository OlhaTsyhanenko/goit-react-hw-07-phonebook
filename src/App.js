import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
// import Loader from "./components/Loader/Loader";
// import { getLoading } from "./redux/contacts/contacts-selectors";

export default function App() {
  //const isLoading = useSelector(getLoading);
    //console.log(isLoading);
       
  return (
    <div className="App">
      <h1>Phonebook</h1>      
      <ContactForm />
      <h2>Contacts</h2>
      {/* {isLoading && <Loader />} */}
      <Filter />
      <ContactList />
    </div>
  );
  
}



