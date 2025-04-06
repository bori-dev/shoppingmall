import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard'
import { Container, Row, Col } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get('q') || "";
    console.log(searchQuery)
  
    let url = `https://my-json-server.typicode.com/bori-dev/shoppingmall/products/?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
  
    setProductList(data);
  }  

  useEffect(() => {
    getProducts()
  }, [query])

  return (
    <div> 
      <Container> 
        <Row>  
          {productList.length > 0 && 
            productList.map((item) => (
            <Col lg={3} key={item.id}> 
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll