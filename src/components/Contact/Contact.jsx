import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <div className={css.contactBox}>
      <ul className={css.contactList}>
        <li>{name}</li>
        <li>{number}</li>
      </ul>
      <button
        onClick={() => dispatch(deleteContact(id))}
        className={css.deleteButton}
      >
        Delete
      </button>
    </div>
  );
}

