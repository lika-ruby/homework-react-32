import { useDispatch, useSelector } from "react-redux";
import { restoreContact } from "../../redux/contactsSlice";
import { Button } from "./RestoreButton.js";

export const RestoreButton = () => {
  const dispatch = useDispatch();
  const lastDeletedContact = useSelector(
    (state) => state.contacts.lastDeletedContact
  );

  const handleRestore = () => {
    if (lastDeletedContact) dispatch(restoreContact());
  };

  return (
    <Button onClick={handleRestore} id="restore-button" type="button">
      Restore last deleted contact
    </Button>
  );
};
