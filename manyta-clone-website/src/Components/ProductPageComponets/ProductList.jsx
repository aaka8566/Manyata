import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/ProductReducer/Action";
import { ProductCard } from "./ProductCard";
import styled from "styled-components";
import { useLocation, useSearchParams } from "react-router-dom";
import {
  Box,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Spinner,
} from "@chakra-ui/react";
import { CartModel } from "./CartModal";
import Pagination from "./ProductPagination";
const Main = styled.div`
  width: 75vw;
  height: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-left: 18vw;
  gap: 1.4vw;
  transition: 0.5s ease;
  padding: 2%;
  overflow: hidden;
  box-sizing: border-box;

  .Hover {
    .Hover:hover {
      transform: scale(1.01);
      height: 65.8vh;
    }
  }
`;
export const ProductList = () => {
  const { products, isLoading, totalLength } = useSelector(
    (state) => state.ProductReducer
  );

  const { cart } = useSelector((state) => state.CartReducer);

  const dispatch = useDispatch();
  const [searchParams, setSeachParams] = useSearchParams();
  const location = useLocation();
  const initialPage = searchParams.getAll("_page");
  const [page, setPage] = useState(initialPage || 1);
  const limitToshow = 16;
  const totalPages = Math.ceil(totalLength / limitToshow);
  // const [page, setPage] = useState(0);
  console.log(cart);

  //pagination
  const handlePage = (page) => {
    setPage(page);
    //console.log("page", page);
    setSeachParams({
      gender: searchParams.getAll("gender"),
      itemType: searchParams.getAll("itemType"),
      brand: searchParams.getAll("brand"),
      rating_gte: searchParams.getAll("rating_gte"),
      discount_gte: searchParams.getAll("discount_gte"),
      _page: page,
      _limit: 16,
    });

    // console.log(searchParams.getAll("_page"));
    // console.log(searchParams.getAll("gender"));
  };

  useEffect(() => {
    let paramObj = {
      params: {
        gender: searchParams.getAll("gender"),
        itemType: searchParams.getAll("itemType"),
        brand: searchParams.getAll("brand"),
        rating_gte: searchParams.getAll("rating_gte"),
        discount_gte: searchParams.getAll("discount_gte"),
        _page: searchParams.get("_page"),
        _limit: 16,
      },
    };
    console.log(paramObj);
    dispatch(getProducts(paramObj));
    // console.log(products.length);
  }, [location.search]);
  //console.log(location.search);

  return (
    !isLoading && (
      <ProductDiv>
        <Main data-testid="product-list">
          {products.length > 0 &&
            products?.map((el) => {
              return (
                <div className="Hover" key={el.id}>
                  <ProductCard product={el} />
                  {/* <CartModel product={el} /> */}
                </div>
              );
            })}
        </Main>
        <PaginationWrapper>
          <Pagination
            totalPages={totalPages}
            currentPage={page}
            handlePageChange={handlePage}
          />
        </PaginationWrapper>
      </ProductDiv>
    )
  );
};
const ProductDiv = styled.div`
  display: block;
  margin: auto;
  overflow: hidden !important;
  padding: 1%;
`;

const PaginationWrapper = styled.div`
  width: 30vw;
  margin: auto;
  display: block;
  padding: 1%;
`;
