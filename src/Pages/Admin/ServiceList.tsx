import { useGetServices } from "@/components/api/admin/services/services.hool";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Trash2Icon } from "lucide-react";
import { FormEvent, useState } from "react";

const ServiceList = () => {
  const { data: services, isLoading, isError } = useGetServices();
  const [serviceName, setServiceName] = useState("");
  const queryClient = useQueryClient();
  const {
    mutateAsync,
    isError: postError,
    isSuccess,
  } = useMutation({
    mutationFn: async (data) => {
      return await fetch("http://localhost:5000/api/v1/services", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["services"] });
    },
  });
  console.log({ postError, isSuccess });
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const serviceData = {
      name: serviceName,
      description: "Description one",
      devices: ["Smartphone", "Laptop", "Tablet"],
      price: 200.0,
    };
    console.log(serviceData);
    await mutateAsync(serviceData);
    console.log("done");
  };

  if (isLoading) {
    return <p>Loading.......</p>;
  }
  if (isError) {
    return <p>Somthing went wrong</p>;
  }
  const totalSum = services
    .map((p) => p.price)
    .reduce((acc, currentValue) => acc + currentValue, 0);

  return (
    <div className="m-10 border-2 p-5">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">name</TableHead>
            <TableHead>description</TableHead>
            <TableHead>price</TableHead>
            <TableHead>action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="">
          {services?.map((item) => (
            <TableRow className="border-b-2 border-red-400" key={item.id}>
              <TableCell className="font-medium ">{item.name}</TableCell>
              <TableCell className="font-medium">{item.description}</TableCell>
              <TableCell className="font-medium">{item.price}</TableCell>
              <TableCell className="font-medium">
                <Button variant="destructive" className="p-2">
                  {" "}
                  <Trash2Icon />{" "}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell></TableCell>
            <TableCell className="">${totalSum}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>

      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={(e) => setServiceName(e.target.value)} />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default ServiceList;
