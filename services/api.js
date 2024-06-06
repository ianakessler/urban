import axios from "axios";

async function fetchApi(addr){
  try{
    const res= await axios.get(addr);
    return res.data.data;
  } catch(error){
    return null
  }
}

export default async function main(){
  const res = await fetchApi("http://localhost:1234/produtos");
  return res;
}


