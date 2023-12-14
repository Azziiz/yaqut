
import Card from "./components/Card"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { getUsersByEmail, createUser, getProducts } from "@/sanity/sanity-utils"
import { currentUser } from "@clerk/nextjs"


export default async function page() {

    const user = await currentUser()

    if(!user) return <div>You Are Not Logged In</div>

    const exsistingUser = await getUsersByEmail(user?.emailAddresses[0]?.emailAddress)

    if(exsistingUser.length === 0) {
      await createUser({
        name:user?.firstName,
        email:user?.emailAddresses[0]?.emailAddress,

      })
    }

    const products = await getProducts()

  return (
    <div>
      <Header />
      
      <div className="flex flex-col items-center justify-center mt-10 space-y-4">
        <h1 className="text-[#B1275B]  text-4xl font-bold text-center">Pas Assez Jolie</h1>
        <p className="text-center text-gray-500">Simples et élégants, les bracelets qui charment!📿✨</p>
      </div>

      <div className=" flex p-10">

        <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          {products.map(product => (
            <Card key={product.id} product={product}/>
          ))}

        </div>

      </div>

      <Footer />
    </div>
  )
}

