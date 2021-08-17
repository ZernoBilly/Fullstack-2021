import React, { useState } from "react";

import Filter from "./components/Filter/Filter";
import Input from "./components/Input/Input";
import Numbers from "./components/Numbers/Numbers";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: 123456678 },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState({
    name: "",
    number: "",
  });
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleChange = (e) => {
    setNewName({ ...newName, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingName = persons.find((person) => person.name === newName.name);

    if (!existingName) {
      setPersons([...persons, { name: newName.name, number: newName.number }]);
      clear();
    } else {
      alert(`${newName.name} is already added to phonebook`);
      clear();
    }
  };

  const clear = () => {
    setNewName({ name: "", number: "" });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleSearchChange={handleSearchChange} />
      <Input
        handleSubmit={handleSubmit}
        newName={newName}
        handleChange={handleChange}
      />
      <Numbers persons={persons} search={search} />
    </div>
  );
};

export default App;
