import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Table from "./components/Table";
// import App from "src/App.jsx"

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")

  let expenseObject = {}
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const expense = {
      expense: formData.get("expense"),
      description: formData.get("description"),
      category: formData.get("category"),
      amount: formData.get("amount"),
      date: formData.get("date"),
    };
    setExpenses([...expenses, expense]);
    event.target.reset();
  }

  function handleSearch(event) {
    setSearchTerm(event.target.value)
  }

  const filteredExpenses = expenses
    .filter((exp) =>
      exp.expense.toLowerCase().includes(searchTerm.toLowerCas())
  )
  .sort((a,b) => a.expense.localeCOmpare(b.expense) )

  return (
    <div className="app-container">
      <Header />
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <div>
          <h2>Search Expenses</h2>
          <input 
          type="text"
          placeholder="search expenses" 
          value={searchTerm}
          onChange={handleSearch}
          />
        </div>
      </div>
      <div className="form-search-container">
      <Form submitFunction={handleSubmit} />
      </div>
      <Table objectName = {expenseObject} />
    </div>
  )
}

export default App;