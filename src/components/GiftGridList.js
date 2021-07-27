import GiftGrid from "./GiftGrid";

const GiftGridList = ({ categories, setCategories }) => {
  const removeCategory = (index) => {
    setCategories(categories.filter((cat) => cat.id !== index));
  };

  return (
    <div className="GiftGridList">
      {categories.map((cat) => (
        <GiftGrid category={cat} removeCategory={removeCategory} />
      ))}
    </div>
  );
};

export default GiftGridList;
