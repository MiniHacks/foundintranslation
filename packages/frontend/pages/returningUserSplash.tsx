import type { NextPage } from "next";
import NextLink from "next/link";
import {
  Box,
  Text,
  Stack,
  Input,
  IconButton,
  Link,
  Flex,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import PageLayout from "../components/Layout/PageLayout";

const access = false;

const ReturningUser: NextPage = () => {
  return (
    <PageLayout title={"geese, by minihacks"}>
      <Box px={[5, 10]}>
        <NextLink href={"/preferences"} passHref>
          <Link pos={"absolute"} top={"0"} right={"0"}>
            Preferences
          </Link>
        </NextLink>
        <Text fontWeight={"bold"} fontSize={"2xl"}>
          Welcome{" "}
        </Text>
        <Text fontWeight={"bold"} fontSize={"2xl"}>
          Back.
        </Text>
        <Stack spacing={3}>
          <Text>Recent Contacts</Text>
          <Input variant={"filled"} placeholder={"Filled"} />
          <Text>Your Phone Number</Text>
          <Input variant={"filled"} placeholder={"Filled"} />
        </Stack>
        <IconButton
          colorScheme={"teal"}
          aria-label={"Call Segun"}
          isRound
          size={"lg"}
          icon={<ArrowForwardIcon />}
        />
      </Box>
    </PageLayout>
  );
};

export default ReturningUser;
