import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import ToysIcon from "@mui/icons-material/Toys";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

function Products({ products }) {
  const [categoryToFilter, setCategoryToFilter] = useState("");

  function filterData(category) {
    setCategoryToFilter(category);
    console.log(categoryToFilter);
  }
  return (
    <div>
      <Box
        sx={{
          width: { xl: "1504px", lg: "96%", xs: "98%" },
          height: "auto",
          borderRadius: 4,
          boxShadow: "none",
          backgroundColor: "#FFFFFF",
          padding: 4,
          marginLeft: { md: "24px" },
          marginRight: { md: "24px" },
          marginTop: { xs: 3 },
        }}
      >
        <div>
          <Stack spacing={0.5} direction="row">
            <Button
              size="Large"
              sx={{
                padding: 1,
                backgroundColor: "#F3F3F3",
                color: "#000000",
                boxShadow: "none",
                border: "1px solid #ccc!important;",
              }}
              onClick={() => filterData("")}
            >
              All Products
            </Button>
            <Button
              size="large"
              sx={{
                color: "#000000",
                border: "1px solid #ccc!important;",
              }}
              startIcon={<MaleIcon />}
              onClick={() => filterData("Male")}
            >
              Men
            </Button>
            <Button
              size="large"
              sx={{
                border: "1px solid #ccc!important;",
                color: "#000000",
              }}
              startIcon={<FemaleIcon />}
              onClick={() => filterData("Female")}
            >
              Women
            </Button>
            <Button
              size="large"
              sx={{
                color: "#000000",
                border: "1px solid #ccc!important;",
                marginRight: "",
              }}
              startIcon={<ToysIcon />}
              onClick={() => filterData("Kids")}
            >
              Kids
            </Button>
          </Stack>
        </div>
        {/* products section */}
        <Box>
          <Grid container spacing={1} columns={12}>
            {products.map((product) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={product.id}
                sx={{
                  display: { xs: "block", md: "block" },
                  justifyContent: { xs: "center", md: "center" },
                }}
              >
                <Card
                  sx={{
                    maxWidth: 331,
                    boxShadow: "none",
                    backgroundColor: "#F5F5F5",
                    marginTop: 2,
                    borderRadius: "12px",
                    letterSpacing: 0.5,
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="180"
                      src={product.imageUrl}
                      alt={product.name}
                      sx={{
                        top: "12px",
                        display: "grid",
                        justifyContent: "center",
                        objectFit: "contain",
                      }}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        component="div"
                        align="center"
                        fontSize={18}
                        fontWeight={700}
                      >
                        <strong>{product.name}</strong>
                      </Typography>
                      <Typography
                        color="text.secondary"
                        align="center"
                        fontSize={14}
                        fontWeight={400}
                      >
                        {product.brandName}
                      </Typography>
                      <Typography
                        mt={1}
                        align="center"
                        fontSize={18}
                        fontWeight={400}
                      >
                        <strong>{product.price.current.text}</strong>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default Products;
