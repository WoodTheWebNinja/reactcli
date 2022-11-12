import React from 'react'
import  { Button }  from "react-bootstrap"
import { Link } from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.css'

export function Home(){
    return (<>
    

   <div>
   <h1>Home</h1>
 

   <Link to="/Shop"  > 
        <Button variant="success">Page Product </Button></Link>
   </div>



    </>



    )
    
    
    }