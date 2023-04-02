import React from "react";
import { Box, Flex, Grid, HStack, Image, Input, Text } from "@chakra-ui/react";
import { Link as MyLink } from "react-router-dom";
import DropDown from "./DropDown";
import logo from "../Data/Images/mlogo.jpg";
import styled from "styled-components";
import ProfileDropDown from "./HomePageComponents/ProfileDropDown";
const Navbar = () => {
  console.log("navbar");
  return (
    <DIV>
      <Flex
        as="header"
        position="fixed"
        className="nav"
        w="100%"
        mt={"-1vh"}
        border="2px solid red"
        bg="white"
        alignContent={"center"}
        justifyContent="space-around"
        alignItems={"center"}
        p="10px 0"
      >
        <HStack>
          <MyLink to="/">
            <Image src={logo} width={"3.7vw"} mr="2rem" />
          </MyLink>
          <Flex justifyContent={"space-around"} gap="1.5rem">
            <DropDown title={"MEN"} color={"red"} />
            <DropDown title={"WOMEN"} color={"#0db7af"} />
            <DropDown title={"KID"} color={"orange"} />
          </Flex>
          <HStack gap={"0.5rem"}>
            <Text fontSize={"small"} ml="1rem" mt="3.1vh" fontWeight="bold">
              HOME & LIVING
            </Text>
            <div style={{ marginTop: "3.1vh" }}>
              <Text fontSize={"small"} fontWeight="bold">
                BEAUTY
              </Text>
            </div>
            <div style={{ marginTop: "3.1vh" }}>
              <Text fontWeight="bold" fontSize={"small"}>
                STUDIO
                <sup style={{ color: "red" }}>NEW</sup>
              </Text>
            </div>
          </HStack>
        </HStack>
        <HStack>
          <Input
            w={"16vw"}
            h="2.5rem"
            overflow={"none"}
            placeholder="Search for products,brands and more"
            bg={"#F7F5F2"}
            border="none"
            borderRadius={"3px"}
          />
        </HStack>
        <HStack justifyContent={"space-evenly"} gap="20px">
          <Box>
            <div style={{ marginLeft: "5%", marginTop: "2%" }}>
              {/* <DropDown title={"MEN"} color={"red"} /> */}
              <ProfileDropDown />
            </div>

            <Text mt={"0"} fontSize="smaller" fontWeight={"bold"}>
              Profile
            </Text>
          </Box>
          <Box>
            <Image
              src="data:image/png;base64,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"
              width={"25px"}
              ml="10px"
            />
            <Text mt={"0"} fontSize="smaller" fontWeight={"bold"}>
              Wishlist
            </Text>
          </Box>
          <Box>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGBvVUbdJxA475lUy_MPhFqCYZbNwqikM3HQ&usqp=CAU"
              width={"25px"}
            />
            <Text mt={"0"} fontSize="smaller" fontWeight={"bold"}>
              Bag
            </Text>
          </Box>
        </HStack>
      </Flex>
    </DIV>
  );
};

export default Navbar;

const DIV = styled.div`
  .nav {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    z-index: 999999999999;
  }
`;
