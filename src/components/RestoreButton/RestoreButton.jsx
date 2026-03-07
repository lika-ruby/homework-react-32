import { useDispatch, useSelector } from "react-redux";
import { restoreContact } from "../../redux/contactsSlice";
import { Button } from "./RestoreButton.js";

export const RestoreButton = () => {
  const dispatch = useDispatch();

  const lastDeletedContact = useSelector(
    (state) => state.contacts.lastDeletedContact
  );

  if (!lastDeletedContact) return null;

  const handleRestore = () => {
    dispatch(restoreContact());
  };

  return (
    <Button onClick={handleRestore} id="restore-button" type="button">
      Restore last deleted contact
    </Button>
  );
};
