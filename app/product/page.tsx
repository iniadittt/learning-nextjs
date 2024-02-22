import React from "react";
import Count from "@/components/Count";
import ClientUser from "@/components/ClientUser";
import ServerUser from "@/components/ServerUser";

const Product = () => {
  return (
    <div className="flex flex-col gap-8">
      <Count />
      <ClientUser />
      <ServerUser />
    </div>
  );
};

export default Product;
