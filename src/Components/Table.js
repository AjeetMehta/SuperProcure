import React, { useState, useEffect } from "react";
import M from "materialize-css";

function Table() {
  const [Mockdata, setMockdata] = useState([]);
  useEffect(() => {
    fetch("https://superback.herokuapp.com/posts/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data1) => {
        if (data1.error) M.toast({ html: data1.error });
        else {
          setMockdata(data1);
        }
      });
  }, []);

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Institute Name</th>
            <th>Branch Name</th>
            <th>Address</th>
            <th>City</th>
            <th>Contact</th>
            <th>Branch Incharge</th>
            <th>Pincode</th>
          </tr>
          {Mockdata.map((item) => {
            return (
              <tr>
                <td>{item.institute_name}</td>
                <td>{item.branch_name}</td>
                <td>{item.address}</td>
                <td>{item.city}</td>
                <td>{item.contact}</td>
                <td>{item.branch_incharge}</td>
                <td>{item.pincode}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
