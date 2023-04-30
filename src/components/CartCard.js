import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "@/styles/Cart.module.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const Cart_Card = ({ products }) => {
  function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }

  function priceRow(qty, unit) {
    return qty * unit;
  }

  function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
  }

  function addDecimalSeparators(num) {
    var str = num.toString().split(".");
    if (str[0].length >= 4) {
      str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
    }
    if (str[1] && str[1].length >= 4) {
      str[1] = str[1].replace(/(\d{3})/g, "$1 ");
    }
    return str.join(".");
  }

  const rows = [];

  function createRow(data) {
    const { img, name, quantity, unitPrice } = data;
    const totalPrice = priceRow(quantity, unitPrice);
    return {
      img: img,
      name: name,
      quantity: quantity,
      unit: unitPrice,
      price: totalPrice,
    };
  }

  products.forEach((item) => {
    const row = createRow(item);
    rows.push(row);
  });

  const invoiceSubtotal = subtotal(rows);
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
      <Box
        className={styles.cart_container}
        sx={{
          width: { xl: "1504px", lg: "96%", xs: "98%" },
          marginLeft: { md: "24px" },
          marginRight: { md: "24px" },
          marginTop: { xs: 1 },
          padding: 4,
        }}
      >
        <Box className={styles.title_section}>
          <Typography variant="subtitle1" gutterBottom className={styles.title}>
            YOUR CART
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            className={styles.sub_title}
          >
            Home/Your Cart
          </Typography>
        </Box>
        <Box
          sx={{
            display: "grid",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ padding: "24px" }}>
            Continue shopping
          </Typography>
        </Box>
        <Box>
          <TableContainer component={Paper} sx={{ fontSize: "24px" }}>
            <Table sx={{ minWidth: 700 }} aria-label="spanning table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Product</TableCell>
                  <TableCell align="center">Price</TableCell>
                  <TableCell align="center">Quantity</TableCell>
                  <TableCell align="right">Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.desc}>
                    <TableCell align="left" sx={{ width: "700px" }}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <div
                          sx={{
                            fontSize: "24px",
                            padding: "10px",
                            cursor: "pointer",
                          }}
                        >
                          X
                        </div>
                        <div>
                          <img
                            src={row.img}
                            className={styles.image}
                            alt={row.desc}
                          />
                        </div>
                        <div>{row.desc}</div>
                      </div>
                    </TableCell>
                    <TableCell align="center">
                      Ksh {addDecimalSeparators(ccyFormat(row.unit))}
                    </TableCell>
                    <TableCell align="center">
                      <div contentEditable>{row.quantity}</div>
                    </TableCell>
                    <TableCell align="right">
                      Ksh {addDecimalSeparators(ccyFormat(row.price))}
                    </TableCell>
                  </TableRow>
                ))}

                <TableRow>
                  <TableCell rowSpan={3}>
                    <Button
                      className={styles.buttons}
                      sx={{ backgroundColor: "#F5F5F5", color: "black" }}
                    >
                      Clear Cart
                    </Button>
                  </TableCell>
                  <TableCell />
                  <TableCell align="center">
                    <strong>Sub-Total</strong>
                  </TableCell>
                  <TableCell align="right">
                    Ksh {addDecimalSeparators(ccyFormat(invoiceSubtotal))}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Box sx={{ display: "grid", justifyContent: "end" }}>
            <Button
              className={styles.buttons}
              variant="contained"
              sx={{ backgroundColor: "#2B662D", marginTop: "20px" }}
            >
              CHECKOUT
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Cart_Card;
