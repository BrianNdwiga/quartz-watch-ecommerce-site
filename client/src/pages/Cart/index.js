import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Cart_Card from "@/components/CartCard";
import styles from "@/styles/Home.module.css";

export default function Cart({ products }) {
  return (
    <>
      <Head>
        <title>quartz. watches</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar className="NavBar" products={products} />
        <Cart_Card products={products} />
         {products.map((product) => (
          <p>{product.unitPrice}</p>
         ))}
      </main>
    </>
  );
}


export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query GetCartProducts {
        cartProducts {
          userId
          productId
          name
          unitPrice
          img
          quantity
        }
      }
    `,
  });

  return {
    props: {
      products: data.cartProducts,
    },
  };
}
