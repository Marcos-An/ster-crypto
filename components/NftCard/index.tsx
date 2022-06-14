import { Box, Text, Heading, Image, Spacer, Flex } from '@chakra-ui/react'

export const NftCard = () => {
  return (
    <Box
      bgColor="gray.500"
      p="11"
      borderRadius="15"
      _hover={{
        border: '2px solid',
        borderColor: 'blue.500',
        cursor: 'pointer',
        boxShadow: '0px 4px 9px rgba(30, 80, 255, 0.27)'
      }}
    >
      <Image
        src={'/bored-ape.png'}
        alt="nft-image"
        boxSize="100%"
        h="auto"
        borderRadius="10px"
      />
      <Heading size="sm" mt="15px" color="white">
        Nft name
      </Heading>
      <Text color="gray.200" fontSize="13px">
        @fulano_da_silva
      </Text>
      <Flex alignItems="center" mt="15px">
        <Heading size="15" color="blue.200">
          4.00 ETH
        </Heading>
        <Spacer />
        <Image src={'/ETH-icon.png'} alt="ETH-icon" boxSize="17px" />
      </Flex>
    </Box>
  )
}
