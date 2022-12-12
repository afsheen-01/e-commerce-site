import { Box, Text } from "@chakra-ui/react"
import {  ReactElement } from "react"
import useGetProducts from "./useGetProducts"

export const Home = (): ReactElement => {
    const { data } = useGetProducts()
    console.log(data)
    return <Box><Text>Home</Text></Box>
}