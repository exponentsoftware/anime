import { Button } from '@chakra-ui/button'
import { Input } from '@chakra-ui/input'
import { Stack } from '@chakra-ui/layout'
import React from 'react'

function SearchBox({handleSubmit,handleChange}) {
    return (
        <Stack direction={["column", "row"]} spacing="24px" w="40%" p={4}>
        <Input placeholder="medium size" size="md" onChange={handleChange} />
        <Button type="submit" bg='teal' onClick={handleSubmit}>Search</Button>
      </Stack>
    )
}

export default SearchBox;
