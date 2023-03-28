import Product from './components/Product'
import { useProducts } from './hooks/useProducts'

function App() {
  const { loading, products } = useProducts()

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <p className="text-center">Loading...</p>}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  )
}

export default App
