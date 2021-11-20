import { Box, Text, Link, Image, useColorMode } from '@chakra-ui/react';
import { AlternateLanguage } from '@prismicio/client/types/documents';

interface ProjectItemDataProps {
  lang?: string;
  alternate_languages?: AlternateLanguage[];
  description?: string;
  github_link?: string;
  title?: string;
  preview_image?: string;
}

export default function ProjectItem({
  description,
  github_link,
  title,
  preview_image,
  alternate_languages,
}: ProjectItemDataProps) {
  const { colorMode } = useColorMode();

  return (
    <Box bgColor="#f7f4f4" p={{ base: 5, md: 8 }} rounded="3xl">
      <Text
        fontSize={{ base: '1.5rem', md: '2.5rem' }}
        textColor="#737ef1"
        fontWeight="bold"
      >
        {title}
      </Text>
      <Text
        py={{ base: 4, md: 8 }}
        fontSize={{ base: '1rem', md: '1.4rem' }}
        textColor="#000000"
      >
        {description}
      </Text>

      <Link
        href={github_link}
        isExternal
        _focus={{ boxShadow: 'none' }}
        textColor="#000000"
      >
        <Box bgColor={{ base: '', md: "#c5c5c517" }} p={{ base: 0, md: 10 }} rounded="3xl">
          <Image
            src={preview_image}
            alt="Project Preview"
            maxW="576"
            maxH="276"
            display={{ base: 'none', md: 'flex' }}
          />

          <Text pt={{ base: 0, md: 10 }} fontWeight="semibold">
            Github Repo
          </Text>
        </Box>
      </Link>
    </Box>
  );
}
