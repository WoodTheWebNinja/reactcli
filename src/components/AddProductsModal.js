import React, {  useRef } from "react";
import { Form  , Modal , Button } from 'react-bootstrap'
//import useProducts from "./ProductsContext";


export default function AddProductsModal({show, handleClose, products , setProduct}) {


/*
  function addProduct( id, name , description , img , price ){
    setProduct(prevProducts => {
           
            if (id.id === 0) {
              id.id=  prevProducts.length +1  
            }
            console.log(id.id);
            console.log(prevProducts);
            console.log(id);
        return [...prevProducts,{ id: id.id, name:  id.name , description: id.description, price: id.price }]
    })
}
*/


const addProduct = async (product) => {
  const res = await fetch('http://localhost:5000/products',{
  method: 'POST',
  headers: {
  'Content-type': 'application/json'
  },
  body: JSON.stringify(product)
  })
  const newProduct = await res.json()
  setProduct([...products, newProduct])
 }







  const nameRef = useRef()
  const descriptionRef = useRef()
  const  numberRef= useRef()


  function handleSubmit(e){
      e.preventDefault()
      console.log(nameRef.current.value);
      addProduct(
      {
        id: 0 ,
        name: nameRef.current.value,
        description: descriptionRef.current.value,
        img:'img/200/game.jpg',
        price: parseFloat(numberRef.current.value),
        
       
       })
       


     handleClose()  
     }




  return (
    <Modal show={show} onHide={handleClose}>
      
      <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton> 
                <Modal.Title> New Product    </Modal.Title>
                </Modal.Header>
            <Modal.Body>
                
                <Form.Group className='mb-3' controlId='name'>
                <Form.Label> Name </Form.Label>
                <Form.Control ref={nameRef} type="text" required /> 
                </Form.Group>

                <Form.Group className='mb-3' controlId='description'>
                <Form.Label> description </Form.Label>
                <Form.Control ref={descriptionRef} type="text" required /> 
                </Form.Group>   


                <Form.Group className='mb-3' controlId='price'>
                <Form.Label> price </Form.Label>
                <Form.Control ref={numberRef} type="number" required min={0} step={0.01}/> 
                </Form.Group>  
                    <div className='d-flex justify-content-end'> 
                    <Button variant="primary" type="submit"> Add  </Button>
                        </div>

            </Modal.Body>
      </Form>

    </Modal>
  )
}
