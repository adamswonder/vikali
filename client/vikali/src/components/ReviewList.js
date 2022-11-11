import React from 'react';
import { VStack, StackDivider, HStack, Text, Spacer, IconButton, Badge } from '@chakra-ui/react';
import { FaTrash } from "react-icons/fa";

const ReviewList = ({reviews, deleteReview}) => {
  if(!reviews.length) {
    return(
      <Badge colorScheme='cyan' p='4' borderRadius='lg'>
        Your Review 👇
      </Badge>
    );
  }
  
  return (
    <VStack divider={<StackDivider />} borderWidth='2px' borderColor='gray.100' borderRadius='lg' padding='4' w='100%' maxW={{base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw'}} alignItems='stretch'>
      {reviews.map(review => (
        <HStack key={review.id}>
          <Text>{review.body}</Text>
          <Spacer />
          <IconButton icon={<FaTrash />} isRound='true' onClick={() => deleteReview(review.id)} />
        </HStack>
      ))}
    </VStack>
  );
}

export default ReviewList;