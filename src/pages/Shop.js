import ProductsList from '../components/Products/ProductsList';
import  {  Container, Stack, Button}  from "react-bootstrap"
import React ,{ useState ,useEffect } from 'react'
import { Link } from "react-router-dom"; 
import "../css/styles.css" 
import  AddProductsModal  from "../components/AddProductsModal"; 
//import ProductsProvider from '../components/ProductsContext'


console.log("Shop Page");

export  function Shop( ){
    
  const  [products , setProduct ] = useState([])

  const [showAddProductsModal, setShowAddProductsModal] = useState(false)


  useEffect(()=> {
    const getProducts = async () => {
    const ProductsFromServer = await fetchProducts()
    setProduct(ProductsFromServer)
    }
    getProducts()
    }, [])
    const fetchProducts = async () => {
    const res = await fetch('http://localhost:5000/products')
    const data = await res.json()
    console.log(data)
    return data


  }



    return ( 
    
    <>
     


      <Container>
      <Stack direction="horizontal" gap="2" className=" justify-content-between  fw-normal mb-5" > 
  
      
        <Link to="/Products"  > 
        <Button variant="btn btn-danger">Products List </Button></Link>
        <h1>Shop Page </h1>
        <Button variant="primary"  onClick={ () => setShowAddProductsModal(true)   } > Add Products </Button>
      </Stack>  


        <ProductsList    products ={products}   setProduct ={setProduct} />


      
      </Container>
    

      <AddProductsModal show={showAddProductsModal}  handleClose={ ()=> setShowAddProductsModal(false)}    products ={products} setProduct ={setProduct}  />

  
 
    </>
    
    )
    
  
    }