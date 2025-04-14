import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Table from "./components/Table";

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

     expenseObject = {
      'expense': expense,
      'description': description,
      'category': category,
      'amount': amount,
      'date': date,
    };
    console.log(expenseObject);
  }
  return (
    <div>
      <Header />
      <Form submitFunction={handleSubmit} />
      <Table objectName = {expenseObject} />
    </div>
  )
}

export default App;