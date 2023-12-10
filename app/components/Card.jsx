import Image from 'next/image'


function Card({product}) {
  return (
    <Link href={`/details/${product?.slug}`}>
    <div className='relative shadow-md max-w-sm cursor-pointer'>

        <div className="relative h-96 overflow-hidden aspect-ratio-1 hover:scale-105 transition-transform duration-300">
            <Image src={product?.image} layout='fill' objectFit='cover' alt='bracelet' />
        </div>

        <div className="p-4 space-y-2">
            <h1 className="text-[#A394FF] text-3xl font-semibold">{product.name}</h1>
            <p className="text-xl text-gray-500 truncate">{product.description}</p>
            <br />
            <br />
        </div>

        <div className=" absolute bottom-0 right-0 p-2 bg[#f5f3ff] shadow-md ">
            <span className=" text-[#A394FF] text-lg font-semibold">{product?.price}DT</span>
        </div>
    </div>
    </Link>
  )
}
import Link from 'next/link'

export default Card