import React from "react";

function Expense({Expenses}) {
    return (
        <tbody>
            <tr>
                <td>{Expenses.expense}</td>
                <td>{Expenses.description}</td>
                <td>{Expenses.category}</td>
                <td>{Expenses.amount}</td>
                <td>{Expenses.date}</td>
            </tr>
        </tbody>
    )
}

export default Expense;