import { Button, Td, Text, Tr } from "@chakra-ui/react";
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import {
  deletedata,
  getdata,
  getdataone,
} from "../../redux/AdminReducer/Action";
import { useDispatch, useSelector } from "react-redux";

const TableData = ({
  id,
  brand,
  description,
  size,
  discountedPrice,
  discount,
  gender,
  image,
  itemType,
  originalPrice,
  trigger,
  setrigger,
  totalfunds,
  settotalfunds,
  burn,
  setburn,
}) => {
  const [data, setdata] = React.useState({
    brand,
    itemType,
    description,
    size,
    discountedPrice,
    discount,
    gender,
    image,
  });
  const {
    isOpen: isdeleteopen,
    onOpen: ondeleteopen,
    onClose: ondeleteclose,
  } = useDisclosure();
  const { singledata } = useSelector((store) => store.AdminReducer);
  const dispatch = useDispatch();
  console.log(data);

  return (
    <>
      {/* 2ndmodal */}
      {/* Modal 1 */}
      <Modal isOpen={isdeleteopen} onClose={ondeleteclose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Order</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{/* <Lorem count={2} /> */}</ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                // dispatch(deletedata(id))
                // .then(res=>dispatch(getdata()))
                settotalfunds(
                  (prev) => prev + Number(discountedPrice.replace("Rs.", ""))
                );
                setburn(
                  (prev) =>
                    prev +
                    (Number(originalPrice.replace("Rs.", "")) -
                      Number(discountedPrice.replace("Rs.", "")))
                );
                setrigger(!trigger);
                ondeleteclose();
              }}
            >
              {/* dispatch(deletedata(id)) */}
              Sell
            </Button>
            <Button variant="ghost" onClick={ondeleteclose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Tr>
        <Td>{brand}</Td>
        {/* <Td><Text noOfLines={[1, 2, 3]}>{description}</Text></Td> */}
        <Td>{discountedPrice}</Td>
        <Td>{gender}</Td>
        <Td>
          <img width={"40%"} src={image} alt="" />
        </Td>
        <Td>
          <Button onClick={ondeleteopen}>Dispatch</Button>
        </Td>
      </Tr>
    </>
  );
};

export default TableData;

// onupdateopen()
