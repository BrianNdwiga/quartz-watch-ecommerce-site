import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
const Landing = () => {
  return (
    <Box
      sx={{
        width: { xl: "1504px", lg: "96%", xs: "98%" },
        height: { lg: 300, md: 250, xs: "auto" },
        borderRadius: 4,
        boxShadow: "none",
        backgroundColor: "#FFFFFF",
        padding: 4,
        marginLeft: { xs: "55px", md: "24px" },
        marginRight: { xs: "55px", md: "24px" },
        backgroundImage: `url('https://i.pinimg.com/originals/0e/15/a4/0e15a43ef09214d666e98c384f8b07df.png')`,
        backgroundSize: "cover",
        marginTop: { xs: 3 },
      }}
    >
      <Typography
        variant="subtitle1"
        gutterBottom
        bold
        color="#000000"
        sx={{
          fontSize: { xl: "70px", lg: "60px", md: "50px", xs: "30px" },
          letterSpacing: ".4rem",
        }}
      >
        Explore Our Shop
      </Typography>
      <Grid container spacing={2}>
        <Grid item xl={4} md={3} sm={2} xs={0}></Grid>

        <Grid item xl={6} md={7} sm={10} xs={12}>
          <Typography
            variant="subtitle1"
            gutterBottom
            bold
            color="#000000"
            columns={3}
            sx={{
              fontSize: { xl: "20px", lg: "18px", md: "16px", xs: "14px" },
            }}
          >
            We are the No #1 Online Store in Kenya with great variety of
            Executive, Quality and Affordable Watches. We Pride our self with
            High Customer Service. We do Country wide Deliveries.
          </Typography>
        </Grid>
      </Grid>

      <Grid item xs={1}></Grid>
    </Box>
  );
};

export default Landing;
