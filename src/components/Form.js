import React from 'react'

function Form(props) {
    const { submit } = props;

    function values() {
        const search = document.getElementById('search').value.trim().toLowerCase();
        const select = document.getElementById('select');
        const category = select.options[select.selectedIndex].value;
        return { search, category };
    }

    return (
        <form className="form-inline my-3">
            <div className="form-group">
                <label htmlFor="search">Search</label>
                <input
                    type="text"
                    className="form-control mx-2"
                    id="search"
                    placeholder="Name, email, etc."
                />
            </div>
            <select className="form-control mx-2" id="searchSelect">
                <option value="fName">First Name</option>
                <option value="lName">Last Name</option>
                <option value="phone">Phone Number</option>
                <option value="email">Email</option>
            </select>
            <button
                type="button"
                className="btn btn-primary mx-2"
                onClick={() => submit(values())}
            >
                Submit
      </button>
        </form>
    )
}

export default Form;
