import { Box, Text } from '@chakra-ui/react';
import ReactMarkdown from "react-markdown";

interface ChatBubbleProps {
    role: string
    text: string
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({role, text}) => {
    const isUser = role === 'user'
    return (
        <Box
            maxW='70%'
            alignSelf={isUser ? 'flex-start': 'flex-end'}
            bg={isUser ? 'blue.500': 'gray.200'}
            color={isUser ? 'white': 'black'}
            p={3}
            borderRadius={'lg'}
            mb={2}
            alignContent={isUser ? 'right' : 'left'}
            alignItems={isUser ? 'right' : 'left'}
        >
            <ReactMarkdown>{text}</ReactMarkdown>
        </Box>
    )
}

export default ChatBubble;