import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';


const useBioData = () => {
    const axiosSecure = useAxiosSecure()
    const {data: bioData = [], isPending: loading, refetch} = useQuery({
        queryKey: ['bioData'],
        queryFn: async() => {
            const res = await axiosSecure.get('/bioData')
            return res.data
        }
    })
    return(
        [bioData, loading, refetch]
    )
}
export default useBioData;