import { Routes, Route , NavLink} from "react-router-dom";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { Products } from "./pages/Products";
import { NotFound } from "./pages/NotFound";
import { ProductRoutes } from "./ProductRoutes";
import "./css/styles.css"  


import React  from "react";

function App() {

  return (
    <>
    <nav>
      <ul>
        <li> <NavLink to="/">Home  </NavLink></li>
        <li> <NavLink to="/Shop">Shop  </NavLink></li>
      </ul>
    </nav>

      <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="Shop" element={<Shop />}/>
         
            <Route path="Products" element={<Products />}/>
            
            <Route path="Product/*" element={<ProductRoutes />}>
            </Route>
          
      </Routes>
    
    
    </>

  )


}

export default App;


