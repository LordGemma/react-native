class Product {
  constructor(
    id,
    title,
    categoryId,
    categoryName,
    imageUrl,
    description,
    price,
  ) {
    this.id = id;
    this.title = title;
    this.categoryId = categoryId;
    this.categoryName = categoryName;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
}

export default Product;
