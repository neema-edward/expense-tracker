import React from "react";
import Expense from "./Expenses";

function Table () {
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
                <Expense/>
            </table>
        </div>
    )
}

export default Table;