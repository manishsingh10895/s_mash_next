import Layout from "@/components/layouts/Article";
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Grid,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import Image from "next/image";

export default function Supercounter() {
  return (
    <Layout>
      <Container height={"calc(100vh - 250px)"}>
        <Grid
          templateColumns={"3fr 2fr"}
          columnGap={"1rem"}
          alignItems={"center"}
        >
          <Box>
            <Heading as={"h3"}>SuperCounter</Heading>

            <Text>A simple and beautiful Counter app</Text>
            <Text>
              Count up and down using <Text as="strong">Volume</Text> keys and
              swipe
            </Text>
            <Text>Auto adjusts to system theme</Text>
            <Text>Stop all animations on battery saver mode</Text>
          </Box>

          <Image
            layout="responsive"
            height={"250"}
            width={"250"}
            src={"/supercounter.png"}
          />
        </Grid>

        <Flex gap={"1rem"} marginY={"10rem"}>
          <Link color={"teal.300"}>
            <NextLink passHref={true} href={"/supercounter/privacy"}>
              Privacy Policy
            </NextLink>
          </Link>

          <Link color={"teal.300"}>
            <NextLink passHref={true} href={"/supercounter/terms"}>
              Terms and Conditions
            </NextLink>
          </Link>
        </Flex>
      </Container>
    </Layout>
  );
}
