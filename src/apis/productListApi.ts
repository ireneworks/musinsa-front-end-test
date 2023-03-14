import axios from "axios";

interface GetProductListResponse {
  hasMoreItem: boolean;
  list: Product[];
}

export default async function getProductList(
  page: number
): Promise<GetProductListResponse> {
  try {
    const response = await axios.get(
      `https://static.msscdn.net/musinsaUI/homework/data/goods${page}.json`
    );
    return {
      hasMoreItem: page < 4,
      list: response.data.data.list,
    };
  } catch (error) {
    throw error;
  }
}
