import React from "react";
import { Text } from "@chakra-ui/react";
import styled from "styled-components";
const DropDown = ({ title, color }) => {
  return (
    <DIV>
      <div className="dropdown">
        <button className="dropbtn">{title}</button>
        <div className="dropdown-content">
          <div>
            <Text
              textAlign={"left"}
              ml="10px"
              color={color}
              fontSize="small"
              fontWeight={"bold"}
            >
              Topwear
            </Text>
            <a href="#">T-Shirts</a>
            <a href="#">Casual Shirts</a>
            <a href="#">Formal Shirts</a>
            <a href="#">Sweatshirts</a>
            <a href="#">Sweaters</a>
            <a href="#">Jackets</a>
            <a href="#">Blazers & Coats</a>
            <a href="#">Suits</a>
            <a href="#">Rain Jackets</a>
            <br />
            <Text
              textAlign={"left"}
              ml="10px"
              color={color}
              fontSize="small"
              fontWeight={"bold"}
            >
              Indian & Festive wear
            </Text>
            <a href="#">Kurtas & Kurta Sets</a>
            <a href="#">Sherwanis</a>
            <a href="#">Nehru Jackets</a>
            <a href="#">Dhotis</a>
          </div>
          <div>
            <Text
              textAlign={"left"}
              ml="10px"
              color={color}
              fontSize="small"
              fontWeight={"bold"}
            >
              Bottomwear
            </Text>
            <a href="#">Jeans</a>
            <a href="#">Casual Trousers</a>
            <a href="#">Formal Trousers</a>
            <a href="#">Shorts</a>
            <a href="#">Track Pants & Joggers</a>
            <br />
            <Text
              textAlign={"left"}
              ml="10px"
              color={color}
              fontSize="small"
              fontWeight={"bold"}
            >
              Innerwear & Sleepwear
            </Text>
            <a href="#">Briefs & Trunks</a>
            <a href="#">Boxers</a>
            <a href="#">Vests</a>
            <a href="#">Sleepwear & Loungewear</a>
            <a href="#">Thermals</a>
            <br />
            <Text
              textAlign={"left"}
              ml="10px"
              color={color}
              fontSize="small"
              fontWeight={"bold"}
            >
              Plus Size
            </Text>
          </div>
          <div>
            <Text
              textAlign={"left"}
              ml="10px"
              color={color}
              fontSize="small"
              fontWeight={"bold"}
            >
              Footwear
            </Text>
            <a href="#">Casual Shoes</a>
            <a href="#">Sports Shoes</a>
            <a href="#">Formal Shoes</a>
            <a href="#">Sneakers</a>
            <a href="#">Sandals & Floaters</a>
            <a href="#">Flip Flops</a>
            <a href="#">Socks</a>
            <br />
            <Text
              textAlign={"left"}
              ml="10px"
              color={color}
              fontSize="small"
              fontWeight={"bold"}
            >
              Personal Care & Grooming
            </Text>
            <br />

            <Text
              textAlign={"left"}
              ml="10px"
              color={color}
              fontSize="small"
              fontWeight={"bold"}
            >
              Sunglasses & Frames
            </Text>
            <br />

            <Text
              textAlign={"left"}
              ml="10px"
              color={color}
              fontSize="small"
              fontWeight={"bold"}
            >
              Watches
            </Text>
          </div>
          <div>
            <Text
              textAlign={"left"}
              ml="10px"
              color={color}
              fontSize="small"
              fontWeight={"bold"}
            >
              Sports & Active Wear
            </Text>
            <a href="#">Sports Shoes</a>
            <a href="#">Sports Sandals</a>
            <a href="#">Active T-shirts</a>
            <a href="#">Track Pants & Shorts</a>
            <a href="#">Tracksuits</a>
            <a href="#">Jackets & Sweatshirts</a>
            <a href="#">Sports Accessories </a>
            <a href="#">Swimwear</a>
            <br />
            <Text
              textAlign={"left"}
              ml="10px"
              color={color}
              fontSize="small"
              fontWeight={"bold"}
            >
              Gadgets
            </Text>
            <a href="#">Smart Wearables</a>
            <a href="#">Fitness Gadgets</a>
            <a href="#">Headphones</a>
            <a href="#">Speakers</a>
          </div>
          <div>
            <Text
              textAlign={"left"}
              ml="10px"
              color={color}
              fontSize="small"
              fontWeight={"bold"}
            >
              Fasion Accessories
            </Text>
            <a href="#">Wallets</a>
            <a href="#">Belts</a>
            <a href="#">Perfumes & Body Mists</a>
            <a href="#">Trimmers</a>
            <a href="#">Deodorants</a>
            <a href="#">Ties,Cufflinks & Pocket Squares</a>
            <a href="#">Caps & Hats</a>
            <a href="#">Phone Cares</a>
            <a href="#">Helmets</a>
            <a href="#">Rings & Wristwear</a>
            <a href="#">Scarves & Gloves</a>
            <br />
            <Text
              textAlign={"left"}
              ml="10px"
              color={color}
              fontSize="small"
              fontWeight={"bold"}
            >
              Indian & Festive wear
            </Text>
            <br />
            <Text
              textAlign={"left"}
              ml="10px"
              color={color}
              fontSize="small"
              fontWeight={"bold"}
            >
              Bags & Backpacks{" "}
            </Text>
          </div>
        </div>
      </div>
    </DIV>
  );
};

export default DropDown;

const DIV=styled.div`
    .dropbtn {
  background-color: white;
  color: black;
  /* padding: 16px; */
  font-size: 16px;
  border: none;
  cursor: pointer;
  /* border: 1px solid red; */
  font-weight: 650;
  font-size: small;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
  z-index: 2;
}
/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  width: 960px;
  padding: 30px 20px;
  /* height: 400px; */
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 2;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  /* padding: 12px 16px; */
  padding: 3px;
  text-align: left;
  text-decoration: none;
  display: block;
  margin-left: 10px;
  font-size: small;
  z-index: 2;
  /* border:1px solid red; */
}

.dropdown-content b {
  padding: 3px;
  text-align: left;
  text-decoration: none;
  display: block;
  margin-left: 10px;
  font-size: small;
}

.dropdown-content a:hover {
  font-weight: 700;
  /* z-index: 2; */
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  /* display: block; */
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  z-index: 2;
}

`