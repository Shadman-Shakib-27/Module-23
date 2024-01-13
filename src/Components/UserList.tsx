import React from "react";

const UserList = ({ isLoading, error, data }) => {
  return (
    <div>
      {data.map((item) => (
        <p>{item.name}</p>
      ))}
    </div>
  );
};

export default UserList;
