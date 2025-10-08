import {VStack, StackDivider} from 'chakra-ui/react';

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
                    <div key={todo.id}>
                        <button onClick={() => complete(todo.id)}>完了</button>
                        <span>{todo.content}</span>
                    </div>
                )
            })}
        </VStack>
    );
}

export default List;