import React from "react";
import HeadingContent from "../../../layouts/components/HeadingContent";

const ManageUsers = () => {
  return (
    <div>
      <HeadingContent title="Admin - List User" />

      <div className="main-content">
        <table>
          <thead>
            <tr>
              <td>No</td>
              <td>User ID</td>
              <td>Email</td>
              <td>Providers</td>
              <td>Tanggal</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>sadawd34tgv5y54e-g34</td>
              <td>dimassetiaji@gmail.com</td>
              <td>Gmail</td>
              <td>20-07-2023</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
