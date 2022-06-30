import React from "react"
import NextLink from "next/link"
import { useAuth } from "../auth/AuthUserProvider"
import { Box, Button, HStack, Link } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { signInWithGoogle } from "../../util/firebase"
//import styles from "../../styles/Navbar.module.css"

type NavLinkData = {
  name: string
  path: string
}
const navData: NavLinkData[] = [
  {
    name: "Home",
    path: "/",
  },
  {

    name: "TaskByte",
    path: "/taskbyte",
  },
]

type NavLinkProps = {
  navData: NavLinkData
}

const NavLink = ({ navData: { name, path } }: NavLinkProps) => {
  const { pathname: currentPath } = useRouter()
  return (
    <NextLink key={path} href={path} passHref>
      <Link
        _hover={{
          textDecoration: "none",
        }}
      >
        <Button
          _focusVisible={{ shadow: "outline" }}
          _focus={{ shadow: "none" }}
          colorScheme={"teal"}
          variant={currentPath === path ? "solid" : "ghost"}
        >
          {name}
        </Button>
      </Link>
    </NextLink>
  )
}

const Navbar = () => {
  const { user, signOut } = useAuth()
  return (
    <Box px={3}>
      <HStack justifyContent="space-between">
        <HStack h={14} as="nav" spacing={4} alignItems="center">
          {navData.map((data) => (
            <NavLink key={data.path} navData={data} />
          ))}
        </HStack>
        <Button
          _focusVisible={{ shadow: "outline" }}
          _focus={{ shadow: "none" }}
          colorScheme={"teal"}
          onClick={user ? signOut : signInWithGoogle}
        >
          {user ? "Sign Out" : "Sign In"}
        </Button>
      </HStack>
    </Box>
  )
}

export default Navbar
