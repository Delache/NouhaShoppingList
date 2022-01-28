import React, { useState } from "react";
import List from "./component";

const ListContainer = ({ datalist, title }) => {
  const [list, setList] = useState(datalist);
  const [idSelected, setIdSelected] = useState(null);
  const [newName, setNewName] = useState("");

  const handleAdd = () => {
    const fruit = "banane";
    setList([...list, fruit]);
  };

  const handleDelete = (id) => {
    const fruits = Array.from(list);
    fruits.splice(id, 1);
    setList(fruits);
  };

  const handleClickEdit = (id) => {
    setIdSelected(id);
    setNewName(list[id]);
  };

  const handleChange = (value) => {
    setNewName(value);
  };

  const handleEdit = () => {
    list[idSelected] = newName;
    setList([...list]);
    setIdSelected(null);
  };

  return (
    <List
      handleAdd={handleAdd}
      handleDelete={handleDelete}
      handleClickEdit={handleClickEdit}
      handleChange={handleChange}
      handleEdit={handleEdit}
      title={title}
      list={list}
      idSelected={idSelected}
      newName={newName}
    />
  );
};
export default ListContainer;
