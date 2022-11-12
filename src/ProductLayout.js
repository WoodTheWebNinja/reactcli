import React  from 'react'
import { Link , Outlet} from "react-router-dom"; 
//import { Products } from "./components/Products/Products"; 




export function ProductLayout(){
    return ( 
    
        <>

            <nav>
          <ul>
         
            <li> <Link to="/Products">Products </Link></li>
          </ul>
        </nav>

        <Outlet context={[{id:1, name: 'shoes', description:'Running Shoes.' ,img:'img/200/phone.jpg',price:25,
        }, {id:2, name: 'Apple', description:'Apple watch.',img:'img/450/game.jpg',price:25,
      }]}/>
    
   
        </>
        
        )
        

}

// {Product.name }

//{Product.description }
