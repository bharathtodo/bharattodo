import axios from "axios"

export async function requestTODO (todoNum){
    try {
        const endpoint = `https://jsonplaceholder.typicode.com/todos/${todoNum}`
        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        }
        const response = await axios.get(endpoint,config)
        console.log('====================================');
        console.log("reponse",response);
        console.log('====================================');
        return response
    } catch (error) {
        throw error
    }
}