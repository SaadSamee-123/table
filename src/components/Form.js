import React, { useState } from "react";
import Table from "./Table";

const Form = (props) => {
  const initialState = {
    name: "",
    email: "",
  };
  const [user, setUser] = useState(initialState);
  // const [goTable, setGoTable] = useState(false);
  const handleChange = (event) => {
    setUser((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = () => {
    // setGoTable(true);
    // setUser(initialState);
    props.Addusers((currentdata) => [...currentdata, user]);
    setUser(initialState);
  };
  return (
    <div>
      <h1>Form</h1>
      <form>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
      </form>

      <button onClick={() => handleSubmit()}>SUBMIT</button>
      {/* {goTable && <Table name={[user]} />} */}
    </div>
  );
};

export default Form;

const [user, setUser] = useState(initialState);
// const [goTable, setGoTable] = useState(false);
const handleChange = (event) => {
  setUser((values) => ({
    ...values,
    [event.target.name]: event.target.value,
  }));
};
const handleSubmit = () => {
  // setGoTable(true);
  // setUser(initialState);
  props.Addusers((currentdata) => [...currentdata, user]);
  setUser(initialState);
};
// return (
//   <div>
//     <h1>Form</h1>
//     <form>
//       <div>
//         <label>Name</label>
//         <input
//           type="text"
//           name="name"
//           value={user.name}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label>Email:</label>
//         <input
//           type="email"
//           name="email"
//           value={user.email}
//           onChange={handleChange}
//         />
//       </div>
//     </form>
