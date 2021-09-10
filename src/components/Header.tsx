import { Button } from '@chakra-ui/button';
import { Box, Flex, HStack } from '@chakra-ui/react';
import { BiWorld } from 'react-icons/bi'

export function Header() {
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
          <Button>Stacks</Button>
        </HStack>

        <HStack spacing="1rem">
          <Button>Contato</Button>

          <Button align="center">
            <BiWorld />
            English
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
}
