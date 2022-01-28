import React from "react";

const List = ({
    handleAdd,
    handleChange,
    handleClickEdit,
    handleDelete,
    handleEdit,
    idSelected,
    list,
    newName,
    title,
}) => {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <h2 style={{ color: "red" }}>{item}</h2>
            {idSelected === index && (
              <form onSubmit={handleEdit}>
                <input
                  value={newName}
                  onChange={(e) => handleChange(e.target.value)}
                />
                <button type="submit">Valider</button>
              </form>
            )}

            <button type="button" onClick={() => handleDelete(index)}>
              Supprimer
            </button>
            <button type="button" onClick={() => handleClickEdit(index)}>
              Modifier
            </button>
          </li>
        ))}
      </ul>
      <button type="button" onClick={handleAdd}>
        Ajouter
      </button>
    </>
  );
};

export default List;
