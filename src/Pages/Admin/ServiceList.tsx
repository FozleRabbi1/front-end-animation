import { useQuery } from "@tanstack/react-query";
import React from "react";

const ServiceList = () => {
  const getServices = async () => {
    return await fetch("http://localhost:5000/api/v1/services").then((res) =>
      res.json()
    );
  };

  const { data, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });

  console.log(data?.data);

  return <div>this is service list</div>;
};

export default ServiceList;
