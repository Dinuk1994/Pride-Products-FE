import { useEffect, useState } from 'react'
import axios from 'axios'

const ProductAPI = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getProducts = async () => {
        const res = await axios.get('http://localhost:5000/api/products')
        setProducts(res.data.product);
        setIsLoading(false);
    }
    useEffect(() => {
        getProducts()
    }, [])

    return {
        products: [products, setProducts],
        isLoading
    }
}
export default ProductAPI
