import { useQuery } from "@tanstack/react-query";
import { getServices } from "./services.api";

export const useGetServices = () => {
  const services = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
    select: (data) => {
      const services = data?.data?.data.map((item) => ({
        id: item._id,
        name: item.name,
        description: item.description,
        price: item.price,
      }));
      return services;
    },
    // gcTime: 5000,
    staleTime: 15000,
  });

  return services;
};
