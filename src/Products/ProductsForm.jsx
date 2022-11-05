import React, { useEffect } from 'react'

const ProductsForm = ({onChangeForm, saveProduct, categories, product, updateProduct}) => {
    useEffect(() => {
        var select = document.getElementById('idCategory')
        select.selectIndex = product.idCategory
    }, [])
    
  return (
    <>
    <nav className='navbar navbar-expand-sm navbar-light bg-light'>
        <form className='formProduct'>

            <div className='form-group'>
                <label>Nombre</label>
                <input onChange={onChangeForm} className='form-control' id='name' placeholder='nombre' value={product.name}></input>
            </div>
            <div className='form-group'>
                <label>Descripcion</label>
                <input onChange={onChangeForm} className='form-control' id='description' placeholder='descripcion' value={product.description}></input>
            </div>
            <div className='form-group'>
                <label>Categoria</label>
                <select id="idCategory" className="form-select form-control" onChange={onChangeForm}>
                    <option value=''>Categoria...</option>
                    {(categories.length > 0) && categories.map(category =>
                        <option key={category.id} value = {category.id}>{category.name}</option>
                    )}
                </select>
            </div>
            <div className='form-group'>
                <label>Image</label>
                <input onChange={onChangeForm} className="form-control" id="image" type="file"/>
            </div>
            {
                (product.id !== null) && <button onClick={updateProduct} className='btn btn-primary'>Actualizar</button>
            }
            {
                (product.id === null) && <button onClick={saveProduct} className='btn btn-primary'>Guardar</button>
            }
            
        </form>
        </nav>
    </>
  )
}

export default ProductsForm
