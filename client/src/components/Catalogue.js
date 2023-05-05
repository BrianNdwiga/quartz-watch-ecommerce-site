import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import SelectDropdown from "@/components/SelectDropdown";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

function Products({ products }) {
  const filterGroups = ["Brands", "Group", "Color", "Pricing"];
  const filterGroupData = {
    Brands: ["Lacoste", "Chanel"],
    Group: ["Men", "Women", "Child"],
    Color: ["blue", "red", "orange"],
  };
  const brandSample = ["Lacoste", "Casio", "Chanel"];

  const options = (filterGroupData[filterGroups] || []).map(
    (option, index) => ({
      value: option,
      label: option,
    })
  );

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
          marginTop: { xs: 1 },
        }}
      >
        <Grid
          container
          spacing={2}
          columns={12}
          style={{
            borderRadius: "8px",
            border: "0.5px solid",
            width: "200px",
            float: "right",
          }}
        >
          <Grid
            item
            xs={10}
            style={{ borderRight: "1px solid", display:"flex",alignItems:"center",padding:"10px",fontSize:"17px" }}
          >
            <div style={{display:"flex"}}><FilterAltIcon /></div> <div>Filters (1)</div>
          </Grid>
          <Grid
            item
            xs={2}
            style={{
              paddingLeft: "0px",
              display: "grid",
              justifyContent: "center",
              alignItems:"center",
              padding:"10px",
              cursor:"pointer"
            }}
          >
            X
          </Grid>
        </Grid>

        {/* dropdown */}
        <Grid
          container
          spacing={2}
          columns={12}
          style={{ display: "flex", paddingBottom: "20px" }}
        >
          {filterGroups.map((filterGroup, index) => (
            <Grid item xs={3} key={index}>
              <SelectDropdown
                key={index}
                label={filterGroup}
                options={brandSample}
              />
            </Grid>
          ))}
        </Grid>

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
                <Link href={"/product/" + product.id} key={product.id}>
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
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default Products;
