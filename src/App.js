import React, { useEffect, useState } from "react";
import axios from "axios";
import CardList from "./components/CardList/CardList.component";
import "./App.css";
import SearchBox from "./components/SearchBox/SearchBox.component";
const App = () => {
  const [monsters, setmonsters] = useState(null);
  const [searchField, setSearchField] = useState("");
  useEffect(() => {
    const getMonsters = async () => {
      let response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setmonsters(response.data);
    };

    getMonsters();
  }, []);

  console.log(monsters);
  if (monsters) {
    let filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Monster Search"
          handleChange={(e) => setSearchField(e.target.value)}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
  return <div>Loading...</div>;
};

export default App;
