import React from "react";

const page = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div>
      <p>ID: {id}</p>
    </div>
  );
};

export default page;
