import {
  Box,
  Flex,
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
  Heading,
  Highlight,
  Stack,
} from "@chakra-ui/react";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";
import React from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../../Components/AdminPageComponents/AdminNavbar";
import TableData2 from "../../Components/AdminPageComponents/TableData2";
import { getdata } from "../../redux/AdminReducer/Action";

const AdminFunds = () => {
  const { products, singledata, isrequest } = useSelector(
    (store) => store.AdminReducer
  );
  const [trigger, setrigger] = React.useState(true);
  const [totalfunds, settotalfunds] = React.useState(3450670);
  const [burn, setburn] = React.useState(4500);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getdata());
  }, [trigger]);

  return (
    <>
      <Nav />
      <Box
        boxShadow={
          " rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"
        }
      >
        <Flex border={"px solid green"}>
          <Stack
            gap={"3rem"}
            margin={"auto"}
            w={"34%"}
            boxShadow={"rgb(38, 57, 77) 0px 20px 30px -10px"}
          >
            <Stack border={"px solid green"} display={"grid"}>
              <Heading color={"grey"}>Order Summary</Heading>
              <StatGroup
                gap={"3rem"}
                display={"flex"}
                justifyContent={"center"}
              >
                <Stat w={"30%"}>
                  <StatLabel>Order Placed</StatLabel>
                  <StatNumber>345,670</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    23.36%
                  </StatHelpText>
                </Stat>

                <Stat w={"30%"}>
                  <StatLabel>Orders Returned</StatLabel>
                  <StatNumber>4500 </StatNumber>
                  <StatHelpText>
                    <StatArrow type="decrease" />
                    9.05%
                  </StatHelpText>
                </Stat>
                <Stat w={"30%"}>
                  <StatLabel>Orders in Process</StatLabel>
                  <StatNumber>45</StatNumber>
                  <StatHelpText>
                    <StatArrow type="decrease" />
                    9.05%
                  </StatHelpText>
                </Stat>
              </StatGroup>
            </Stack>

            <Stack>
              <Heading color={"red.200"}>Funds & Expenses</Heading>
              <StatGroup
                gap={"3rem"}
                display={"flex"}
                justifyContent={"center"}
              >
                <Stat w={"30%"}>
                  <StatLabel>Total Funds</StatLabel>
                  <StatNumber>{totalfunds}</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    23.36%
                  </StatHelpText>
                </Stat>

                <Stat w={"30%"}>
                  <StatLabel>Burn Rate</StatLabel>
                  <StatNumber>{burn} </StatNumber>
                  <StatHelpText>
                    <StatArrow type="decrease" />
                    9.05%
                  </StatHelpText>
                </Stat>
                {/* <Stat w={'30%'}>
    <StatLabel></StatLabel>
    <StatNumber>45</StatNumber>
    <StatHelpText>
      <StatArrow type='decrease' />
      9.05%
    </StatHelpText>
  </Stat> */}
              </StatGroup>
            </Stack>
          </Stack>
          <Box
            margin={"auto"}
            w={"70%"}
            h={"500px"}
            overflowX={"scroll"}
            overflowY={"scroll"}
          >
            {isrequest ? (
              <img
                width={"80%"}
                style={{ margin: "auto" }}
                src="https://media0.giphy.com/media/MydKZ8HdiPWALc0Lqf/giphy.gif?cid=ecf05e473acjoco3l6kqx9l638wr8ednj0d9vjil79hlqfni&rid=giphy.gif&ct=g"
                alt=""
              />
            ) : (
              <TableContainer>
                <Table size={"sm"} variant="striped" colorScheme="teal">
                  <TableCaption fontSize={"2xl"} placement="top">
                    Orders{" "}
                  </TableCaption>
                  <Thead>
                    <Tr>
                      <Th>Brand</Th>
                      {/* <Th>Description</Th> */}
                      <Th>Price</Th>
                      <Th>Category</Th>
                      <Th>Image</Th>
                      <Th>Dispatch</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {products === undefined ? (
                      <Tr>
                        <Td>...loading</Td>
                      </Tr>
                    ) : (
                      products.map((el) => (
                        <TableData2
                          key={el.id}
                          {...el}
                          trigger={trigger}
                          setrigger={setrigger}
                          settotalfunds={settotalfunds}
                          totalfunds={totalfunds}
                          burn={burn}
                          setburn={setburn}
                        />
                      ))
                    )}
                  </Tbody>
                </Table>
              </TableContainer>
            )}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AdminFunds;
