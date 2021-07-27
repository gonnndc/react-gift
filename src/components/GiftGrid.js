const GiftGrid = ({ category, removeCategory }) => {
  const getGifs = async () => {
    const url =
      "api.giphy.com/v1/gifs/trending?api_key=FsQkWtVHmh9D35taFTw3y0Sb2Z3sbyg9&q=naruto&limit=10";
    const resp = await fetch(url);
    const data = await resp.json();

    console.log(data);
  };

  getGifs();

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
