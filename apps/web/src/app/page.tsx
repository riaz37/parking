"use client";
import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { UsersDocument } from "@libs/network/src/gql/generated";

const Home = () => {
  const { data, loading } = useQuery(UsersDocument);

  return (
    <div>
     <div>
      <p>Hello</p>
      {data?.users.map((user) => (
       <div key={user.uid}>
        <p>{user.name}</p>
        <p>{user.uid}</p>
        <p>{user.createdAt}</p>
       </div>
      ))}
     </div>
    </div>
  );
};

export default Home;
