import {
  Flex,
  Divider,
  Text,
  HStack,
  Box,
  Link,
  Image,
  useColorMode,
} from '@chakra-ui/react';
import { RiContactsBook2Line } from 'react-icons/ri';
import IconLogo from './IconLogo';

import { SiLinkedin } from 'react-icons/si';

export default function Contact() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      flexDirection="column"
      maxW={1680}
      mx="auto"
      px={{ base: 6, md: 20 }}
      py={6}
      id="contact"
    >
      <IconLogo Icon={RiContactsBook2Line} />

      <Text fontSize="2.5rem" fontWeight="bold" mb={4}>
        Contato
      </Text>

      <Divider />

      <Flex
        mt={10}
        alignItems="center"
        justifyContent="space-evenly"
        bgColor={colorMode === 'dark' ? '#5f5f5f57' : 'white'}
        rounded="3xl"
        p={8}
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Image
          src="mail.svg"
          width={{ base: '70%', md: '25%' }}
          mb={{ base: '10' }}
        />

        <Link
          href="mailto:vinicius.moreira2003@gmail.com"
          fontSize={{ base: '1rem', md: '1.5rem' }}
          fontWeight="bold"
        >
          vinicius.moreira2003@gmail.com
        </Link>
      </Flex>

      <Box
        mt={20}
        bgColor={colorMode === 'dark' ? '#5f5f5f57' : 'white'}
        rounded="3xl"
        p={8}
      >
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
      </Box>
    </Flex>
  );
}
