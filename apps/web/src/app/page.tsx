"use client";
import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { UsersDocument } from "@libs/network/src/gql/generated";
import { BrandIcon } from "@libs/ui/src/components/atoms/BrandIcon";
import { Button } from "@libs/ui/src/components/atoms/Button";

const Home = () => {
  const { data, loading } = useQuery(UsersDocument);

  return (
    <div>
     <div>
      <p className="bg-primary-400">Hello</p>
      <BrandIcon />
      {data?.users.map((user) => (
       <div key={user.uid}>
        <p>{user.name}</p>
        <p>{user.uid}</p>
        <p>{user.createdAt}</p>
       </div>
      ))}
     </div>
     <Button className="bg-primary" loading>Hello</Button>
    </div>
  );
};

export default Home;
