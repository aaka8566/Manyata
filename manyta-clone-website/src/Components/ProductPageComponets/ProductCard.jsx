import React, { useState, useEffect } from "react";
// import { addToCart } from "../Redux/CartReducer/action";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Button, Text, Flex, Box, Stack, useToast } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  BsFillShieldLockFill,
  BsTelephoneFill,
  BsFillBookmarkHeartFill,
  BsFillCartFill,
  BsFillStarFill,
  BsPlusLg,
} from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  Image,
} from "@chakra-ui/react";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

import {
  AddToCartAction,
  ModifyCartAction,
  addToCart,
} from "./../../redux/CartReducer/Action";
/////
import { Navigate } from "react-router-dom";
const Main = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
  width: 17vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: none;
  /* padding: 1%; */
  padding-top: 0;
  padding: 0;
  padding-bottom: 1vh;
  cursor: pointer;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  img {
    width: 17vw;
    height: 35vh;
    margin-top: 0;
    /* border-radius: 5% 5% 5% 5%; */
    margin-bottom: 0;
  }
  .button-container {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    transition: 0.4s;
  }
  .button-container {
    display: none;
  }
  .Hover {
    transition: 0.5s ease;
  }
  .Hover:hover {
    /* transform: scale(1.012); */
    .button-container {
      display: flex;
      transform: scale(1);
    }
    /* img:hover {
      width: 60vw;
    } */
  }
  .product-letter {
    font-size: 0.8rem;
    color: #272626;
    line-height: 1rem;
    font-family: roboto;
  }
  .price {
    color: #565656;
  }
  .orignal {
    text-decoration: line-through;
  }
  .product-pricing {
    display: flex;
    justify-content: center;
  }
  .product-discount {
    font-size: 0.8rem;
    color: #535665;
  }
  .image-wrapper {
    position: relative;
  }
  .image-wrapper img {
    z-index: 1;
  }
  .image-wrapper .rating {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 5px;
    display: flex;
    font-size: 0.7rem;
    align-items: center;
    color: #353637;
  }
  .DrawerImage {
    width: 100%;
    border: 1px solid black;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  }
