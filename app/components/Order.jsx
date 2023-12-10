import { currentUser } from "@clerk/nextjs"
import { getOrdersByEmail } from "@/sanity/sanity-utils"


export default async function Order() {
    const user = await currentUser()

    if(!user) return <div>not found</div>

    const orders = await getOrdersByEmail(user.emailAddresses[0]?.emailAddress)
  return (
    <div className="max-w-3xl mx-auto mt-20">
        <h1 className="text-3xl text-center font-semibold text-[#A394FF]">Order Page</h1>
        <table className="w-full border-collapse">
            <thead>
                <tr className=" text-[#A394FF] border-b border-gray-200">
                    <th className=" px-4 py-3">Bracelet</th>
                    <th className=" px-4 py-3">Price</th>
                    <th className=" px-4 py-3">Qty</th>
                    <th className=" px-4 py-3">statut</th>
                </tr>
            </thead>
            <tbody>
                {orders.map(product => (
                    <tr key={product._id} className=" hover:bg-gray-50 text-center border-b border-gray-300 text-[#A394FF] ">
                        <td className="py-2 px-4 flex items-center ">{product.name}</td>
                        <td className="py-2 px-4 ">{product.price}</td>
                        <td className="py-2 px-4 ">{product.qty}</td>
                        <td className="py-2 px-4 ">
                            {
                                product.delivered ?
                                <span className="text-green-500">Delivered</span> :
                                <span className="text-red-500">Not Delivered</span>
                            }
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

