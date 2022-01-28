function App() {
  const list = ["Fraises", "Pommes", "Poire", "Fraises"];

  return (
    <div>
      <h1>Shopping</h1>
      <ul>
        {list.map((toto, index) => (
          <li key={index}>{toto}</li>
        ))}
      </ul>
      <h2 style={{ color: "red" }}>{list.join(", ")}</h2>
    </div>
  );
}

export default App;
