import { Label, Input } from "./Filter";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filterSlice";

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Label>
      Filter
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
        placeholder="Search..."
      />
    </Label>
  );
};
