import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchData } from "./postSlice";

export const PostView = () => {

    const {isLoading, error, data} = useSelector((state)=> state.posts)
    
    const dispatch = useDispatch();
    useEffect(()=>{
       dispatch(fetchData())
    }, [])

  return (
    <div>
        {isLoading && <h1>Loading ....</h1>}
        {error && <h>{error.message}</h>}
        {data && data.map((data) => {
            console.log(data);
        })}
    </div>
  )
}
