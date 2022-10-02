import { ProductHttpService } from './services/product-http.service'

(async () => {
  const productService = new ProductHttpService()

  try {
    console.log('getAll')
    console.log('---'.repeat(10))
    const products = await productService.getAll()
    console.log(products.length)
    console.log('price =>', products.map(item => item.price))


    const productId = products[0].id
    console.log('Update')
    console.log('---'.repeat(10))
    await productService.update(productId, {
      price: 10000,
      title: 'lampara de dia',
      description: 'sirve para alumbrar de dia',
    })

    console.log('Find')
    console.log('---'.repeat(10))
    const product = await productService.findOne(productId)
    console.log(product)
  } catch (error) {
    console.error(error)
  }



})()





