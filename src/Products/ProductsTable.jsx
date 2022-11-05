import React, { useState, useEffect } from 'react'
import ProductCrud from './ProductCrud'

const ProductsTable = ({value}) => {
    const {
        resProduct,
        GetProdutsList,
        DeleteProduct
    } = value
    const [products, setProduts] = useState([])
    const [showForm, setShowForm] = useState(false)
    const [formProduct, setformProduct] = useState({
        id: null,
        name:'',
        description:'',
        idCategory:'',
        image:''
    })
    
    useEffect(() => {
      GetProdutsList()
    },[])

    useEffect(() => {
        if(resProduct != undefined){
            setProduts(resProduct)
        }
    }, [resProduct])
    
    const updateProduct = ({target})=>{
        products.forEach(prod => {
            if(prod.id.includes(target.value)){
                setformProduct(prod)
            }
        });
        
    }

    const deleteProduct = ({target})=>{
        DeleteProduct(target.value)
    }

    const createProduct = ()=>{
        setShowForm(true)
    }
    
    useEffect(() => {
      if(formProduct.id !== null){
        setShowForm(true)
      }
    }, [formProduct])
    
    
  return (
    <>
    
        <h1>Productos</h1>
        <nav className='navbar navbar-expand-sm navbar-light bg-light'>
        <table className='table'>
            <thead>
                <tr>
                    <th scope='col'>Nombre</th>
                    <th scope='col'>Descripcion</th>
                    <th scope='col'>Imagen</th>
                    <th scope='col'>Categoria</th>
                    <th scope='col'>Editar</th>
                    <th scope='col'>Borrar</th>
                </tr>
            </thead>
            <tbody>
                {(products.length > 0) && products.map(product =>
                <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{product.image}</td>
                    <td>{product.nameCategory}</td>
                    <td><button value={product.id} onClick={updateProduct} className='btn btn-primary mt-2'>Editar</button></td>
                    <td><button value={product.id} onClick={deleteProduct} className='btn btn-danger mt-2'>Eliminar</button></td>
                </tr>
                )}
            </tbody>
            
        </table>
        </nav>
        <button onClick={createProduct} className='btn btn-dark mt-2'>Crear</button>
        {
            (showForm) && <ProductCrud value={value} formProduct={formProduct} setformProduct = {setformProduct} />
        }

    </>
  )
}

export default ProductsTable