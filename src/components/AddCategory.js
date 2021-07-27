import { useState } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

const AddCategory = ({ categories, setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handlerCategory = () => {
    const obj = { input: inputValue, id: nanoid() };
    if (inputValue.trim() !== "") {
      setCategories(categories.concat(obj));
    }
    setInputValue("");
  };

  const handlerChange = (event) => {
    const valueJoined = event.target.value;
    setInputValue(valueJoined);
  };

  return (
    <div>
      <h3>Add Category</h3>

      <input onChange={handlerChange} type="text" value={inputValue} />
      <button onClick={handlerCategory}>Cargar</button>
    </div>
  );
};

export default AddCategory;

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
};
