import styled from "styled-components";
import { colors } from "../../../../styles/colors";
import { formatPrice } from "../../../../modules/format/price";
import * as S from "./styles";

export default function Product({
  brandName,
  imageUrl,
  goodsName,
  price,
  normalPrice,
  saleRate,
  isSale = false,
  isSoldOut,
  isExclusive = false,
  linkUrl,
  brandLinkUrl,
}: Product) {
  return (
    <S.ProductContainer>
      <S.ProductDetailLink href={linkUrl}>
        <S.ProductImage src={imageUrl} alt={goodsName} />
        <ProductInfo>
          {isExclusive && <ExclusiveBadge>단독</ExclusiveBadge>}
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
  top: -17px;
  left: 10px;
  padding: 4px 6px;
  background: ${colors.green};
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: ${colors.white};
`;

const ProductInfo = styled.div`
  position: relative;
  width: 100%;
  height: 140px;
  padding: 20px 10px;
  box-sizing: border-box;

  dl.name-wrapper {
    margin: 0 0 4px;
    padding: 0;
    color: ${colors.black};
    overflow: hidden;

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
