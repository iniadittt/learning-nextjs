"use client";

import React from "react";

// https://jsonplaceholder.typicode.com/users
// id, name, email

interface IUser {
  id: number;
  name: string;
  email: string;
}

const ClientUser = () => {
  const [users, setUsers] = React.useState<IUser[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  //   Akan menjalankan sesuatu di fungsi dari suatu kejadian
  React.useEffect(() => {
    console.log("use effect client 1");
  });

  React.useEffect(() => {
    try {
      setIsLoading(true);
      const requestToURL = async () => {
        const request = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          {
            method: "GET",
          }
        );
        const response = await request.json();
        const data: IUser[] = response.map((user: any) => {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
          };
        });
        setUsers(data);
      };
      requestToURL();
    } catch (error: any) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div>
      <p>Client Component</p>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        users.map((user: IUser, index: number) => {
          return (
            <p key={index}>
              {user.id} | {user.name} | {user.email}
            </p>
          );
        })
      )}
    </div>
  );
};

export default ClientUser;
