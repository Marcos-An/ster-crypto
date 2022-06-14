import type { NextPage } from 'next'
import { useState } from 'react'
import {
  Box,
  Center,
  Grid,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Textarea,
  Image,
  CloseButton
} from '@chakra-ui/react'
import { DropZone } from '@/components/DropZone'

const Marketplace: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isInvalid, setIsInvalid] = useState({
    mintName: false,
    price: false,
    description: false,
    file: false
  })
  const [mintData, setMintData] = useState({
    mintName: '',
    price: '',
    description: '',
    file: { previewFile: '' }
  })

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, id } = event.target

    const newMintData = {
      ...mintData,
      [id]: value
    }

    setMintData(newMintData)
  }

  const onSubmit = () => {
    setIsLoading(true)
  }

  const onUpload = (file: File) => {
    const newMintData = {
      ...mintData,
      file: { ...file, previewFile: URL.createObjectURL(file) }
    }
    setMintData(newMintData)
  }

  const removeFileUpload = () => {
    const newMintData = {
      ...mintData,
      file: { previewFile: '' }
    }
    setMintData(newMintData)
  }

  return (
    <Box maxW="1200" margin="0 auto">
      <Grid
        templateColumns={['1fr', 'repeat(2, 1fr)']}
        gap={10}
        maxW="1200"
        w="100%"
        mb={['100', null, '170']}
      >
        {mintData.file.previewFile ? (
          <Center position="relative" background="gray.600" borderRadius="10">
            <CloseButton
              size="md"
              color="white"
              position="absolute"
              right="3"
              top="2"
              onClick={removeFileUpload}
            />
            <Image
              src={mintData.file.previewFile}
              h="400"
              objectFit="contain"
            />
          </Center>
        ) : (
          <DropZone onUpload={onUpload} />
        )}

        <VStack spacing={8} alignItems="flex-start">
          <FormControl color="white" isInvalid={isInvalid.mintName} isRequired>
            <FormLabel htmlFor="mintName">Mint Name</FormLabel>
            <Input
              id="mintName"
              type="text"
              placeholder="Bored ape - 1"
              value={mintData.mintName}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl color="white" isInvalid={isInvalid.price} isRequired>
            <FormLabel htmlFor="price">Price</FormLabel>
            <Input
              id="price"
              type="text"
              value={mintData.price}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl
            color="white"
            isInvalid={isInvalid.description}
            isRequired
          >
            <FormLabel htmlFor="price">Mint Description</FormLabel>
            <Textarea
              id="description"
              value={mintData.description}
              onChange={handleInputChange}
            />
          </FormControl>
          <Button
            mt={4}
            px="16"
            colorScheme="blue"
            isLoading={isLoading}
            type="submit"
          >
            Mint NFT
          </Button>
        </VStack>
      </Grid>
    </Box>
  )
}

export default Marketplace
