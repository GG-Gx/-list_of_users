import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Heading, Text, Flex, Button } from '@chakra-ui/react';



function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null); 

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        return response.json();
      })
      .then(data => setUser(data))
      .catch(error => setError(error.message)); 
  }, [id]);

  if (error) return <div>Error: {error}</div>; 

  if (!user) return <div>Loading...</div>;

  return (
  <Flex alignContent="center" h="100vh"  wrap="wrap" alignItems='center'bgGradient="linear(to-t, pink.200, purple.500)" >
    <Box p={8} maxW="md" borderWidth="1px" borderRadius="md" boxShadow="lg" border='2px' borderColor='gray.200'margin="auto" background="white">
      <Heading>{user.name}</Heading>
      <Text>Username: {user.id}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Phone: {user.phone}</Text>
      <Text>Website: {user.website}</Text>
    </Box>
  </Flex>
    
  
  );
}

export default UserDetails;
