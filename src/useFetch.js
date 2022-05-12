import {useEffect,useState} from 'react';


const useFetch =(url)=>{
    const [data,setData]=useState(null)
    const [isPending,setPending]=useState(true)
    const [error,setError]=useState(null)
    useEffect(()=>{

        fetch(url)
        .then(res=>{
            if(!res.ok){
                throw Error('Couldnt fetch data from that URL')
            }
            
            return res.json();
            
        }).then(data=>{
           
            setData(data)
            setPending(false)
            setError(null)
        }).catch(err=>{
            setError(err.message)
            setPending(false)
        })


    },[url]);

    return {data,isPending,error}
}



export default useFetch;