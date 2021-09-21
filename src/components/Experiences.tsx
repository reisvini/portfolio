import { Flex, Text, Divider, Grid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { RiContactsBook2Line } from 'react-icons/ri';
import Prismic from '@prismicio/client';

import { client } from '../services/prismic';
import IconLogo from './IconLogo';
import ProjectItem from './ProjectItem';
import { Document } from '@prismicio/client/types/documents';

export function Experiences() {
  const [results, setResults] = useState<Document[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await client.query(
        Prismic.Predicates.at('document.type', 'project')
      );

      if (response) {
        setResults(response.results);
      }
    };
    fetchData();
  }, []);

  return (
    <Flex
      justifyContent="space-between"
      direction="column"
      alignItems="center"
      maxW={1680}
      mx="auto"
      px={20}
      py={6}
    >
      <IconLogo Icon={RiContactsBook2Line} />

      <Text fontSize="2.5rem" fontWeight="bold" mb={4}>
        Experiências e Projetos
      </Text>

      <Divider />
      <Text fontSize="1.5rem"></Text>

      <Grid mt={10} templateColumns="repeat(2, 1fr)" gap={20}>
        {results.map((result) => (
          <ProjectItem
            key={result.uid}
            description={result.data.project_description[0].text}
            github_link={result.data.project_github.url}
            preview_image={result.data.project_preview.url}
            title={result.data.project_title[0].text}
          />
        ))}
      </Grid>
    </Flex>
  );
}
