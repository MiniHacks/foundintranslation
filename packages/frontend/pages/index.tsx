import type { NextPage } from "next";
import { Box, Text, Stack, Input, IconButton } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import PageLayout from "../components/Layout/PageLayout";

let access : boolean = false;


const Home: NextPage = () => {
  return (
    <PageLayout title={"geese, by minihacks"}>
      <Box px={[5, 10]}>
        <Text fontWeight='bold' fontSize="2xl">Phoned in Translation.</Text>
        <Stack spacing={3}>
        <Text>Your Preferred Language</Text>
          <Input variant='filled' placeholder='Filled' />
        <Text>Your Phone Number</Text>
          <Input variant='filled' placeholder='Filled' />
        </Stack>
        <IconButton
          colorScheme='teal'
          aria-label='Call Segun'
          isRound = {true}
          size='lg'
          icon={<ArrowForwardIcon />}
        />
      </Box>
    </PageLayout>
  );
};

export default Home;
