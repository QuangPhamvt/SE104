import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCustomerDeposit } from "../src/store/deposit/depositThunk";

function TestApi(){
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch( getAllCustomerDeposit( "077203006525"))
    },[])
    return(
        <div>
            TEST
        </div>
    )
}

export default TestApi