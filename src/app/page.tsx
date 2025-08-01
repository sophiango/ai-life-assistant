'use client';

import {useState} from 'react';
import { Box, Input, Button, VStack, Text, Container } from '@chakra-ui/react';
import axios from 'axios';

interface Message {
    role: string,
    text: string
}

export default function Home() {
    const [input, setInput] = useState('');
    const [message, setMessage] = useState<Message>({role: '', text: ''});

    const handleSend = async () => {
        if (!input.trim()) return;
        setMessage({
            role: 'user',
            text: input
        })
        setInput(input)

        const res = await axios.post('/api/chat', { message: input })
        setMessage({
            role: 'assistant',
            text: res.data.text
        });
    }

    return (
        <Container>
            <VStack align="stretch" mt={8}>
                <Box h="400px" overflowY="scroll" p={4} border="1px solid gray" borderRadius="md">
                <Text>{message.text}</Text>
                </Box>
                <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Say something..." />
                <Button onClick={handleSend} colorScheme="teal">Send</Button>
            </VStack>
        </Container>
    );
}
