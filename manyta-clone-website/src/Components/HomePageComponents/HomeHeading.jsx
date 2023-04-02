import { Heading } from "@chakra-ui/react";
import React from "react";

const HomeHeading = ({ heading }) => {
  return (
    <div>
      <Heading
        size="lg"
        color={"#413543"}
        textAlign="left"
        ml={"2rem"}
        mt="3rem"
        letterSpacing={"5px"}
      >
        {heading}
      </Heading>
    </div>
  );
};

export default HomeHeading;
