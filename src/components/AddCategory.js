import { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ categories, setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handlerCategory = () => {
    const obj = { input: inputValue, id: Math.random() * 100 };
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
      <h3>Add Task</h3>

      <input onChange={handlerChange} type="text" value={inputValue} />
      <button onClick={handlerCategory}>Cargar</button>
    </div>
  );
};

export default AddCategory;

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
};
