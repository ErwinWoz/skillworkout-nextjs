import React, { useState, useEffect } from "react";
import ProductCard from './ProductCard';

const products_view = 'products';
const cart_view = 'cart';



// calls are made using fetch() instead of axios for the purpose of training

function Shop() {

  const [productList, setProductList] = useState([]);
//   const [cart, setCart] = useState([]);
  const [view, setView] = useState('products');

  const navigateTo = (nextView) => {
    setView(cart_view);
  }

  // const addToCart = (item) => {
  //   setCart([...cart, {...item }]);
  //   console.log(item, cart.indexOf(item));
  // }

//   const addToCart = (item) => {
//       if (cart.indexOf(item) !== -1) return;
//       setCart([...cart, {...item }]);
//     }
 

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products?limit=20');
      //convert data to json
      const products = await response.json();
      console.log(products);
      setProductList(products);
    } catch (err) {
      console.log(err)
    }
    
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  const renderProducts = () => (
    <div style={{height: '100%'}}> 
      {
        productList.length > 0 
        ? (
          <div>
            {/* <div>
            <Cartnavigation cart={cart} setCart={setCart} size={cart.length} />
            </div> */}
            <div style={{display: 'flex', flexWrap: 'wrap', paddingBottom: '6vh'}}>
              {productList.map((product) => (
                <ProductCard key={product.id}  product={product} />
          ))}
            </div>
          </div>
        ) : (
          <h2 style={{color: 'white'}}>No products found</h2>
        )
      }
    </div>
  )

  return (
    <>
      {/* <header>
        <button onClick={() => navigateTo(cart_view)} style={{display: 'flex', margin: '2rem auto', justifyContent: 'end'}}>Go to Cart ({cart.length})</button>
      </header> */}
      {view === products_view && renderProducts()}
      {view === cart_view && <Cart cart={cart} setCart={setCart} setView={setView} />}
    </>
  );
}

export default Shop;