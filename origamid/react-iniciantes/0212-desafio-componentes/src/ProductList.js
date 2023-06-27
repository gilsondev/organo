import React from 'react'
import Product from './Product'
import Title from './Title'

const ProductList = () => {
  const produtos = [
    { nome: "Notebook", propriedades: ["16gb ram", "512gb"]},
    { nome: "Smartphone", propriedades: ["2gb ram", "128gb"]}
  ]
  return (
    <>
      <Title color="green">Produtos</Title>
      {produtos.map((product, index) => {
        return <Product key={index} name={product.nome} properties={product.propriedades} />
      })}
    </>
  )
}

export default ProductList