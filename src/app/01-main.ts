import axios from "axios";
import { Product } from './model/product.model'

(async () => {

  async function getProductsAsync() {
    const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products/')
    return data
  }


  console.log('----------'.repeat(10))
  const productsV2 = await getProductsAsync()
  console.log(productsV2.map(item => `${item.id}-${item.title}`))
})()
