import { createClient, groq } from "next-sanity";

const client = createClient({
    projectId: 'z4a8clc8',
    dataset: 'production',
    apiVersion: "2023-12-07",
    useCdn: true,
    title:'Yaqut',
    token:process.env.NEXT_PUBLIC_SANITY_API_TOKEN
})

export async function getProductBySlug(slug) {
    return client.fetch(
      groq`*[_type == "product" && slug.current == $slug]{
        _id,
        createdAt,
        name,
        slug,
        description,
        price,
        "image": image.asset->url,
        "slug": slug.current,
      }`,
      { slug }
    );
  }


export async function getProducts() {
    return client.fetch(
        groq`*[_type == "product"]{
            _id,
            createdAt,
            name,
            slug,
            description,
            price,
            "image":image.asset->url,
            "slug": slug.current,
        }`
    )
}

export async function getUsersByEmail(email) {
    return client.fetch
    groq`*[_type == "user" && eamil == $eamil]{
        _id,
        name,
        email,
        createdAt,
    }`,
    {email}
}

export async function createUser(userData) {
    const {name, email} = userData


    const newUser = await client.create({
        _type: 'user',
        name,
        email,
        createdAt:new Date().toISOString()
    })
    return newUser
}