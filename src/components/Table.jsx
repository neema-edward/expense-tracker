import React from "react";
import Expense from "./Expenses";

function Table ({objectName}) {
    return (
        <div>
            <table>
                <tr>
                    <th>Expense</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>Date</th>
                </tr>
                <Expense Expenses={objectName}/>
            </table>
        </div>
    )
}

export default Table;