import styled from "styled-components";
import { colors } from "../../../../styles/colors";
import { formatPrice } from "../../../../modules/format/price";
import * as S from "./styles";

export default function Product({
  imageUrl,
  brandName,
  goodsName,
  price,
  saleRate,
  normalPrice,
  linkUrl,
  isSale = true,
}: Product) {
  return (
    <S.ProductContainer>
      <S.ProductDetailLink href={linkUrl}>
        <ExclusiveBadge>단독</ExclusiveBadge>
        <S.ProductImage src={imageUrl} alt={goodsName} />
        <ProductInfo>
          <dl className="name-wrapper">
            <dt>{brandName}</dt>
            <dd>{goodsName}</dd>
          </dl>
          <dl className="price-wrapper">
            <dd>
              <span className="sale-price">{formatPrice(price)}원</span>
              {isSale && <span className="sale-rate">{saleRate}%</span>}
            </dd>
            {isSale && (
              <dt>
                <del>{formatPrice(normalPrice)}</del>원
              </dt>
            )}
          </dl>
        </ProductInfo>
      </S.ProductDetailLink>
    </S.ProductContainer>
  );
}

const ExclusiveBadge = styled.div`
  position: absolute;
  left: 10px;
  bottom: 131px;
  padding: 4px 6px;
  background: ${colors.green};
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: ${colors.white};
`;

const ProductInfo = styled.div`
  width: 100%;
  height: 140px;
  padding: 20px 10px;
  box-sizing: border-box;
  background: ${colors.gray[1]};

  dl.name-wrapper {
    margin: 0 0 4px;
    padding: 0;
    color: ${colors.black};

    dt {
      margin-bottom: 8px;
      font-weight: 400;
      font-size: 11px;
      line-height: 16px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-all;
    }

    dd {
      margin: 0;
      font-weight: 700;
      font-size: 14px;
      line-height: 18px;
      overflow: hidden;
      word-break: break-all;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }

  dl.price-wrapper {
    margin: 0;
    padding: 0;

    dt {
      font-size: 11px;
      font-weight: 500;
      line-height: 12px;
      color: ${colors.gray[5]};
    }

    dd {
      display: flex;
      justify-content: space-between;
      margin: 0;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;

      span.sale-price {
        color: ${colors.black};
      }
      span.sale-rate {
        color: ${colors.red};
      }
    }
  }
`;
