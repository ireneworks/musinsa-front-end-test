import axios from "axios";
import { ProductItem } from "../@types/dto/product";

interface GetProductListResponse {
  hasMoreItem: boolean;
  list: ProductItem[];
}

export default async function getProductList(
  page: number
): Promise<GetProductListResponse> {
  try {
    const response = await axios.get(
      `https://static.msscdn.net/musinsaUI/homework/data/goods${page}.json`
    );
    return {
      hasMoreItem: page + 1 < 4,
      list: response.data.data.list,
    };
  } catch (error) {
    throw error;
  }
}
