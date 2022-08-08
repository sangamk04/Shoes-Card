//Write the ActionCreator functions here
import * as types from "./actionTypes"
import axios from "axios"

export const getShoes=(params)=>(dispatch)=>{
    console.log(params)

    dispatch({type:types.GET_SHOES_DATA_REQUEST})
    return axios.get(`  http://localhost:8080/shoes`,params).then((r)=>{


    return dispatch({type:types.GET_SHOES_DATA_SUCCESS,payload:r.data})
    
    }).catch((err)=>dispatch({type:types.GET_SHOES_DATA_FAILURE}))
    }