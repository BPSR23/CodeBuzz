import {
  Box,
  HStack,
  IconButton,
  Spacer,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import Navlink from "./Navlink";

export function Navbar() {
  const { toggleColorMode } = useColorMode();
  // const { logout, currentUser } = useAuth();

  return (
    <Box
      borderBottom="2px"
      borderBottomColor={useColorModeValue("gray.100", "gray.700")}
      mb={4}
      py={4}
    >
      <HStack
        justifyContent="flex-end"
        maxW="container.lg"
        mx="auto"
        spacing={4}
      >
        <Navlink to="/" name="CCC" size="lg" />
        <Spacer />
        <Navlink to="/login" name="Login" />
        <Navlink to="/register" name="Register" />
        <Navlink to="/dashboard" name="Dashboard" />
        <Navlink to="/profile" name="Profile" />(
        {/* <Navlink
          to="/logout"
          name="Logout"
          onClick={async (e) => {
            e.preventDefault();
            await logout();
          }}
        /> */}
        )
        <IconButton
          variant="ghost"
          icon={useColorModeValue(<FaSun />, <FaMoon />)}
          onClick={toggleColorMode}
          aria-label="toggle-dark-mode"
        />
      </HStack>
    </Box>
  );
}
export default Navbar;
