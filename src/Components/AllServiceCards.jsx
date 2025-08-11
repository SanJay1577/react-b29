import React from "react";
import ServiceCard from "./ServiceCard";
import { Box } from "@mui/material";

const AllServiceCards = ({ serviceDetails }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "1rem",
        margin: "20px",
      }}
    >
      {serviceDetails?.map((details, idx) => (
        <ServiceCard details={details} key={idx} />
      ))}
    </Box>
  );
};

export default AllServiceCards;
