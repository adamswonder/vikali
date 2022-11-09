import React from 'react'
import ProductCard from '../Components/ProductCard'
import "./Home.css"

function Home({ products, cartIt, search }) {
    return (
        <div className='homeContainer'>
            <div className='all-products'>
                <h2 id='title'>Top Deals!</h2>
                <div className="all-products-container">
                    {products
                        .filter(product => product.title.toLowerCase().includes(search))
                        .filter((product) => product.discount >= 50)
                        .map((product) => {
                            return (
                                <ProductCard key={product.id} product={product} cartIt={cartIt} />
                            );
                        })}
                </div>
            </div>
            <div className='all-products'>
                <h2 id='title'>Electronics</h2>
                <div className="all-products-container">
                    {products
                        .filter(product => product.category === "Electronics" && product.discount >= 4)
                        .map(product => {
                            return <ProductCard product={product} cartIt={cartIt} />
                        })
                    }
                </div>
            </div>
            <div className='all-products'>
                <h2 id='title'>Shoe collection</h2>
                <div className="all-products-container">
                    {products
                        .filter((product) => product.category === "Shoes" && product.discount >= 20)
                        .map((product) => {
                            return <ProductCard product={product} cartIt={cartIt} />;
                        })}
                </div>
            </div>
        </div>
    );
}

export default Home