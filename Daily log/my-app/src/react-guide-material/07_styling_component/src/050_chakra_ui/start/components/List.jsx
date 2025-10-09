import {VStack, StackDivider, HStack, IconButton, Text} from 'chakra-ui/react';
import {VscCheck} from 'react-icons/vsc';

const List = ({todos, deleteTodo}) => {
    const complete = (id) => {
        deleteTodo(id)
    }
    return (
        <VStack
        divider={<StackDivider />}
        borderColor='black.100'
        borderWidth='1px'
        borderRadius='3px'
        p={5}
        alignItems='start'
        color={{sm: 'red.600', md: 'red.500', lg: 'red.400'}}
        >
            {todos.map(todo => {
                return (
                    <HStack key={todo.id}>
                        <IconButton onClick={() => complete(todo.id)} 
                        icon={<VscCheck />} 
                        isRound 
                        bgColor='cyan.100'
                        opacity='0.5'
                        >
                        完了
                        </IconButton>
                        <Text>{todo.content}</Text>
                    </HStack>
                )
            })}
        </VStack>
    );
}

export default List;