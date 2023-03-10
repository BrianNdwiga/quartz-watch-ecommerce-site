import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import ToysIcon from "@mui/icons-material/Toys";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
const Products = () => {
  return (
    <Box
      sx={{
        "& button": { m: 0.3 },
        width: { xl: "1504px", lg: "96%", xs: "98%" },
        height: "auto",
        borderRadius: 4,
        boxShadow: "none",
        backgroundColor: "#FFFFFF",
        padding: 4,
        marginLeft: { xs: "55px", md: "24px" },
        marginRight: { xs: "55px", md: "24px" },
        marginTop: { xs: 3 },
      }}
    >
      <div>
        <Button
          size="Large"
          sx={{
            padding: 1,
            backgroundColor: "#F3F3F3",
            color: "#000000",
            boxShadow: "none",
            border: "1px",
          }}
        >
          All Products
        </Button>
        <Button
          size="large"
          variant="outlinedSecondary"
          startIcon={<MaleIcon />}
        >
          Men
        </Button>
        <Button size="large" variant="outlined" startIcon={<FemaleIcon />}>
          Women
        </Button>
        <Button size="large" variant="outlined" startIcon={<ToysIcon />}>
          Kids
        </Button>
      </div>
    </Box>
  );
};

export default Products;
