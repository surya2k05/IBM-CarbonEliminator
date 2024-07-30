import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Flex,
  Link,
  CSSReset,
  extendTheme,
  useColorModeValue,
} from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    sair: {
      primary: '#00A99D', // Green color
      dark: '#005F56', // Dark green color
    },
  },
});

const Navbar = () => {
  const hoverColor = useColorModeValue('green', 'white');
  const underlineColor = useColorModeValue('green', 'gray.700');

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Box bg="white" borderBottom="1px" borderColor="gray.200">
        <Flex maxW="6xl" mx="auto" justify="space-between" align="center" p={4} as="nav">
          <Flex align="center">
            <Text fontWeight="bold" fontSize="lg" mr={4} color="green.700">
              CarbonEliminator 🌱
            </Text>
          </Flex>
          <Flex align="center">
            <NavItem to="/" hoverColor={hoverColor} underlineColor={underlineColor}>
              Home
            </NavItem>
            <NavItem to="/form" hoverColor={hoverColor} underlineColor={underlineColor}>
              Carbon Calculator
            </NavItem>
            <NavItem to="/stats" hoverColor={hoverColor} underlineColor={underlineColor}>
              Statistics
            </NavItem>
            <NavItem to="/effects" hoverColor={hoverColor} underlineColor={underlineColor}>
              Effects
            </NavItem>
            <NavItem to="/recommendations" hoverColor={hoverColor} underlineColor={underlineColor}>
              Recommendations
            </NavItem>
          </Flex>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

const NavItem = ({ to, children, hoverColor, underlineColor }) => {
  return (
    <Link
      href={to}
      p={2}
      mx={2}
      display="flex"
      alignItems="center"
      position="relative"
      _hover={{
        textDecoration: 'none',
        color: hoverColor,
        _before: {
          content: '""',
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: '2px',
          backgroundColor: underlineColor,
        },
      }}
    >
      {children}
    </Link>
  );
};

export default Navbar;  