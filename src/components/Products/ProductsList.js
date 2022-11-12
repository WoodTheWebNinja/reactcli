import React ,{ useState , useRef} from 'react'
//import { useParams , useOutletContext } from "react-router-dom" 
import  { Card , Button ,Form , Modal}  from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.css'
import EditProductsModal  from '../EditProducts'
import  TextInputRef   from '../EditProducts'






export default function ProductsList({ products , setProduct }) 
{
    const [unpdatedProduct, setUpdateProduct ] = useState([])
    const [showUpdatedModal, setUpdatedModal] = useState(false) 

    var el_ModalForm = document.querySelectorAll("[data-js-form]") ; 

    console.log(el_ModalForm );

    const deleteProduct = ( id ) =>{
        
        setProduct(prevProducts =>{
          return prevProducts.filter(product => product.id !== id )
        })
      }



      const editProduct = ( id  ) =>{

        setUpdatedModal(true)

        console.log(   products[id] );

       
        console.log(el_ModalForm);

                    }
    



 return (

    <>
    <div class="container"></div>




    {
    products.map((products, id) => (
    <>
        <div class=" container_Product ">
            <div className='col  Product'>
        
                    <h1 class="text-center">Product { id +1  }  </h1>
                    <Card key={products.id} >
                    
                        <Card.Body>
                        
                            <Card.Title>
                               
                                <h3 > {products.name } </h3>
                            </Card.Title>
                            <Card.Text>   
                                description:  {products.description } 
                            </Card.Text>
                            <Card.Text> 
                        Price: {products.price } $
                            </Card.Text> 

                        </Card.Body>
       
                        <Button variant="primary" onClick={ () => editProduct( products.id -1 ) } > Edit        </Button>



                        <Button variant="btn btn-danger  " onClick={ () => deleteProduct( products.id  ) }> remove  </Button>
                 
        
                    </Card>               
        
            </div>
        </div>
        <EditProductsModal  show={showUpdatedModal}  handleClose={ ()=> setUpdatedModal(false)}    unpdatedProduct ={unpdatedProduct} setUpdateProduct ={setUpdateProduct} products ={ products } id = { id }/>

        </>
        

    ))}



  </>
    
 );
 



}

