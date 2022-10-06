import React, { useState } from "react";
import Form from "./Form";
import Table from "./Table";
const Home = () => {
  const [usersArray, setUsersArray] = useState([]);

  return (
    <div>
      <Form Addusers={setUsersArray} />
      <Table allUsers={usersArray} />
    </div>
  );
};

export default Home;

// const [usersArray, setUsersArray] = useState([]);

// return (
//   <div>
//     <Form Addusers={setUsersArray} />
//     <Table allUsers={usersArray} />
//   </div>
