import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";

const ItemListContainer = ({ saludo }) => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("hize la peticion al BACK");
  }, [saludo]);

  console.log("me ejecute primero");

  return (
    <div>
      <ItemList saludo={saludo} />
      <Typography>{contador}</Typography>
      <button onClick={() => setContador(contador + 1)}>Sumar</button>
    </div>
  );
};

export default ItemListContainer;
