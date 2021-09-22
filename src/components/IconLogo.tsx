import { Box, Text } from "@chakra-ui/react";

interface IconLogoProps {
  Icon: any;
  Description?: string;
  iconColor?: string;
}

export default function IconLogo({ Icon, Description, iconColor }: IconLogoProps) {
  return (
    <Box alignItems="center" justifyContent="center" mx="auto">
      <Box fontSize={{ base: "4xl", md: "6xl" }} align="center" color={iconColor}>
        <Icon />
      </Box>
      <Text align="center" mt={3}>
        {Description}
      </Text>
    </Box>
  );
}
