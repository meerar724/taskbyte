import { Button, Center, Heading, Image, Spinner } from "@chakra-ui/react"
import { useAuth } from "../components/auth/AuthUserProvider"
import Layout from "../components/layout/Layout"
import styles from "../styles/Layout.module.css"
import { signInWithGoogle } from "../util/firebase"

const TaskByteHeading = () => (
  <Heading
    as="h1"
    // w="fit-content"
    bgGradient='linear(to-l, #61b079, #61c9cf)'
    bgClip="text"
    textAlign={"center"}
    lineHeight={1.33}
  >
    TaskByte
  </Heading>
)


const IndexPage = () => {
  const { user, loading } = useAuth()
  return (
    <Layout title="Home">
      <TaskByteHeading />
      <p style={{ paddingBottom: '10px' }}> Organize your tasks. </p>
      {loading ? (
        <Spinner />
      ) : user ? (<p>&nbsp;</p>
      ) : (
        <Button
          _focusVisible={{ shadow: "outline" }}
          _focus={{ shadow: "none" }}
          colorScheme={"teal"}
          onClick={signInWithGoogle}
        >
          Sign In
        </Button>
      )}
      <p>&nbsp;</p>
    </Layout >
  )
}

export default IndexPage
