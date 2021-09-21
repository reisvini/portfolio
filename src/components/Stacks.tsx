import {
  Flex,
  HStack,
  Text,
  Divider,
} from '@chakra-ui/react';
import { HiChip } from 'react-icons/hi';
import {
  SiCss3,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNextDotJs,
  SiNodeDotJs,
  SiReact,
  SiSass,
  SiTypescript,
} from 'react-icons/si';
import { AiOutlineApi } from 'react-icons/ai';
import { BsArrowUpDown } from 'react-icons/bs';
import { FaDatabase } from 'react-icons/fa';
import IconLogo from './IconLogo';

export function Stacks() {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      flexDirection="column"
      maxW={1680}
      mx="auto"
      px={20}
      py={6}
      id="stacks"
    >
      <IconLogo Icon={HiChip} />

      <Text fontSize="2.5rem" fontWeight="bold" mb={4}>
        Stacks & Techs
      </Text>

      <Divider />

      <HStack spacing="3rem" mt={10} >
        <IconLogo
          Icon={SiJavascript}
          Description="JavaScript"
          iconColor="#f7df1e"
        />
        <IconLogo
          Icon={SiTypescript}
          Description="TypeScript"
          iconColor="#007acc"
        />
        <IconLogo Icon={SiReact} Description="React" iconColor="#61dbfb" />
        <IconLogo
          Icon={SiReact}
          Description="React Native"
          iconColor="#61dbfb"
        />
        <IconLogo Icon={SiNextDotJs} Description="NextJS" />
        <IconLogo Icon={SiNodeDotJs} Description="NodeJS" iconColor="#68a063" />
        <IconLogo Icon={SiHtml5} Description="HTML" iconColor="#e34c26" />
      </HStack>
      <HStack spacing="3rem" mt={10}>
        <IconLogo Icon={SiCss3} Description="CSS" iconColor="#264de4 " />
        <IconLogo Icon={SiSass} Description="Sass" iconColor="#cd6799" />
        <IconLogo Icon={SiGit} Description="Git" iconColor="#f34f29" />

        <IconLogo
          Icon={FaDatabase}
          Description="Database"
          iconColor="#fcac00"
        />
        <IconLogo Icon={AiOutlineApi} Description="APIs" />
        <IconLogo
          Icon={BsArrowUpDown}
          Description="CI/CD"
          iconColor="#007acc"
        />
      </HStack>
    </Flex>
  );
}
