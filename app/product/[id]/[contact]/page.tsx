import React from "react";

const page = ({
  params: { id, contact },
}: {
  params: { id: string; contact: string };
}) => {
  return (
    <div>
      <p>ID: {id}</p>
      <p>CONTACT: {contact}</p>
    </div>
  );
};

export default page;
