import React from "react";

const ServerUser = async () => {
  const request = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
  });
  const response = await request.json();

  return (
    <div>
      <p>Server Component</p>
      {response.map((user: any, index: number) => {
        return (
          <p key={index}>
            {user.id} | {user.name} | {user.email}
          </p>
        );
      })}
    </div>
  );
};

export default ServerUser;
