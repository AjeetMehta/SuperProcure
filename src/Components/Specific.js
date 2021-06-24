import React from "react";

function Specific(props) {
  console.log("Hello");
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

          {props.value.map((item) => {
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

export default Specific;
