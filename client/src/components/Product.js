import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import styles from "@/styles/Product.module.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const Product = ({ product }) => {
  const [value, setValue] = React.useState(4);
  return (
    <Box
      sx={{
        width: { xl: "1504px", lg: "96%", md: "95%", xs: "98%" },
        borderRadius: 4,
        boxShadow: "none",
        backgroundColor: "#FFFFFF",
        padding: 4,
        marginLeft: { xs: "55px", md: "24px" },
        marginRight: { xs: "55px", md: "24px" },
        backgroundSize: "cover",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div role="presentation">
            <Breadcrumbs aria-label="breadcrumb">
              <Link
                underline="hover"
                color="inherit"
                href="/"
                className={styles.breadcrumb_text}
              >
                Home
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/"
                className={styles.breadcrumb_text}
              >
                {product.groupId}
              </Link>
              <Typography color="text.secondary">{product.name}</Typography>
            </Breadcrumbs>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box className={styles.image}>
            <img
              src={product.imageUrl}
              alt={product.name}
              sx={{
                maxWidth: "70%",
                height: "auto",
              }}
            />
          </Box>
        </Grid>
        <Grid itemxs={12} md={8}>
          <Box
            sx={{
              textAlign: "justify",
              alignItems: "left",
              height: "100%",
              width: "100%",
              paddingLeft: "25px",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: { xs: "24px", md: "32px" },
                    lineHeight: "140%",
                  }}
                >
                  {product.name}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography
                  sx={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: { xs: "16px", md: "20px" },
                    lineHeight: "140%",
                  }}
                >
                  Brand :{" "}
                  <Link underline="hover" color="#113B8E" href="/">
                    {product.brandName}
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: { xs: "15px", md: "17px" },
                    lineHeight: "140%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    size="medium"
                  />
                  <Link
                    underline="hover"
                    color="#113B8E"
                    href="/"
                    sx={{ paddingLeft: "5px" }}
                  >
                    33 Reviews
                  </Link>
                  <Link
                    underline="hover"
                    color="#113B8E"
                    href="/"
                    sx={{
                      paddingLeft: "5px",
                      display: { xs: "none", md: "inherit" },
                    }}
                  >
                    Add Your Review
                  </Link>
                </Typography>
                <Link
                  underline="hover"
                  color="#113B8E"
                  href="/"
                  sx={{
                    paddingLeft: "5px",
                    visibility: { sm: "inherit", md: "hidden" },
                  }}
                >
                  Add Your Review
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "27px",
                    lineHeight: "140%",
                    color: "#2B662D",
                  }}
                >
                  {product.price.current.text}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <div contentEditable className={styles.input_container}>
                  <ChevronLeftIcon sx={{ cursor: "pointer" }} />
                  <div className={styles.input}>1</div>
                  <ChevronRightIcon sx={{ cursor: "pointer" }} />
                </div>
              </Grid>
              <Grid item xs={12}>
                <Stack direction="row" spacing={2}>
                  <Button
                    className={styles.buttons}
                    sx={{ backgroundColor: "#F5F5F5", color: "black" }}
                  >
                    Add to Cart
                  </Button>
                  <Button
                    className={styles.buttons}
                    variant="contained"
                    sx={{ backgroundColor: "#2B662D" }}
                  >
                    Buy It Now
                  </Button>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Box className={styles.description}>
                  <Typography
                    strong
                    className={styles.description_title}
                    sx={{ marginBottom: "12px" }}
                  >
                    Description
                  </Typography>
                  {product.description}
                  <Typography
                    strong
                    className={styles.description_title}
                    sx={{ marginTop: "12px" }}
                  >
                    Key Features
                  </Typography>
                  <List>
                    <ListItem key={product.features}>
                      <ListItemText
                        primary={
                          <>
                            {Object.entries(product.features).map(
                              ([key, value]) => (
                                <ul key={key} sx={{ paddingTop: 0 }}>
                                  <li>
                                    {key} : {value}
                                  </li>
                                </ul>
                              )
                            )}
                          </>
                        }
                      />
                    </ListItem>
                  </List>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Product;
