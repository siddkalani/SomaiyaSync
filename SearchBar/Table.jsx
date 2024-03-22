import React from "react";

const Table = ({ data }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
        {data.map((items) => (
          <tr key={items.id}>
            <td>{items.name}</td>
            <td>{items.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;





