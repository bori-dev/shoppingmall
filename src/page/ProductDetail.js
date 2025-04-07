import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {Container, Row, Col, Dropdown, Button} from "react-bootstrap"

const ProductDetail = () => {
  let{id} = useParams(); 
  const[product,setProduct] = useState(null)
  const getProductDetail =  async () => {
    let url = `https://my-json-server.typicode.com/bori-dev/shoppingmall/products/${id}`
    let response = await fetch(url);
    let data = await response.json();
    console.log(data)
    setProduct(data)
  }
  useEffect(()=>{
    getProductDetail()
  },[])
  return (
    <Container className="product-detail-container">
      <Row>
        <Col md={6} className="product-img">
          <img src={product?.img} alt={product?.title} className="img-fluid" />
        </Col>
        <Col md={6} className="product-info">
          <div className="product-title">{product?.title}</div>
          <div className="product-price">{product?.price}원</div>
          <div className="product-choice">
            {product?.choice ? "Conscious Choice" : ""}
          </div>
          <Dropdown className="size-dropdown">
            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {product?.size.length > 0 &&
                product.size.map((item, index) => (
                  <Dropdown.Item key={index} href="#/action-1">
                    {item}
                  </Dropdown.Item>
                ))}
            </Dropdown.Menu>
          </Dropdown>
          <Button variant="primary" className="add-button">
            추가
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail
