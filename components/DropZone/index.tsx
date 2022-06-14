import { Center, Text } from '@chakra-ui/react'
import Dropzone from 'react-dropzone'

interface DropZoneProps {
  onUpload: (file: File) => void
}

export const DropZone = ({ onUpload }: DropZoneProps) => {
  const handleMessage = (isDragActive: boolean, isDragReject: boolean) => {
    if (!isDragActive) {
      return 'Drag `n` drop some files here, or click to select files'
    }
    if (isDragReject) {
      return 'File dont accepted'
    }
    return 'Drop your files here!'
  }

  return (
    <Dropzone
      accept={{
        'image/*': []
      }}
      maxFiles={2}
      onDrop={(acceptedFiles) => onUpload(acceptedFiles[0])}
    >
      {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
        <Center
          border="dashed"
          borderColor={
            !isDragActive ? 'gray.200' : isDragReject ? 'red' : 'green'
          }
          h="400"
          borderRadius="10"
          _hover={{ cursor: 'pointer' }}
        >
          <Center {...getRootProps()} h="100%" w="100%" p="10">
            <input {...getInputProps()} />
            <Text color="white" textAlign="center">
              {handleMessage(isDragActive, isDragReject)}
            </Text>
          </Center>
        </Center>
      )}
    </Dropzone>
  )
}
