import React ,{useState, useEffect} from "react";
import "./styles.css"
const LoadMoreProduct=()=>{

    const [products,setProducts]=useState([]);
    const [visibleProducts, setVisibleProducts]=useState(10);

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[]);

    const loadMore=()=>{
        setVisibleProducts(prevVisibleProducts=>prevVisibleProducts+10);
    };
    return(
        <>
            <div className="container mt-5">
                <h1 className="mb-4 text-center">Product List</h1>
                <div className="row">
                    {products.slice(0, visibleProducts).map(product=>(
                        <div className="col-md-4 col-mb-6 mb-4" key={product.id}>
                            <div className="card h-100">
                                <img src={product.image} className="card-img-top " alt={product.title}/>
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">${product.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {
                    visibleProducts <products.length && (
                        <div className="text-center mt-4">
                            <button className="btn btn-primary load-more-button" onClick={loadMore}>
                                Load More data
                            </button>
                        </div>
                    )
                }
            </div>
        </>
    )
}
export default LoadMoreProduct;