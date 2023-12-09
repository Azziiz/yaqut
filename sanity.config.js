import { defineConfig } from "sanity";
import {deskTool} from 'sanity/desk'
import schemas from "./sanity/schemas";
const config = defineConfig({
    projectId: 'z4a8clc8',
    dataset: 'production',
    apiVersion: "2023-12-07",
    useCdn: true,
    basePath:"/admin",
    plugins: [
        deskTool()
    ],
    schema:{types:schemas}
})

export default config