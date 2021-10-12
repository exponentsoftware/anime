import React from 'react';
import { Input } from '@chakra-ui/input';
import { HStack } from '@chakra-ui/layout';

function CommentUI({handleChange,handleSubmit}) {

    return (
        <>
        <HStack>
        <Input type='text' onChange={handleChange} placeholder='Enter comments'/>
        <button type='submit' onClick={handleSubmit}>send</button>
        </HStack>
        
        </>
    )
}

export default CommentUI
