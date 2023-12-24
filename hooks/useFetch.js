import { useState, useEffect } from 'react'
import axios from 'axios'


const useFetch = (endpoint,query) => {
    const [data,setData] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const [error,setError] = useState(null)

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': 'a87a0d3584msh8ed73f4b0db58cdp1a7069jsn09ea063f3c75',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
          },
        params: { ...query },
      }

      const fetchData = async ()=>{
        setIsLoading(true)
        try{
            const response = await axios.request(options)
            setData(response.data.data)
        }catch(error){
            setError(error)
            alert(`There is error ${error}`)
        }finally{
            setIsLoading(false)
        }
      }

      useEffect(()=>{
        fetchData()
      },[])

      const refetch = ()=>{
        setIsLoading(true)
        fetchData()
      }

      return { data, isLoading, error, refetch}
}

export default useFetch