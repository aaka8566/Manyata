import React from "react";

import { useState, useEffect } from "react";

import {
  Accordion,
  Box,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  Checkbox,
  CheckboxGroup,
  Flex,
  Stack,
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

export const SideBar = () => {
  const [searchparams, setsearchparams] = useSearchParams();
  const [data, setdata] = React.useState(
    {
      brand: searchparams.getAll("brand"),
      gender: searchparams.getAll("gender"),
      discountedPrice_gte: searchparams.getAll("discountedPrice_gte"),
      discountedPrice_lte: searchparams.getAll("discountedPrice_lte"),
    } || {
      brand: [],
      gender: [],
      discountedPrice_gte: [],
      discountedPrice_lte: [],
    }
  );
  const [dat, setdat] = React.useState({});

  const handlechange = (e) => {
    let mainobj = {};
    if (data[e.target.name].includes(e.target.value)) {
      let newdata = data[e.target.name].filter((el) => {
        return el !== e.target.value;
      });
      mainobj = { ...data, [e.target.name]: newdata };
      setdata({ ...data, [e.target.name]: newdata });
    } else {
      let narr = [...data[e.target.name], e.target.value];
      mainobj = { ...data, [e.target.name]: narr };
      setdata({ ...data, [e.target.name]: narr });
    }
    console.log(e.target.value);
    let lastobj = { ...mainobj };
    let an = {};
    for (let j in lastobj) {
      if (lastobj[j].length === 0) {
        Reflect.deleteProperty(lastobj, j);
      }
    }
    console.log(lastobj);
    setsearchparams(lastobj);
    // setdat(lastobj);
  };
  console.log(data);

  return (
    <Flex direction="column">
      <Accordion allowToggle w={"20vw"}>
        {/* <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Price
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            {/* <AccordionPanel pb={4}>
              <Stack spacing={5} direction="column">
                <Checkbox name={'discountedPrice'} value1={'1000-2000'} onChange={(e)=>{handlechange(e)}}>1000-2000</Checkbox>
                <Checkbox name={'discountedPrice'} value={'2001-3000'} onChange={(e)=>{handlechange(e)}}>2000-3000</Checkbox>
                <Checkbox name={'discountedPrice'} value={'3001-4000'} onChange={(e)=>{handlechange(e)}}>3000-4000</Checkbox>
              </Stack>
            </AccordionPanel> */}
        {/* </AccordionItem> */}
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Gender
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack spacing={5} direction="column">
              <Checkbox
                name={"gender"}
                value={"Men"}
                isChecked={data.gender.includes("Men")}
                onChange={(e) => {
                  handlechange(e);
                }}
              >
                Men
              </Checkbox>
              <Checkbox
                name={"gender"}
                value={"Women"}
                isChecked={data.gender.includes("Women")}
                onChange={(e) => {
                  handlechange(e);
                }}
              >
                Women
              </Checkbox>
              <Checkbox
                name={"gender"}
                value={"Kids"}
                isChecked={data.gender.includes("Kids")}
                onChange={(e) => {
                  handlechange(e);
                }}
              >
                Kids
              </Checkbox>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Discount
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack spacing={5} direction="column">
              <Checkbox>30% - 40%</Checkbox>
              <Checkbox>40% - 50%</Checkbox>
              <Checkbox defaultChecked>50% - 60%</Checkbox>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Brands
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack spacing={5} direction="column">
              <Checkbox
                name={"brand"}
                isChecked={data.brand.includes("Puma")}
                value={"Puma"}
                onChange={(e) => {
                  handlechange(e);
                }}
              >
                Puma
              </Checkbox>
              <Checkbox
                name={"brand"}
                isChecked={data.brand.includes("Huetrap")}
                value={"Huetrap"}
                onChange={(e) => {
                  handlechange(e);
                }}
              >
                Heutrap
              </Checkbox>
              <Checkbox
                name={"brand"}
                isChecked={data.brand.includes("Minions by Kook N Keech")}
                value={"Minions by Kook N Keech"}
                onChange={(e) => {
                  handlechange(e);
                }}
              >
                Minions by Kook N Keech
              </Checkbox>
              <Checkbox
                name={"brand"}
                isChecked={data.brand.includes("Difference of Opinion")}
                value={"Difference of Opinion"}
                onChange={(e) => {
                  handlechange(e);
                }}
              >
                Difference of Opinion
              </Checkbox>
              <Checkbox
                name={"brand"}
                isChecked={data.brand.includes("Louis Philippe")}
                value={"Louis Philippe"}
                onChange={(e) => {
                  handlechange(e);
                }}
              >
                Louis Philippe
              </Checkbox>
              <Checkbox
                name={"brand"}
                isChecked={data.brand.includes("Technosport")}
                value={"Technosport"}
                onChange={(e) => {
                  handlechange(e);
                }}
              >
                Technosport
              </Checkbox>
              <Checkbox
                name={"brand"}
                isChecked={data.brand.includes("HRX by Hrithik Roshan")}
                value={"HRX by Hrithik Roshan"}
                onChange={(e) => {
                  handlechange(e);
                }}
              >
                HRX by Hrithik Roshan
              </Checkbox>
              <Checkbox
                name={"brand"}
                isChecked={data.brand.includes("Roadster")}
                value={"Roadster"}
                onChange={(e) => {
                  handlechange(e);
                }}
              >
                Roadster
              </Checkbox>
              <Checkbox
                name={"brand"}
                isChecked={data.brand.includes("Mitera")}
                value={"Mitera"}
                onChange={(e) => {
                  handlechange(e);
                }}
              >
                Mitera
              </Checkbox>
              <Checkbox
                name={"brand"}
                isChecked={data.brand.includes("Anouk")}
                value={"Anouk"}
                onChange={(e) => {
                  handlechange(e);
                }}
              >
                Anouk
              </Checkbox>
              <Checkbox
                name={"brand"}
                isChecked={data.brand.includes("Huetrap")}
                value={"Huetrap"}
                onChange={(e) => {
                  handlechange(e);
                }}
              >
                Heutrap
              </Checkbox>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
       
    </Flex>
  );
};
