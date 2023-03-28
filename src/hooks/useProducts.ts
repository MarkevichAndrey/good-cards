import axios from 'axios'
import Product from '../components/Product'
import { useEffect, useState } from 'react'
import { IProduct } from '../models'

export function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState(false)

  async function fetchProducts() {
    setLoading(true)
    const response = await axios.get<IProduct[]>(
      'https://fakestoreapi.com/products?limit=6'
    )
    setProducts(response.data)
    setLoading(false)
  }
  useEffect(() => {
    fetchProducts()
  }, [])
  return { products, loading }
}
