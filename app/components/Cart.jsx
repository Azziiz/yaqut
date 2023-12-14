'use client'
import Image from "next/image"
import { FaTrash } from "react-icons/fa";
import useCartStore from "../cartStore";
import { createOrder } from "@/sanity/sanity-utils";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

function cart() {
    const cart = useCartStore(state => state.cart)
    const removeFromCart = useCartStore(state => state.removeFromCart)
    const totalItems = useCartStore(state => state.totalItems)
    const cartTotal = useCartStore(state => state.cartTotal)
    const {user} = useUser()
    const router = useRouter()


    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId)
    }

    const handleOrder = async() => {

        if(totalItems > 0) {
            const email = user?.emailAddresses[0]?.emailAddress
    
            if(!email) return null;

            const res = await createOrder(email, cart)

            if(res) {
                router.push('/order')
            }
        }

    }

  return (
    <div className="max-w-3xl mx-auto mt-20">
        <h1 className="text-3xl text-center font-semibold text-[#B1275B]">Cart</h1>
        <table className="w-full border-collapse">
            <thead>
                <tr className=" text-[#B1275B] border-b border-gray-200">
                    <th className=" px-4 py-3">Bracelet</th>
                    <th className=" px-4 py-3">Pris</th>
                    <th className=" px-4 py-3">Qty</th>
                    <th className=" px-4 py-3">Remove</th>
                </tr>
            </thead>
            <tbody>
                {cart.map(product => (
                    <tr key={product.id} className=" hover:bg-gray-50 text-center border-b border-gray-300 text-[#B1275B] ">
                        <td className="py-2 px-4 flex items-center ">
                            <Image className='mr-2' src={product.image} width={50} height={30} alt='image de bracelet'/>
                            {product.name}
                        </td>
                        <td className="py-2 px-4 ">{product.price}DT</td>
                        <td className="py-2 px-4 ">{product.quantity}</td>
                        <td className="py-2 px-4">
                            <FaTrash onClick={() => {handleRemoveFromCart(product?._id)}} className="text-[#B1275B] mx-auto cursor-pointer"/>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div className="space-x-4 mt-6">
            <span className="text-lg font-semibold text-[#B1275B]">Total</span>
            <span className="text-lg font-semibold text-[#B1275B]">${cartTotal}</span>
        </div>
        <div className="mt-6 max-w-sm mx-auto space-y-4">
            <button onClick={handleOrder} className='bg-[#B1275B] text-white py-3 px-6 rounded-md w-full text-lg font-semibold' type="button">order</button>
            </div>
    </div>
  )
}

export default cart