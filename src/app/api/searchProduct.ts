import { API_BASE_URL } from "./constants";

export const getProduct = async ({ productId }: { productId: string }) => {
  return await fetch(`${API_BASE_URL}/products/${productId}`);
};
