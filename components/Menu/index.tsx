import {
  Spacer,
  Flex,
  Box,
  Text,
  Image,
  HStack,
  Show,
  Menu as MenuDropdown,
  MenuButton,
  IconButton,
  MenuOptionGroup,
  MenuItem,
  MenuList
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { HamburgerIcon } from '@chakra-ui/icons'

type MenuItemType = {
  href: string
  children: React.ReactNode
}

export const Menu = () => {
  const router = useRouter()

  const MenuDesktopItem = ({ href, children }: MenuItemType) => {
    return (
      <Text
        p="5"
        onClick={() => router.push(href)}
        color={router.pathname === href ? 'orange' : 'white'}
        _hover={{
          color: 'orange  ',
          cursor: 'pointer'
        }}
      >
        {children}
      </Text>
    )
  }
  return (
    <Box margin="0 auto" py="55" maxW="1200px">
      <Flex w="100%" alignItems="center">
        <Image
          _hover={{
            cursor: 'pointer'
          }}
          src={'/sterCryptoLogo.svg'}
          alt="logo"
          h={{ base: '7', md: '30' }}
          onClick={() => router.push('/')}
        />
        <Spacer />
        <Show above="md">
          <HStack spacing="30" color="white">
            <MenuDesktopItem href="/marketplace"> Marketplace </MenuDesktopItem>
            <MenuDesktopItem href="/mint-tokens"> Mint Tokens </MenuDesktopItem>
            <MenuDesktopItem href="/my-nfts"> My NFTs </MenuDesktopItem>
          </HStack>
        </Show>
        <Show below="md">
          <MenuDropdown>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon color="white" fontSize="15" />}
              variant="outline"
            />
            <MenuList>
              <MenuItem onClick={() => router.push('/marketplace')}>
                Marketplace
              </MenuItem>
              <MenuItem onClick={() => router.push('/mint-tokens')}>
                Mint Tokens
              </MenuItem>
              <MenuItem onClick={() => router.push('/my-nfts')}>
                My NFTs
              </MenuItem>
            </MenuList>
          </MenuDropdown>
        </Show>
      </Flex>
    </Box>
  )
}
