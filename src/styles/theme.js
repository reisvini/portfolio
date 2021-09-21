import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
});

const theme = extendTheme({ config });

export default theme