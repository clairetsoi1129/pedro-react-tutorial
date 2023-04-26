import {useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const useGetCat = (initialValue = false) => {
    const {data, isLoading: isCatLoading, isError: isCatError, refetch} = useQuery(["cat"], () => {
        return Axios.get("https://catfact.ninja/fact").then( (res) => res.data);
    });

    const refetchData = () => {
        alert("refetch data");
        refetch();
    };

    return {data, isCatLoading, isCatError, refetchData};
};
