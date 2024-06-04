import { Link } from "react-router-dom";
import { Box, Flex, Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4} py={2}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Button as={Link} to="/" colorScheme="teal" variant="ghost">
            Counter
          </Button>
          <Button as={Link} to="/timer" colorScheme="teal" variant="ghost">
            Timer
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;