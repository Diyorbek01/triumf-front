import {useState,useEffect} from "react";

const initialState ={
    data:null,
    loading:true
}


export const useFetch =(url)=>{
    const  [state,setState] = useState(initialState)

    useEffect(()=>{
        setState({data:null,loading:false})
        fetch(`https://triumf.pythonanywhere.com/api/v1/dashboard/${url}`)
            .then((response)=>response.json())
            .then((data)=>{
                console.log(data)
                setState({data:data,loading:false})
            })
    },[url])

    return state
}