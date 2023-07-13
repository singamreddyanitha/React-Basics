import {useState, useEffect} from "react"
import Cookies from "js-cookie"

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import ProductCard from '../ProductsCard'
import './index.css'

const AllProductsSection = () => {
 const [productsList, setProductsList] = useState([])
 const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getProducts()
    })

    const getProducts = async () => {
        const jwtToken = Cookies.get("jwt_token")
        const url = 'https://apis.ccbp.in/products'
        // console.log(jwtToken)
        const options = {
            method: "GET",
            headers:  {
                Authorization: `Bearer ${jwtToken}`
            },
        }

        const response = await fetch(url, options)
        // console.log(response)
        const fetchedData = await response.json()
        console.log(fetchedData)

        const updatedData = fetchedData.products.map((product) => ({
            brand: product.brand,
        title: product.title,
        price: product.price,
        id: product.id,
        imageUrl: product.image_url,
        rating: product.rating,

        }))

        setProductsList(updatedData)
        setIsLoading(false)
    }

    const renderProductsList = () =>{
        return (
            <div>
              <h1 className="products-list-heading">All Products</h1>
              {isLoading ? (
              <Loader type="TailSpin" color="#00BFFF" height={50} width={50} /> 
              ) : ( 
                <ul className="products-list">
                {productsList.map(product => (
                  <ProductCard productData={product} key={product.id} />
                ))}
              </ul>
              
              )}
             
            </div>
          )
    }
   
    return (<>{renderProductsList()}</>)
  
}

export default AllProductsSection
