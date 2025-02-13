const { products } = require("../db/product-data");

const createProduct = (req, res) => {
  let newProduct = req.body;
  const lastProduct = products[products.length - 1];
  newProduct.id = lastProduct.id + 1;
  newProduct.createdAt = new Date();
  newProduct.updatedAt = new Date();
  products.push(req.body);
  res.send({ products });
};

const getAllProducts = (req, res) => {
  res.json({ data: products });
};

const getSingleProduct = (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((product) => product.id === productId);
  if (!product) {
    return res.send("Product not found");
  }
  res.json({ data: product });
};



const updateProduct = (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((product) => product.id === productId);
  if (!product) {
    return res.send("Product not found");
  }
  product.updatedAt = new Date();
  Object.assign(product, req.body);
  res.send({ data: product});
};


const deleteProduct  = (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((product) => product.id === productId);
  if (!product) {
    return res.send("Product not found");
  }
  
  products.splice(product,1);
  res.send("Product deleted");
};

module.exports = {
  createProduct, getAllProducts, getSingleProduct, updateProduct, deleteProduct 
};
