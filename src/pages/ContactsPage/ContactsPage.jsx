import { useEffect } from "react";
import ContactForm from "../../components/ContactForm/ContactForm"
import ContactList from "../../components/ContactList/ContactList"
import SearchBox from "../../components/SearchBox/SearchBox"
import { useDispatch, useSelector } from "react-redux";
import { selectLoading, selectError } from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";


export default function ContactsPage() {
    const dispatch = useDispatch();
const loading = useSelector(selectLoading);
    const isError = useSelector(selectError);
    
    useEffect(() => {
    dispatch(fetchContacts());
}, [dispatch]);
    
    

    return (<div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {loading && <p>Loading...</p>}
        {isError && <p>{isError}</p>}
        <ContactList />
        </div>
    )
}


 



   