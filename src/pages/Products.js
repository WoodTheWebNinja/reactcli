import React from 'react'

import { Link } from "react-router-dom"; 

export function Products(){

    return ( 
    
        <>
            <h1> List Products</h1>

            <nav>
          <ul>
            <li> <Link to="/Product/1">Product 1  </Link></li>
            <li> <Link to="/Product/2">Product 2 </Link></li>
          
          </ul>
        </nav>
    
        <h1>Shop</h1>
        </>
        
        )
        
    
    
    
    }