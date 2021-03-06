import { Button } from '@chakra-ui/button';
import { Box, Flex, HStack, Link, useColorMode } from '@chakra-ui/react';
import { useState } from 'react';
import { BiWorld } from 'react-icons/bi';
import { RiMoonClearLine } from 'react-icons/ri';

export function Header() {
  const [isDefaultLanguage, setIsDefaultLanguage] = useState(true);
  const { colorMode, toggleColorMode } = useColorMode();

  function handleLanguage() {
    setIsDefaultLanguage(!!!isDefaultLanguage);
  }

  return (
    <Box>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        maxW={1680}
        mx="auto"
        px={20}
        py={6}
      >
        <HStack spacing="1rem">
          <Button as={Link} href="#about">
            Sobre
          </Button>
          <Button as={Link} href="#experiences">
            Experiências
          </Button>
          <Button as={Link} href="#stacks">
            Stacks
          </Button>
        </HStack>

        <HStack spacing="1rem">
          <Button as={Link} href="#contact">
            Contato
          </Button>

          {/* <Button align="center" onClick={() => handleLanguage()}>
            <BiWorld />
            {isDefaultLanguage ? 'Português' : 'Inglês'}
          </Button> */}

          <Button align="center" onClick={toggleColorMode}>
            <RiMoonClearLine />
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
}