`;

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { products, isLoading, isError } = useSelector(
    (state) => state.ProductReducer
  );
  const { cart } = useSelector((state) => state.CartReducer);

  const [quantity, setQuantity] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  //   const handleCart = (product) => {
  //     dispatch(addToCart(product));
  //   };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const CartTotal = ({ price }) => {
    let originalStringPrice = price.split("").splice(4, price.length).join("");

    //console.log(+originalStringPrice);
    let cartTotal = +originalStringPrice * quantity;
    return <h2 className="product-letter"> Subtotal: Rs {cartTotal}</h2>;
  };

  //add to cart
  function handleAddToCart(product) {
    // Your logic for adding the item to cart goes here
    console.log(product);

    // addToCart(product);
    let originalStringPrice = product.discountedPrice
      .split("")
      .splice(4, product.discountedPrice.length)
      .join("");

    //console.log(+originalStringPrice);
    let cartTotal = +originalStringPrice * quantity;
    let productTocart = {
      ...product,
      ["quantity"]: quantity,
      ["TotalPriceThisItemInCart"]: cartTotal,
    };
    //check if the item is already present in the cart
    let isPresent = false;

    cart.length > 0 &&
      cart.map((el) => {
        if (el.id == productTocart.id) {
          isPresent = true;
          return toast({
            title: "Item already in cart",
            status: "info",
            duration: 3000,
            isClosable: true,
            position: "top",
            variant: "subtle",
            bgColor: `cyan.500`,
            color: "white",
            size: "lg",
          });
        }
      });

    // cart.length > 0 &&
    //   cart.map((el) => {
    //     if (
    //       el.id == productTocart.id &&
    //       el.quantity !== productTocart.quantity
    //     ) {
    //       ModifyCartAction({ id: el.id, quantity: el.quantity });
    //       console.log(cart);
    //     }
    //   });
    // addToCart(productTocart);
    isPresent == false && dispatch(AddToCartAction(productTocart));
    //console.log(cart);
    // Show a success toaster notification
    isPresent == false &&
      toast({
        title: "Item added to cart",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
        variant: "subtle",
        bgColor: `cyan.500`,
        color: "white",
        size: "lg",
      });
  }
  if (isError) return <Box children="error" />;
  return (
    <Box>
      <Main>
        <div className="Hover">
          <div className="image-wrapper">
            <div className="rating">
              <BsFillStarFill style={{ color: "lightseagreen" }} />
              {"  "}
              <b>
                &nbsp;
                {product.rating} | {product.rating_Count}
              </b>
            </div>
            <img src={product.image} className="product-image"></img>
          </div>
          {/* <h3 className="product-title">{product.title}</h3> */}
          <p className="product-letter">
            <b>{product.brand}</b>
          </p>
          <div className="product-pricing">
            <p className="product-letter orignal">
              <span style={{ color: "red", textDecoration: "line-through" }}>
                <span style={{ color: "#535665" }}>
                  {product.originalPrice}
                </span>
                -
              </span>
            </p>
            <p className="product-discount">{product.discount}</p>
          </div>
          <p className="product-letter price">
            <b>{product.discountedPrice}</b>
          </p>
          {/* <p>{product.rating}</p> */}
          <div className="button-container">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="add-to-wishlist" variant="outline" size={"md"}>
                <span className="button-span">
                  <BsFillBookmarkHeartFill style={{ color: "lightcoral" }} />
                </span>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline">
                <span
                  className="button-span"
                  ref={btnRef}
                  colorScheme="teal"
                  onClick={onOpen}
                >
                  <BsFillCartFill style={{ color: "cornflowerblue" }} />
                  <Drawer
                    isOpen={isOpen}
                    placement="right"
                    onClose={onClose}
                    finalFocusRef={btnRef}
                    size={"md"}
                  >
                    <DrawerOverlay />
                    <DrawerContent>
                      <DrawerCloseButton />
                      <DrawerHeader>Cart</DrawerHeader>

                      <DrawerBody>
                        <Flex
                          direction={"column"}
                          justifyContent={"space-between"}
                          alignItems={"center"}
                        >
                          <Image
                            src={product.image}
                            w="50%"
                            h={"40vh"}
                            boxShadow="xl"
                            padding={"1%"}
                            alt="error"
                          ></Image>

                          <Text>
                            <b>{product.title}</b>
                          </Text>
                          <Text>{product.discount}</Text>
                          <Text>{product.description}</Text>
                          <Text fontWeight={"500"}>
                            <CartTotal price={product.discountedPrice} />
                          </Text>
                          <Flex
                            alignItems={"center"}
                            justifyContent={"space-evenly"}
                            w={"80%"}
                          >
                            <motion.div whileTap={{ scale: 0.85 }}>
                              <Button
                                onClick={() => setQuantity((prev) => prev - 1)}
                                variant="outline"
                                colorScheme="blackAlpha"
                                border={"2px solid black"}
                                isDisabled={quantity === 1}
                              >
                                <AiOutlineMinus color="seagreen" />
                              </Button>
                            </motion.div>
                            <Text>{quantity}</Text>
                            <motion.div whileTap={{ scale: 0.85 }}>
                              <Button
                                onClick={() => setQuantity((prev) => prev + 1)}
                                colorScheme="blackAlpha"
                                variant="outline"
                                border={"2px solid black"}
                              >
                                <BsPlusLg color="seagreen" />
                              </Button>
                            </motion.div>
                          </Flex>
                        </Flex>
                      </DrawerBody>

                      <DrawerFooter>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button variant="outline" mr={3} onClick={onClose}>
                            Cancel
                          </Button>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            colorScheme="facebook"
                            onClick={(e) => handleAddToCart(product)}
                          >
                            Add to Cart
                          </Button>
                        </motion.div>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>
                </span>
              </Button>
            </motion.div>
          </div>
        </div>
      </Main>
    </Box>
  );
};
//style={{ color: "lightcoral" }}
