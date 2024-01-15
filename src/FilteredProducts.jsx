import React, { useEffect, useState } from 'react';

const FilteredProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [data, setData] = useState([]);
  
  const filteredItems =(catItem) =>{
    const updatedItems = allProducts.filter((curItem)=>{
        return curItem.category === catItem
    });
    setData(updatedItems)
}


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/products'); 
        const result = await response.json();
        setAllProducts(result);
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleCreate = async () => {
    try {
      await fetch('http://localhost:3001/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: 'New Post' }),
      });
    } catch (error) {
      console.error('Error creating data:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3001/products/${id}`, {
        method: 'DELETE',
      });
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

 
  return(
    <div className="container mt-5">
        <h1>My Products</h1>
            <button type="button" class="btn btn-primary me-3 my-3" onClick={()=>setData(allProducts)}>All Products</button>
            <button type="button" class="btn btn-primary me-3 my-3" onClick={()=>filteredItems("men's clothing")}>Men's Clothing</button>
            <button type="button" class="btn btn-primary me-3 my-3" onClick={()=>filteredItems("women's clothing")}>Women's Clothing</button>
            <button type="button" class="btn btn-primary me-3 my-3" onClick={()=>filteredItems("jewelery")}>Jewelery</button>
            <button type="button" class="btn btn-primary me-3 my-3" onClick={()=>filteredItems("electronics")}>Electronics</button>
            <button type="button" class="btn btn-primary me-3 my-3 add-button" onClick={()=>handleCreate}> + </button>

        <hr />
        <div className="row">
        {data.map((val) =>(
            <div className="col-md-3">
                <div class="card" >
                    <img src={val.image} class="card-img-top img-fluid" alt="..." />
                    <div class="card-body">
                    <h5>{val.title.substring(0,25)}</h5>
                    <div class="badge bg-primary mt-1">{val.category}</div>
                    <h5>Price: ${val.price}</h5> 
                    <button class="btn btn-primary me-3 my-3" onClick={()=>handleDelete(val.id)}>Delete</button>
                    </div>
                    </div>
            </div>                           
        ))}
        </div>
    </div>
) ;
};

export default FilteredProducts;
