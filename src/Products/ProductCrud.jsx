import React, {useEffect, useState} from 'react'
import ProductsForm from './ProductsForm'

const ProductCrud = ({value, formProduct, setformProduct}) => {
    const {
        resCategory,
        GetCategoriesList,
        PostProduct,
        PutProduct
    } = value

    const [categories, setCategories] = useState([])

    const onChangeForm = ({target})=>{
        const {id, value, files} = target
        if(id === 'image'){
            setformProduct({...formProduct, image : "imagen.png"})
        }else{
            setformProduct({...formProduct, [id] : value})
        }
    }

    const saveProduct = ()=>{
        if (formProduct.name === '' || 
            formProduct.description === ''|| 
            formProduct.category === '' ||
            formProduct.image === '')
        {
            alert('Debe llenar todos los campos')
        }else{
            PostProduct(formProduct)
        }
    }

    const updateProduct = () => {
        if (formProduct.id === ''){
            alert('Debe seleccionar un producto')
        }else{
            PutProduct(formProduct)
        }
    }

    useEffect(() => {
        GetCategoriesList()
    }, [])

    useEffect(() => {
        if(resCategory != undefined){
            setCategories(resCategory)
        }
    }, [resCategory])
    
  return (
    <>
        <ProductsForm
            onChangeForm = {onChangeForm}
            saveProduct = {saveProduct}
            categories = {categories}
            product = {formProduct}
            updateProduct = {updateProduct}
        />
    </>
  )
}

export default ProductCrud
