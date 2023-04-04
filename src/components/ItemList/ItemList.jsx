const ItemList = ({ saludo, nombreDeMarca }) => {
  let nombre = "Cristian";
  const ItemList = ({ saludo }) => {
    console.log("se actualiza el hijo");
    return (
      <div>
        <h2>{saludo}</h2>
      </div>
    );
  };
};

export default ItemList;
