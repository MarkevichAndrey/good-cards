import { useState } from 'react'
import { IProduct } from '../models'

interface ProductProps {
  product: IProduct
}

function Product({ product }: ProductProps) {
  const [datails, setDetails] = useState(false)
  const btnBgClassName = datails ? 'bg-yellow-400' : 'bg-blue-400 '
  const btnClasses = ['py-2 px border', btnBgClassName]
  return (
    <div className="border py-2 rounder flex flex-col items-center mb-2">
      <img src={product.image} className="w-1/6" alt={product.title} />
      <p>{product.title}</p>
      <p className="font-bold"> {product.price}</p>

      <button
        className={btnClasses.join(' ')}
        onClick={() => {
          setDetails((prev) => !prev)
        }}
      >
        {datails ? 'Hide details' : 'Show details'}
      </button>

      {datails && (
        <div>
          <p>{product.description}</p>
          <p>
            Rate:{' '}
            <span style={{ fontWeight: 'bold' }}>{product.rating.rate}</span>
          </p>
        </div>
      )}
    </div>
  )
}
export default Product
