import React, { useState } from 'react';
import { HStack, Input, Button, useToast } from '@chakra-ui/react';
import { nanoid } from 'nanoid';

const AddTodo = ({addReview}) => {
  const [content, setContent] = useState('');
  const toast = useToast();
  
  function handleSubmit(e) {
    e.preventDefault();

    if(!content) {
      toast({
        title: 'No content',
        status: 'error',
        duration: 2000,
        isClosable: true
      });

      return;
    }

    const review = {
      id: nanoid(),
      body: content
    };

    addReview(review);
    setContent('');
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <HStack mt='8'>
        <Input variant='filled' placeholder='Append Review' value={content} onChange={(e) => setContent(e.target.value)} />
        <Button type='submit' colorScheme='cyan' px='8'>Add Review</Button>
      </HStack>
    </form>
  );
}
export default AddTodo;