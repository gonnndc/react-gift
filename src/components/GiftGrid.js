const GiftGrid = ({ category, removeCategory }) => {
  return (
    <div className="GiftGridItem">
      <h3>{category.input}</h3>
      <button
        onClick={() => {
          removeCategory(category.id);
        }}
      >
        Eliminar
      </button>
    </div>
  );
};

export default GiftGrid;
