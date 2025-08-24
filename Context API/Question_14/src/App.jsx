import { useState } from 'react'

import './App.css'
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { ThemeContext, ThemeProvider } from './ThemeContext';
import { AuthProvider } from './AuthContext';
import {Navbar}  from "./comp/Navbar"
import {Footer} from "./comp/Footer"
import {Sidebar} from "./comp/Sidebar"

function App() {

  return (
   <ChakraProvider>
    <ThemeProvider>
      <AuthProvider>
        <Flex direction="column" minH="100vh">
            <Navbar />
            <Flex flex="1">
              <Sidebar />
              <MainContent />
            </Flex>
            <Footer />
          </Flex>
      </AuthProvider>
    </ThemeProvider>
   </ChakraProvider>
  )
}

export default App
