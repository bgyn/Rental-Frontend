import axios from "axios"
import { BASE_URL } from "../constants/server";


export async function testBackend(){

    const {data} = await axios.get(`${BASE_URL}/api/rentitem/1`);
    console.log(data);

}