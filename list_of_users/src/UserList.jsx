import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Flex, List, ListItem, Text, Box } from '@chakra-ui/react';

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <Flex alignContent="center"  wrap="wrap" alignItems='center' bgGradient="linear(to-t, pink.200, purple.500)" margin="auto" h="100vh">
    <List spacing={3} margin="auto" padding="50px" alignContent="center" alignItems='center'>
      {users.map(user => (
        <ListItem key={user.id}>
          <Link to={`${user.id}`}>
          <Box p={2} shadow="md" borderWidth="1px"
                background="white"
                borderRadius="md"
                transition="all 0.3s"
                _hover={{ transform: 'scale(1.05)' }}
                >
            <Text >{user.name}</Text>
            </Box>
          </Link>
        </ListItem>
      ))}
    </List>
    </Flex>
  );
}

export default UsersList;

