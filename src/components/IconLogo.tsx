import { Box, Text } from "@chakra-ui/react";

interface IconLogoProps {
  Icon: any;
  Description?: string;
  iconColor?: string;
  display?: string | object;
  
}

export default function IconLogo({ Icon, Description, iconColor, display }: IconLogoProps) {
  return (
    <Box alignItems="center" justifyContent="center" mx="auto" display={display}>
      <Box fontSize={{ base: "4xl", md: "6xl" }} align="center" color={iconColor}>
        <Icon />
      </Box>
      <Text align="center" mt={3}>
        {Description}
      </Text>
    </Box>
  );
}
