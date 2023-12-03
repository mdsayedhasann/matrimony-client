import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useContact = () => {
  const axiosSecure = useAxiosSecure();
  const { data: contact = [], refetch, isLoading: loading } = useQuery({
    queryKey: ['contact'],
    queryFn: async () => {
      const res = await axiosSecure.get("/contact");
      return res.data;
    },
  });
  return(
    [contact, refetch, loading]
  )
};

export default useContact;
