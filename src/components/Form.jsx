import React from "react";

function Form () {
    return (
        <div>
            <form id="exp-form">
                <h2>Add Expense</h2>
                <p>Enter your expense details below</p>
                <input name="exp-name" type="text" placeholder="Enter Expense Name"/><br /><br />
                <input name="exp-description" type="text" placeholder="Enter Expense Description"/><br /><br />
                <input name="exp-category" type="text"placeholder="Enter Expense Category" /><br /><br />
                <input name="exp-amount" type="amount" placeholder="Enter amount"/><br /><br />
                <input name="exp-date" type="date" /><br /><br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;