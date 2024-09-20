import { useState } from 'react';
import { products } from './productsdata.js';

export default function ProductsList() {
  const [cart, setCart] = useState([]);
  function addToCart(prd) {
    setCart(
      [...cart, prd]
    )
  }
  function removeFromCart(id) {
    setCart(cart.filter(item => item.id !== id));
  }

  const subtotal = cart.reduce((total, item) => total + parseInt(item.Price), 0);

  return (
    <div className="bg-white">
      <div className='flex h-full flex-col overflow-y-scroll bg-white shadow-xl'>
        <div className='flex-1 overflow-y-auto px-4 py-6 sm:px-6'>
          <div className='flex items-start justify-between'>
            <div className="text-lg font-medium text-gray-900">Shopping cart</div>
          </div>
          <div className="mt-8">
            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {cart.map((showCart) => (
                  <li key={showCart.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        alt={showCart['Products-Name']}
                        src={showCart.img}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            {showCart['Products-Name']}
                          </h3>
                          <p className="ml-4">{showCart.Price}</p>
                        </div>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="flex">
                          <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => removeFromCart(showCart.id)}>
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Total</p>
            <p>${subtotal + 100} + Shipping Cost $100</p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className='mb-1'>My Products</h1>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  alt={product['Products-Name']}
                  src={product.img}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="flex justify-between mt-4">
                <h3 className="text-sm text-gray-700">{product['Products-Name']}</h3>
                <p className="text-sm text-gray-700">Stock: {product.stock}</p>
              </div>
              <p className="mt-1 text-lg font-medium text-gray-900">${product.Price}</p>
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                onClick={() => addToCart(product)} >Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
