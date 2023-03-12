import axios from "axios";

export default async function getProductList() {
  const response = await axios.get(
    "https://static.msscdn.net/musinsaUI/homework/data/goods0.json"
  );
  if (response.status !== 200) {
    return alert("다시 시도해주세요");
  }
  return response.data.data.list;
}
