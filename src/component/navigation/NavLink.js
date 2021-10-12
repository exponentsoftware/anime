import { Stack } from '@chakra-ui/layout'
import React from 'react'
import { Link } from 'react-router-dom'

function NavgationLink() {
    return (
        < Stack direction={["column", "row"]} spacing="24px"
        bg="blue"
        w="20%"
        m={4}
        p={4}
        color="white"
        justifyContent="space-around"
      >
        <Link to="/login">Log in</Link>
        <Link to="/register">Register</Link>
      </Stack>
    )
}

export default NavgationLink
