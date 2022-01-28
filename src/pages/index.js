import React from "react";
import ListContainer from "../components/List";

const ShoppingListPage = () => {
  const title = "ShoppingList";
  const datalist = ["Fraises", "Pommes", "Poire", "Fraises"];

  return (
    <>
      <h1>{title}</h1>
      <ListContainer datalist={datalist} title={'Ma liste de fruit'}/>
    </>
  );
};
export default ShoppingListPage;
