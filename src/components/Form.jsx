import React from "react";

function Form ({submitFunction}) {
    return (
        <div style={{flex: 1, marginRight: "20px"}}>
            <form id="exp-form" onSubmit={submitFunction}>
                <h2 id="formh">Add Expense</h2>
                <p>Enter your expense details below</p>
                <input name="expense" type="text" placeholder="Enter Expense Name" required/><br /><br />
                <input name="description" type="text" placeholder="Enter Expense Description" required/><br /><br />
                <input name="category" type="text"placeholder="Enter Expense Category" required/><br /><br />
                <input name="amount" type="amount" placeholder="Enter amount"required/><br /><br />
                <input name="date" type="date" required/><br /><br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;