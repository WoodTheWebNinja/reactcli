import React, {  useRef  } from "react";
import { Form  , Modal , Button } from 'react-bootstrap'
//import useProducts from "./ProductsContext";


export default function EditProductsModal({  show ,  handleClose ,unpdatedProduct  , setUpdateProduct ,products , id}) {

  //const [showUpdate, setShow] = useState(false)



  //console.log(products);


 function updateProduct  ( id, newName, newDescription, newPrice  ) {
        
  console.log(products[1]);
  console.log(products[id]);
  console.log(newName)
  products.name = newName ;
  products.description = newDescription ;
  products.price =  newPrice ;


  setUpdateProduct()



 }

 const nameRef = useRef()
 const descriptionRef = useRef()
 const  numberRef= useRef()


  function handleSubmit(e){
    e.preventDefault()
    console.log(e.target.name.value);
    console.log("handleSubmit");

    var price =  parseFloat(numberRef.current.value) 
    updateProduct(products.id , nameRef.current.value ,descriptionRef.current.value ,price )

    handleClose() 

   }



  return (  <>     
  
  <Modal show={show} onHide={handleClose} >


    < Form onSubmit={handleSubmit} data-js-form >


        <Modal.Title className="text-center"> Update Product   </Modal.Title>

        <Modal.Body>

        <Form.Group className='mb-3' controlId='name'>
        <Form.Label> Name </Form.Label>
        <Form.Control  ref={nameRef}  type="text"   /> 
        </Form.Group>

        <Form.Group className='mb-3' controlId='description'>
        <Form.Label> description </Form.Label>
        <Form.Control   ref={descriptionRef} type="text"   /> 
        </Form.Group>   
        <Form.Group className='mb-3' controlId='price'>
        <Form.Label> price </Form.Label>
        <Form.Control   ref={numberRef} type="number"  min={0} step={0.01}/> 
        </Form.Group>  
            <div className='d-flex justify-content-end'> 
            <Button variant="primary" type="submit"> Update   </Button>
                </div>
    </Modal.Body>

    </Form>

</Modal> 
   </>
)
 
}