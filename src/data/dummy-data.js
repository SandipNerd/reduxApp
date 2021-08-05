import Category from '../../models/category';
import Product from '../../models/product';

export const CATEGORY = [
  new Category(
    'c1',
    'Shirts',
    'https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcnRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  ),
  new Category(
    'c2',
    'Jackets',
    'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8amFja2V0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  ),
  new Category(
    'c3',
    'Pants',
    'https://images.unsplash.com/photo-1584382296087-ac00c7263710?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHBhbnRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  ),
  new Category(
    'c4',
    'Shoes',
    'https://images.unsplash.com/photo-1612902377756-414b2139d5e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fHNob2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  ),
  new Category(
    'c5',
    'Sunglasses',
    'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3VuZ2xhc3Nlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  ),
];

export const PRODUCTS = [
  new Product(
    'p1',
    'c1',
    'Long Sleeve',
    'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2hpcnRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'Long Sleeve shirt made from England by Louis Tan',
    99.99,
  ),
  new Product(
    'p2',
    'c1',
    'Original Shirt',
    'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNoaXJ0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'Original shirt owned by kaka from Pensylvania',
    12.34,
  ),
  new Product(
    'p3',
    'c2',
    'Brown Cold Jacket',
    'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8amFja2V0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'jacket for winter with insulation property design for wind resistance',
    34.4,
  ),
  new Product(
    'p4',
    'c3',
    'Western Jeans',
    'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8amVhbnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'Blue black jeans with torn design by james louis for men',
    13.89,
  ),
  new Product(
    'p5',
    'c3',
    'Black Greyish Jeans',
    'https://images.unsplash.com/photo-1511196044526-5cb3bcb7071b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGplYW5zJTIwZm9yJTIwbWVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'Black jeans with black stripe design by james louis for Outdoors',
    89.89,
  ),
  new Product(
    'p6',
    'c4',
    'Red Dark Nike shoe',
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'Red Dark Nike shoe design by Jane Foster',
    33.33,
  ),
  new Product(
    'p7',
    'c4',
    'Black Sports Shoe',
    'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'Well designed black sports shoe with fine quality material',
    44.9,
  ),
  new Product(
    'p7',
    'c4',
    'Green Black Shoe',
    'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHNob2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'Green with black combination by Nike ',
    11.88,
  ),
];
