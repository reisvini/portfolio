import {
  Flex,
  Text,
  HStack,
  Link,
  Box,
  Image,
  useColorMode,
} from '@chakra-ui/react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import IconLogo from './IconLogo';

export function AboutMe() {
    const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      justifyContent="space-between"
      direction="column"
      alignItems="center"
      mx="auto"
      maxW={1680}
      px={20}
      py={6}
    >
      <HStack spacing={9}>
        <Box w="50%">
          <Text
            fontSize={{ sm: '1.5rem', md: '2rem', lg: '3rem' }}
            textColor="yellow.500"
          >
            Oi, meu nome é Vinícius
          </Text>

          <Text fontSize="1.5rem" pt={6}>
            Programador Full Stack, entusiasta do JavaScript e de tecnologia.
            Desde que comecei a programar, vi que isso seria mais do que um
            trabalho. Possuo inglês fluente e percebi que programar se tornou um
            lazer pra mim. Estou em constante processo de prática e aprendizado.
            <br />
          </Text>
          <Text fontSize="1.5rem" pt={6}>
            Atualmente estou cursando Ciência da Computação. Possuo experiência
            com desenvolvimento Web e Mobile, partindo desde o front-end até o
            back-end. Tenho muita vontande de continuar aprendendo e me
            desenvolvendo cada dia mais! 🤗
          </Text>
        </Box>

        <Image src="./code_review.svg" alt="Codding" width="40%" />
      </HStack>

      <HStack
        spacing={20}
        mt={20}
        bgColor={colorMode === 'dark' ? '#5f5f5f57' : 'white'}
        rounded="3xl"
        p={8}
      >
        <Link href="http://github.com/reisvini1" isExternal>
          <IconLogo Icon={SiGithub} Description="Github" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/vin%C3%ADcius-reis-984941181/"
          isExternal
        >
          <IconLogo
            Icon={SiLinkedin}
            Description="LinkedIn"
            iconColor="#0077b5"
          />
        </Link>
      </HStack>
    </Flex>
  );
}
