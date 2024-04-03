import { PER_PAGE } from "@/constant";
import prisma from "@/helper/prismadb";
export interface ProductParams{
  latitude?:string
  longtitude?:string
  category?:string
  page?:number;
  skip?:number
}

async function getProducts(params?:ProductParams) {
  const {latitude,longtitude, category, page, skip}= params || {}
  let query:any={}
  if(category){
    query.category = category
  }
  if(latitude){
    query.latitude = {
      gte:Number(latitude)-0.01,
      lte:Number(latitude)+0.01
    }
  }

  if(longtitude){
    query.longtitude = {
      gte:Number(longtitude)-0.01,
      lte:Number(longtitude)+0.01
    }
  }
try{
  const totalItems = await prisma.product.count({
    where:query
  })
  const products = await prisma.product.findMany({
    where:query,
    orderBy:{
      createdAt:"desc"
    },
    skip:skip?Number(skip):0,
    take:PER_PAGE
  })
  return{
    data:products,
    totalItems:totalItems
  }
  }catch(err:any){
    return null
  }
}

export default getProducts