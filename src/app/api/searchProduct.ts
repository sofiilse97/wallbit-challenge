export const getProduct = async ({ productId }: { productId: string }) => {
  return await fetch(`https://fakestoreapi.com/products/${productId}`);
};
