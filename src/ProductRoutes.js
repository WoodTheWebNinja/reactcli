import { Routes,Route } from "react-router-dom"
import { ProductLayout } from "./ProductLayout";
import { Product } from "./pages/Product";
import React  from "react";

export function ProductRoutes(){
    return (
        <>
<Routes>
    <Route  element={<ProductLayout />}>
        <Route index element={<Product />} />
                    <Route path=":id" element={<Product />}/>
                   
    </Route>
</Routes>

</>

)
}