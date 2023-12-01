import React from 'react';
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';

const useReceivedRequest = () => {
    const axiosSecure = useAxiosSecure()

    const {data: receivedRequest = []} = useQuery({
        queryKey: ['receivedRequest'],
        queryFn: async() => {
            const res = await axiosSecure.get('/request')
            return res.data
        }
    })
    return (
        [receivedRequest]
    )
};

export default useReceivedRequest;