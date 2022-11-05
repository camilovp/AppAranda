import React, {useState} from 'react'
import axios from 'axios'

const CategoryApi = () => {
    const [resCategory, setResponse] = useState(null);
    let urlApi = 'https://localhost:7168/api/Categories'

    const GetCategoriesList = async () => {
        
        try {
            const res = await axios.get(urlApi, {
                headers:{
                    'Content-Type': 'application/json;charset=UTF-8'
                }
            });
            
            setResponse(res.data);

        } catch (error) {
            console.log(error)
        }
    }

  return {
    resCategory,
    GetCategoriesList
    }
}

export default CategoryApi

