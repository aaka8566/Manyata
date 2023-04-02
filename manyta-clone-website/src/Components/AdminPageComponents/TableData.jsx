import { Button, Input, Td, Text, Tr } from "@chakra-ui/react";
import React from "react";
import { FormControl, FormLabel, FormHelperText } from "@chakra-ui/react";
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
  updatedata,
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
  trigger,
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
  const {
    isOpen: isupdateopen,
    onOpen: onupdateopen,
    onClose: onupdateclose,
  } = useDisclosure();
  const { singledata } = useSelector((store) => store.AdminReducer);
  const dispatch = useDispatch();
  //  console.log(data);

  const handlechange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });

    // dispatch(updatedate(id,x));
  };

  const handleupdate = () => {
    // console.log(id,obj);
    //  delete(obj.id);
    dispatch(updatedata(id, data)).then((res) => dispatch(getdata()));
  };
  return (
    <>
      {/* 2ndmodal */}
      {/* Modal 1 */}
      <Modal isOpen={isdeleteopen} onClose={ondeleteclose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Delete</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{/* <Lorem count={2} /> */}</ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                dispatch(deletedata(id)).then((res) => dispatch(getdata()));
                ondeleteclose();
              }}
            >
              {/* dispatch(deletedata(id)) */}
              Delete
            </Button>
            <Button variant="ghost" onClick={ondeleteclose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Modal 2 */}

      <Modal isOpen={isupdateopen} onClose={onupdateclose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Form</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Brand</FormLabel>
              <Input
                id="email"
                name="brand"
                type="text"
                value={data.brand}
                onChange={(e) => handlechange(e)}
              />
              <FormLabel>Item Type</FormLabel>
              <Input
                id="email"
                name="itemType"
                type="text"
                value={data.itemType}
                onChange={(e) => handlechange(e)}
              />
              <FormLabel>Description</FormLabel>
              <Input
                id="email"
                name="description"
                type="text"
                value={data.description}
                onChange={(e) => handlechange(e)}
              />
              <FormLabel>Size</FormLabel>
              <Input
                id="email"
                name="size"
                type="text"
                value={data.size}
                onChange={(e) => handlechange(e)}
              />
              <FormLabel>Price</FormLabel>
              <Input
                id="email"
                name="discountedPrice"
                type="text"
                value={data.discountedPrice}
                onChange={(e) => handlechange(e)}
              />
              <FormLabel>Discount</FormLabel>
              <Input
                id="email"
                name="discount"
                type="text"
                value={data.discount}
                onChange={(e) => handlechange(e)}
              />
              <FormLabel>Category</FormLabel>
              <Input
                id="email"
                name="gender"
                type="text"
                value={data.gender}
                onChange={(e) => handlechange(e)}
              />
              <FormLabel>Image</FormLabel>
              <Input
                id="email"
                name="image"
                type="text"
                value={data.image}
                onChange={(e) => handlechange(e)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                handleupdate();
                onupdateclose();
              }}
            >
              Update
            </Button>
            <Button variant="ghost" onClick={onupdateclose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* 2nd modal */}
      <Tr>
        <Td>{brand}</Td>
        {/* <Td><Text noOfLines={[1, 2, 3]}>{description}</Text></Td> */}
        <Td>{discountedPrice}</Td>
        <Td>{gender}</Td>
        <Td>
          <img width={"40%"} src={image} alt="" />
        </Td>
        <Td>
          <Button onClick={ondeleteopen}>Delete</Button>
        </Td>

        <Td>
          <Button
            onClick={() => {
              dispatch(getdataone(id)).then((res) => {
                setdata(res.payload);
                onupdateopen();
              });
            }}
          >
            Update
          </Button>
        </Td>
      </Tr>
    </>
  );
};

export default TableData;

// onupdateopen()
