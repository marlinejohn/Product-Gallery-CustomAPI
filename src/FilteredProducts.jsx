import { useState } from "react";
import Product from "./product.json";

function FilteredProducts() {
    const [items, setItems] = useState(Product)
    

    const filteredItems =(catItem) =>{
        const updatedItems = Product.filter((curItem)=>{
            return curItem.category === catItem
        });
        setItems(updatedItems)
    }

    return(
        <div className="container mt-5">
            <h1>My Products</h1>
            <button type="button" class="btn btn-primary me-3 my-3" onClick={()=>setItems(Product)}>All Products</button>
            <button type="button" class="btn btn-primary me-3 my-3" onClick={()=>filteredItems("men's clothing")}>Men's Clothing</button>
            <button type="button" class="btn btn-primary me-3 my-3" onClick={()=>filteredItems("women's clothing")}>Women's Clothing</button>
            <button type="button" class="btn btn-primary me-3 my-3" onClick={()=>filteredItems("jewelery")}>Jewelery</button>
            <button type="button" class="btn btn-primary me-3 my-3" onClick={()=>filteredItems("electronics")}>Electronics</button>
            
            <hr />
            <div className="row">
            {items.map((val) =>(
                <div className="col-md-3">
                    <div class="card" >
                        <img src={val.image} class="card-img-top img-fluid" alt="..." />
                        <div class="card-body">
                        <h5>{val.title.substring(0,25)}</h5>
                        <div class="badge bg-primary mt-1">{val.category}</div>
                        <h5>Price: ${val.price}</h5>
                        <button type="button" class="btn btn-primary me-3 my-3">Show Details</button>
                        
                            
                        </div>
                        </div>
                </div>                           
            ))}
            </div>
        </div>
    ) ;
}

export default FilteredProducts;