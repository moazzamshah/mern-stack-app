import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
const FetchData = () => {
  // https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiLink = `https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001`;

    axios.get(apiLink).then((response) => {
      const data = response.data;
      setData(data);
    });
  }, []);

  return (
    <div>
      {data.map((person, id) => {
        return <li key={id}> {person.firstName} </li>;
      })}
    </div>
  );
};

export default FetchData;
