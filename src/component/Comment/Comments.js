import React,{useState} from 'react'
import CommentUI from './CommentUI';
import { VStack } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';

function Comments() {
    const [comment, setComment] = useState([])
    const [temp,setTemp]=useState('')

    const handleChange=e=>{
        setTemp(e.target.value)
    }
    const handleSubmit=e=>{
        setComment([...comment,temp])
    }
    return (
        <>
        <CommentUI  handleChange={handleChange} handleSubmit={handleSubmit}/>
        <VStack>
            {
                comment.map((comm,index)=><Text key={index}>{comm}</Text>)
            }
        </VStack>
        </>
    )
}

export default Comments
