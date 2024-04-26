import axios from "axios";
export const  getAllProduct= async ()=>{
    try {
        let result =await axios.get("http://localhost:4000/api/product/getProduct");
        return result.data;
    } catch (error) {
        console.log(error);
    }
}

export const doProduct= async(value)=>{
    let user=await axios.post("http://localhost:4000/api/product/createProduct",value);
    return user.status;
}