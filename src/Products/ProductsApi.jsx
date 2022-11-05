import React, {useState} from 'react'
import axios from 'axios'

const ProductsApi = () => {
    const [resProduct, setResponse] = useState(null);
    let urlApi = 'https://localhost:7168/api/Product'

    const GetProdutsList = async () => {
        
        try {
            await axios.get(urlApi, {
                headers:{
                    'Content-Type': 'application/json'
                }
            }).then(succ => {
                setResponse(succ.data);
            });
            
            

        } catch (error) {
            console.log(error)
        }
    }

    const PostProduct = async (formData) => {
        try {
            await axios.post(urlApi, JSON.stringify(formData), {
                headers:{
                    'Content-Type': 'application/json'
                }
            }).then(succ => {
                GetProdutsList()
            });

        } catch (error) {
            console.log(error)
        }
    }

    const PutProduct = async (formData) => {
        try {
            await axios.put(urlApi, JSON.stringify(formData), {
                headers:{
                    'Content-Type': 'application/json'
                }
            }).then(succ => {
                GetProdutsList()
            });

        } catch (error) {
            console.log(error)
        }
    }

    const DeleteProduct = async (productId) => {
        try {
            await axios.delete(urlApi, 
                { params: { productId: productId }}
                ).then(succ => {
                GetProdutsList()
            });

        } catch (error) {
            console.log(error)
        }
    }

  return {
    resProduct,
    GetProdutsList,
    PostProduct,
    PutProduct,
    DeleteProduct
    }
}

export default ProductsApi

