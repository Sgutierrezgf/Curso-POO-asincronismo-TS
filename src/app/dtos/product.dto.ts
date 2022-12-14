import { Product } from '../model/product.model';
import { Category } from '../model/category.model';

export interface CreateProductDto extends Omit<Product, 'id' | 'category'> {
  categoryId: Category['id'];
}

export interface UpdateProductDto extends Partial<CreateProductDto> { }

// export interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>> {
//   readonly tags: ReadonlyArray<string>;
// }
