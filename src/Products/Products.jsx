
import React from 'react'
import ProductsTable from './ProductsTable'
import CategoryApi from '../Categories/CategoryApi'
import ProductsApi from './ProductsApi'

export const Products = () => {
  const {resProduct, GetProdutsList, PostProduct, PutProduct, DeleteProduct} = ProductsApi()
  const {resCategory, GetCategoriesList} = CategoryApi()
  const props = {
    resCategory,
    GetCategoriesList,
    resProduct,
    GetProdutsList,
    PostProduct,
    PutProduct,
    DeleteProduct
  }
  return (
    <>
        <ProductsTable value={props}/>
    </>
  )
}
