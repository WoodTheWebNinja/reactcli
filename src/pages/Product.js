import React from 'react';
import { useParams , useOutletContext } from "react-router-dom" 
import  { Card }  from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.css'




export function Product(){

    const{ id } = useParams()
    const Obj  = useOutletContext()
    const Product =Obj[(id-1)]
 


return (

<>
<div class="py-5">
    <div class="container px-4 px-lg-5 mt-5">
        <div className='test text-center'>
                <h1>Product { id } </h1>
                <Card>
            
                    <Card.Body>
                    <Card.Img src={require(`../${Product.img}`)} />  
                        <Card.Title>
                        {Product.name }
                        </Card.Title>
                        <Card.Text>      {Product.description } 
                        </Card.Text>
                        <Card.Text> 
                        {Product.price } 
                        </Card.Text> 
                    </Card.Body>

                </Card>

        </div>    
    </div>
   
</div>


</>)

}

