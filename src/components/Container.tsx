import { Flex, useColorMode, FlexProps } from '@chakra-ui/react'

export const Container = (props: FlexProps) => {
  const { colorMode } = useColorMode()

  const bgColor = { light: '#0E0333', dark: 'gray.900' }

  const color = { light: 'white', dark: 'black' }
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  )
}
