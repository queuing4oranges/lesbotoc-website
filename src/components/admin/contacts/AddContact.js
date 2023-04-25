import React from "react";
import axios from "axios";
import swal from "sweetalert";

export default function AddContact({
  toggleAddField,
  setFormError,
  formError,
  setInputs,
  inputs,
  emptyInputs,
}) {
  const handleChange = (event) => {
    const { name, type, checked, value } = event.target; //destr. target object
    const newValue = type === "checkbox" ? checked : value; //if checkbox - use checked property, otherwise use value

    setInputs((prevState) => ({
      ...prevState, //ensures state is updated in correct order when multiple updates
      [name]: newValue,
    }));
  };

  const handleSubmit = (event) => {
    //when submit - reset all errors first
    setFormError(null);
    event.preventDefault();

    //check that inputs arent null
    if (!inputs.name || inputs.name < 2) {
      setFormError("Please provide a name.");
      return;
    }
    if (!inputs.email) {
      setFormError("Please provide a valid email.");
      return;
    }

    //execute post request
    axios
      .post("https://api.itisgoodtohave.me/contacts/create.php", inputs)
      .then(function (response) {
        console.log(response.data.message);
        swal("YEAH BABY!", "You added a new contact.", "success");
      });
    emptyInputs();
    toggleAddField();
  };

  return (
    <div className="form-container">
      {formError ? formError : false}
      <div className="form-cont">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name*</label>
            <input
              className="input-item contacts-input"
              id="name"
              name="name"
              type="text"
              placeholder="first Name / last Name / nickname"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="wherefrom">Where did we meet?</label>
            <input
              className="input-item contacts-input"
              id="wherefrom"
              name="wherefrom"
              list="places"
              type="text"
              onChange={handleChange}
            />
            <datalist id="places">
              <option value="Bowling s Lesbotočem"></option>
              <option value="Knížní Klub"></option>
              <option value="Lesbotoč MUSIC KVÍZ"></option>
              <option value="Prague Pride"></option>
              <option value="Speed Dating"></option>
            </datalist>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input
              className="input-item contacts-input"
              id="email"
              name="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              placeholder="someone@email.cz"
              type="text"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              className="input-item contacts-input"
              id="phone"
              name="phone"
              type="text"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="age">Age Group</label>
            <input
              className="input-item contacts-input"
              id="age"
              list="ages"
              name="age"
              type="text"
              onChange={handleChange}
            />
            <datalist id="ages">
              <option value="20-25"></option>
              <option value="26-30"></option>
              <option value="31-35"></option>
              <option value="36-40"></option>
              <option value="41-45"></option>
              <option value="46-50"></option>
              <option value="50+"></option>
            </datalist>
          </div>

          <div className="form-group checkbox-cont">
            <label htmlFor="newsletter">Newsletter?</label>
            <input
              className="input-item contacts-input-check checkbox"
              id="newsletter"
              name="newsletter"
              type="checkbox"
              value="0"
              checked={inputs.newsletter}
              onChange={handleChange}
            />
          </div>

          <div className="form-group btn-cont">
            <button className="btn btn-success save-btn" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
