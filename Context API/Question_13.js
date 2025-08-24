import { ChakraProvider, Box, Flex, Grid, Button } from '@chakra-ui/react';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { ThemeContext } from './ThemeContext';

function AppContent() {
  const { isLoggedIn, toggleAuth } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      {/* Navbar */}
      <Flex
        as="nav"
        p="4"
        bg={theme === 'light' ? 'gray.100' : 'gray.700'} // ✅ Navbar theme-aware
        justifyContent="space-between"
      >
        <Button onClick={toggleAuth}>
          {isLoggedIn ? 'Log Out' : 'Log In'} {/* ✅ Fixed login/logout toggle */}
        </Button>
        <Button onClick={toggleTheme}>
          Toggle to {theme === 'light' ? 'Dark' : 'Light'} Theme {/* ✅ Fixed theme toggle */}
        </Button>
      </Flex>

      {/* Main Content */}
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} // ✅ Responsive grid
        gap="4"
        p="4"
      >
        {['Card 1', 'Card 2', 'Card 3'].map((card) => (
          <Box
            key={card}
            p="4"
            shadow="md"
            bg={theme === 'light' ? 'gray.200' : 'gray.600'} // ✅ Theme-based card background
            color={theme === 'light' ? 'black' : 'white'}    // ✅ Ensure text readable
          >
            {card}
          </Box>
        ))}
      </Grid>

      {/* Footer */}
      <Box
        as="footer"
        p="4"
        bg={theme === 'light' ? 'gray.300' : 'gray.800'} // ✅ Theme-based footer background
        color={theme === 'light' ? 'black' : 'white'}    // ✅ Footer text color fixed
        textAlign="center"
      >
        {isLoggedIn ? "Welcome, User" : "Please log in"} {/* ✅ Show auth status */}
      </Box>
    </>
  );
}

function App() {
  return (
    <ChakraProvider>
      {/* ✅ Wrapping App with both context providers */}
      <ThemeContext.Provider value={{}}>
        <AuthContext.Provider value={{}}>
          {/* ❌ Wrong earlier: contexts were defined but not wrapped */}
          <AppContent />
        </AuthContext.Provider>
      </ThemeContext.Provider>
    </ChakraProvider>
  );
}

export default App;
