import { Button } from '@chakra-ui/button';
import { Box, Flex, HStack, Link } from '@chakra-ui/react';
import { useState } from 'react';
import { BiWorld } from 'react-icons/bi';

export function Header() {
  const [isDefaultLanguage, setIsDefaultLanguage] = useState(true);

  function handleLanguage() {
    setIsDefaultLanguage(!!!isDefaultLanguage);
  }

  return (
    <Box>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        maxW={1120}
        mx="auto"
        px={20}
        py={6}
      >
        <HStack spacing="1rem">
          <Button>Sobre</Button>
          <Button>Experiências</Button>
          <Button as={Link} href="#stacks">Stacks</Button>
        </HStack>

        <HStack spacing="1rem">
          <Button>Contato</Button>

          <Button align="center" onClick={() => handleLanguage()}>
            <BiWorld />
            {isDefaultLanguage ? 'Português' : 'Inglês'}
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
}
