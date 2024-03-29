import { THEME } from "../../../styles/theme";
import { formatPrice } from "../../../modules/format/price";
import styled from "styled-components";
import React from "react";
import { ProductItem } from "../../../@types/dto/product";

export default function Product({
  brandName,
  imageUrl = placeholderImage,
  goodsName,
  price,
  normalPrice,
  saleRate,
  isSale = true,
  isSoldOut = false,
  isExclusive = false,
  linkUrl,
  brandLinkUrl,
}: ProductItem) {
  return (
    <ProductContainer>
      <ProductLink href={linkUrl} target="_blank">
        <ProductImageWrapper>
          {isSoldOut && (
            <div className="sold-out-wrapper">
              <span>SOLD OUT</span>
            </div>
          )}
          <img
            src={imageUrl}
            alt={goodsName}
            onError={({ currentTarget }) =>
              (currentTarget.src = placeholderImage)
            }
          />
        </ProductImageWrapper>
        <ProductInfo>
          {isExclusive && <ExclusiveBadge>단독</ExclusiveBadge>}
          <ProductNameWrapper>
            <dt>{brandName}</dt>
            <dd>{goodsName}</dd>
          </ProductNameWrapper>
          <PriceWrapper>
            <dd>
              <span className="sale-price">{formatPrice(price)}원</span>
              {isSale && <span className="sale-rate">{saleRate}%</span>}
            </dd>
            {isSale && (
              <dt>
                <del>{formatPrice(normalPrice)}</del>원
              </dt>
            )}
          </PriceWrapper>
        </ProductInfo>
      </ProductLink>
    </ProductContainer>
  );
}
const placeholderImage =
  "https://image.msscdn.net/musinsaUI/homework/data/img.jpg";

const ProductContainer = styled.li`
  flex: 0 0 calc(33.3%);
  width: calc(33.3%);
  display: block;
  contain: content;

  @media screen and (max-width: 759px) {
    flex: 0 0 calc(50%);
    width: calc(50%);
  }
`;

const ProductLink = styled.a`
  padding: 0;
  min-width: 188px;
  min-height: 366px;
  text-decoration: none;
  cursor: pointer;
`;

const ProductImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 120%;

  div.sold-out-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.8);
    text-align: center;
    color: ${THEME.gray[6]};
    font-size: 20px;
    font-weight: 500;
    line-height: 22px;
    z-index: 1;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ExclusiveBadge = styled.div`
  position: absolute;
  top: -17px;
  left: 10px;
  padding: 4px 6px;
  background: ${THEME.green};
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: ${THEME.white};
  z-index: 2;
`;

const ProductInfo = styled.div`
  position: relative;
  width: 100%;
  height: 140px;
  padding: 20px 10px;
  box-sizing: border-box;
`;

const ProductNameWrapper = styled.dl`
  margin: 0 0 4px;
  padding: 0;
  color: ${THEME.black};

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
    display: -webkit-box;
    margin: 0;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    text-align: left;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    overflow-wrap: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    color: ${THEME.black};
  }
`;

const PriceWrapper = styled.dl`
  margin: 0;
  padding: 0;

  dt {
    text-align: left;
    font-size: 11px;
    font-weight: 500;
    line-height: 12px;
    color: ${THEME.gray[5]};
  }

  dd {
    display: flex;
    justify-content: space-between;
    margin: 0;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;

    span.sale-price {
      color: ${THEME.black};
    }
    span.sale-rate {
      color: ${THEME.red};
    }
  }
`;
