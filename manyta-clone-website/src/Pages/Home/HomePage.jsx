import { Heading, Text, Flex, Link, Grid, Image, Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../Components/Footer";
import Caraousel from "../../Components/HomePageComponents/Caraousel";
import CartHomePage from "../../Components/HomePageComponents/CartHomePage";
// import image1 from "../Images/"
import Navbar from "./../../Components/NavBar";
import HomeHeading from "../../Components/HomePageComponents/HomeHeading";

export const HomePage = () => {
  const [data, setData] = useState({});

  function fetchDat() {
    axios
      .get("https://manyta-clone-of-myntra.cyclic.app/AllHomePageImages")
      .then((res) => {
        console.log(res.data[0].dealOfTheDay);
        setData(() => res.data[0]);
      });
  }

  const {
    dealOfTheDay,
    exclusiveBrands,
    topPicks,
    categoriesToBag,
    newInTopBrands,
    GiftingCards,
    topInfluencerExclusiveStyle,
  } = data;
  console.log(exclusiveBrands);
  console.log(dealOfTheDay);
  useEffect(() => {
    fetchDat();
  }, []);

  return (
    <div>
      <Navbar />
      <Caraousel />
      <HomeHeading heading="DEAL OF THE DAY" />
      <Grid
        templateColumns={{
          base: "repeat(2,1fr)",
          md: "repeat(4,1fr)",
          lg: "repeat(8,1fr)",
        }}
        mt="4rem"
      >
        {dealOfTheDay?.map((el) => {
          if (el.id <= 8) {
            return <CartHomePage key={el.id} url={el.url} />;
          }
        })}
      </Grid>

      <HomeHeading heading="BEST OF MYNTRA EXCLUSIVE BRANDS" />
      <Grid
        templateColumns={{
          base: "repeat(2,1fr)",
          md: "repeat(4,1fr)",
          lg: "repeat(8,1fr)",
        }}
        mt="4rem"
      >
        {exclusiveBrands?.map((el) => {
          return <CartHomePage key={el.id} url={el.url} />;
        })}
      </Grid>

      <HomeHeading heading="TOP PICKS" />
      <Grid
        templateColumns={{
          base: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(7,1fr)",
        }}
        mt="4rem"
      >
        {topPicks?.map((el) => {
          return <CartHomePage key={el.id} url={el.url} />;
        })}
      </Grid>

      <HomeHeading heading="CATEGORIES TO BAG" />
      <Grid
        templateColumns={{
          base: "repeat(2,1fr)",
          md: "repeat(4,1fr)",
          lg: "repeat(8,1fr)",
        }}
        mt="4rem"
      >
        {categoriesToBag?.map((el) => {
          return <CartHomePage key={el.id} url={el.url} />;
        })}
      </Grid>

      <HomeHeading heading="NEW IN TOP BRANDS" />
      <Grid
        templateColumns={{
          base: "repeat(2,1fr)",
          md: "repeat(4,1fr)",
          lg: "repeat(8,1fr)",
        }}
        mt="4rem"
      >
        {newInTopBrands?.map((el) => {
          return <CartHomePage key={el.id} url={el.url} />;
        })}
      </Grid>

      <HomeHeading heading="GIFTING CARDS" />
      <Grid
        templateColumns={{
          base: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(5,1fr)",
        }}
        mt="4rem"
      >
        {GiftingCards?.map((el) => {
          return <CartHomePage key={el.id} url={el.url} />;
        })}
      </Grid>

      <HomeHeading heading="TOP INFLUENCERS EXCLUSIVE STYLES" />
      <Grid
        templateColumns={{
          base: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(6,1fr)",
        }}
        mt="4rem"
      >
        {topInfluencerExclusiveStyle?.map((el) => {
          return <CartHomePage key={el.id} url={el.url} />;
        })}
      </Grid>

      <Heading
        size="lg"
        color={"#413543"}
        textAlign="left"
        ml={"2rem"}
        mt="3rem"
        letterSpacing={"5px"}
      >
        BEST OF MYNTRA EXCLUSIVE BRANDS
      </Heading>
      <Grid
        templateColumns={{
          base: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(6,1fr)",
        }}
        mt="4rem"
      >
        <Box>
          <Image src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/0070e6d7-9d06-49c8-b4f4-135ff74e2d6a1651582325724-Dresses--3-.jpg" />
        </Box>
        <Box>
          <Image src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/c581f602-7ea9-4650-9d1b-0514416886ad1651582184272-Elegant-Watches.jpg" />
        </Box>
        <Box>
          <Image src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/05aa1723-9e70-49a9-a3f3-1690adb543a41651582184289-Handbags-Collection.jpg" />
        </Box>
        <Box>
          <Image src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/6144fd79-60c2-4a61-9c84-3c75ff5bde5e1651582184281-Premium-Handbags.jpg" />
        </Box>
        <Box>
          <Image src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/4b4b8940-6dd9-48d7-a93d-db777ffb28d91651582184297-Handbags---Wallets.jpg" />
        </Box>
        <Box>
          <Image src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/05aa1723-9e70-49a9-a3f3-1690adb543a41651582184289-Handbags-Collection.jpg" />
        </Box>
      </Grid>
      <Footer />
    </div>
  );
};
