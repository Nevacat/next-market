import { Params } from "../products/[productId]/page";
import prisma from "@/helper/prismadb"
export default async function getProductsById(params: Params) {
  try{
    const {productId} = params
    const product = await prisma.product.findUnique({
      where:{
        id:productId
      },
      include:{
        user:true
      }
    })
    if(!product){
      return null
    }
    return product
  }catch(err:any){
    return null
  }
}