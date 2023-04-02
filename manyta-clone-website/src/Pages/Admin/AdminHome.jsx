import {
  Box,
  Flex,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Input,
  useDisclosure,
  Button,
  IconButton,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  getdata,
  getdataone,
  updatedata,
} from "../../redux/AdminReducer/Action";
import TableData from "../../Components/AdminPageComponents/TableData";
import Nav from "../../Components/AdminPageComponents/AdminNavbar";
import { useSearchParams, useLocation } from "react-router-dom";
import { SideBar } from "../../Components/AdminPageComponents/SideBar";

const initialstate = {
  brand: "",
  itemType: "",
  description: "",
  size: "",
  discountedPrice: "",
  discount: "",
  gender: "",
  image: "",
};

export const AdminHome = () => {
  const [data, setdata] = React.useState([]);
  const [page, setpage] = React.useState(1);
  const [trigger, setrigger] = React.useState(true);
  const { products, singledata, isrequest, totallength } = useSelector(
    (store) => store.AdminReducer
  );
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchparams, setsearchparams] = useSearchParams();
  React.useEffect(() => {
    let obj = {};
    if (searchparams.getAll("brand").length > 0) {
      obj["brand"] = searchparams.getAll("brand");
      obj["_page"] = page;
    }

    if (searchparams.getAll("discountedPrice").length > 0) {
      let a = [...searchparams.getAll("discountedPrice")];
      for (
        let i = 0;
        i <= searchparams.getAll("discountedPrice").length - 1;
        i++
      ) {
        // console.log(a[i][0]+a[i][1]+a[i][2]+a[i][3]);
        // console.log(a[i][5]+a[i][6]+a[i][7]+a[i][8]);
        obj["discountedPrice_gte"] = Number(
          a[i][0] + a[i][1] + a[i][2] + a[i][3]
        );
        obj["discountedPrice_lte"] = Number(
          a[i][5] + a[i][6] + a[i][7] + a[i][8]
        );
      }
      obj["_page"] = page;
    }

    if (searchparams.getAll("gender").length > 0) {
      console.log(searchparams.getAll("gender").length);
      obj["gender"] = searchparams.getAll("gender");
      obj["_page"] = page;
    }

    obj["_page"] = page;
    console.log(obj, "obj");

    console.log(obj);

    dispatch(getdata(obj)).then((res) => setdata(res.payload));
  }, [trigger, page, location.search]);

  //  console.log(products)
  return (
    <>
      <Nav />
      {/* //pagination */}
      <Stack>
        <Button
          leftIcon={<IoIosArrowBack />}
          colorScheme="pink"
          variant="solid"
          position="absolute"
          left={"22%"}
          top={"60%"}
          backgroundColor={"red.800"}
          isDisabled={page === 1}
          onClick={() => setpage((prev) => prev - 1)}
          transform={"translate(0%, -50%)"}
          zIndex={2}
        ></Button>

        <Button
          rightIcon={<IoIosArrowForward />}
          colorScheme="pink"
          variant="solid"
          position="absolute"
          backgroundColor={"red.800"}
          right={"0%"}
          top={"60%"}
          isDisabled={page === Math.ceil(totallength / 60)}
          onClick={() => setpage((prev) => prev + 1)}
          transform={"translate(0%, -50%)"}
          zIndex={2}
        >
          {page}
        </Button>
      </Stack>
      {/* //pagination */}

      <Box marginTop={"2rem"}>
        <Box w={"100%"}>
          <Flex>
            <VStack h={"600px"} overflowY={"scroll"} gap={"3rem"} w={"22%"}>
              <Text fontSize={"2xl"} fontWeight={"bold"}>
                Filters
              </Text>
              <Stack>
                <SideBar />
              </Stack>
            </VStack>
            <Box w={"78%"} h={"600px"} overflowX={"scroll"}>
              <Heading>All Products</Heading>
              {isrequest ? (
                <img
                  width={"80%"}
                  style={{ margin: "auto" }}
                  src="https://media0.giphy.com/media/MydKZ8HdiPWALc0Lqf/giphy.gif?cid=ecf05e473acjoco3l6kqx9l638wr8ednj0d9vjil79hlqfni&rid=giphy.gif&ct=g"
                  alt=""
                />
              ) : (
                <TableContainer>
                  <Table
                    size={"sm"}
                    variant="striped"
                    colorScheme="teal"
                    overflowY={"scroll"}
                  >
                    <TableCaption placement="top" fontSize={"1xl"}>
                      Products in inventory
                    </TableCaption>
                    <Thead>
                      <Tr>
                        <Th>Brand</Th>
                        {/* <Th>Description</Th> */}
                        <Th>Price</Th>
                        <Th>Category</Th>
                        <Th>Image</Th>
                        <Th>Delete</Th>
                        <Th>Update</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {products === undefined ? (
                        <Tr>
                          <Td>...loading</Td>
                        </Tr>
                      ) : (
                        products.map((el) => (
                          <TableData
                            key={el.id}
                            {...el}
                            trigger={trigger}
                            setrigger={setrigger}
                          />
                        ))
                      )}
                    </Tbody>
                  </Table>
                </TableContainer>
              )}
            </Box>
            {/* <Box w={'25%'}>Funds</Box> */}
          </Flex>
        </Box>
      </Box>
    </>
  );
};
