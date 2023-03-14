import { useEffect, useRef, useState } from "react";
import getProductList from "../apis/productListApi";
import Product from "../pages/productList/components/Product";

export default function useInfiniteScroll() {
  const [hasMoreItem, toggleHasMoreItem] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState<Product[]>([]);
  const [page, setPage] = useState(0);
  const observerRef = useRef<HTMLDivElement>(null);

  const intersectHandler = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) {
      (async function () {
        try {
          const response = await getProductList(page);
          if (response.hasMoreItem) {
            setPage((page) => page + 1);
          }
          toggleHasMoreItem(response.hasMoreItem);
          setProductList((productList) => productList.concat(response.list));
        } catch (error) {
          if (error instanceof Error) {
            alert(error.message);
          }
        } finally {
          setIsLoading(false);
        }
      })();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(intersectHandler, {
      threshold: 0.5,
    });
    if (observerRef.current && hasMoreItem) {
      observer.observe(observerRef.current);
    }
    return () => observer.disconnect();
  }, [hasMoreItem, intersectHandler, page]);

  return { isLoading, hasMoreItem, productList, observerRef };
}
