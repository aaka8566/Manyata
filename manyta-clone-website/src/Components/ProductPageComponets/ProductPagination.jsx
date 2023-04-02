import React from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import Footer from "../../Components/Footer";
function Pagination({ totalPages, currentPage, handlePageChange }) {
  const displayPages = [];
  const MIN_PAGES = 15;
  const MAX_PAGES = totalPages;
  const MAX_DISPLAY_PAGES = 9;
  if (totalPages > MIN_PAGES) {
    // add first and last pages
    displayPages.push(1);
    if (currentPage >= Math.ceil(MIN_PAGES / 2) + 1) {
      displayPages.push("...");
    }

    // add surrounding pages
    const start = Math.max(Math.ceil(currentPage - MIN_PAGES / 2, 2));
    const end = Math.min(
      Math.ceil(currentPage + MIN_PAGES / 2, totalPages - 1)
    );
    for (let i = start; i <= end; i++) {
      if (i > 0 && i < MAX_PAGES) {
        if (!displayPages.includes(i)) displayPages.push(i);
      }
    }

    // add last pages
    if (currentPage < totalPages - MIN_PAGES / 2) {
      displayPages.push("...");
    }
    displayPages.push(totalPages);
  } else {
    // display all pages
    for (let i = 1; i <= totalPages; i++) {
      displayPages.push(i);
    }
  }

  const handleClick = (page) => {
    if (page !== "..." && page > 0) {
      // added check for page > 0
      handlePageChange(page);
    }
  };

  let startIndex = 0;
  let endIndex = displayPages.length - 1;
  if (displayPages.length > MAX_DISPLAY_PAGES) {
    const halfMaxDisplay = Math.floor(MAX_DISPLAY_PAGES / 2);
    if (currentPage <= halfMaxDisplay) {
      endIndex = MAX_DISPLAY_PAGES - 1;
    } else if (currentPage >= totalPages - halfMaxDisplay) {
      startIndex = totalPages - MAX_DISPLAY_PAGES;
    } else {
      const overflow = displayPages.length - MAX_DISPLAY_PAGES;
      startIndex = Math.floor(currentPage - overflow / 2);
      endIndex = startIndex + MAX_DISPLAY_PAGES - 1;
    }
    // if (startIndex - endIndex < 12) {
    //   startIndex = 0;
    //   endIndex = 12;
    // }
  }

  return (
    <Box>
      <Flex justifyContent="center" alignItems="center" maxW="80%">
        <Button
          isDisabled={currentPage === 1}
          onClick={() => handleClick(currentPage - 1)}
        >
          prev
        </Button>
        {startIndex > 0 && <Button onClick={() => handleClick(1)}>1</Button>}
        {startIndex > 1 && <Button disabled>...</Button>}
        {displayPages.slice(startIndex, endIndex + 1).map((page, index) => (
          <Button
            key={index}
            onClick={() => handleClick(page)}
            isDisabled={page === currentPage}
          >
            {page}
          </Button>
        ))}
        {endIndex < displayPages.length - 2 && <Button disabled>...</Button>}
        {endIndex < displayPages.length - 1 && (
          <Button onClick={() => handleClick(totalPages)}>{totalPages}</Button>
        )}
        <Button
          isDisabled={currentPage === totalPages}
          onClick={() => handleClick(currentPage + 1)}
        >
          next
        </Button>
      </Flex>
      {/* <Footer /> */}
    </Box>
  );
}

export default Pagination;
