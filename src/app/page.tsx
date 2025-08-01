'use client';

import {useState} from 'react';
import {
  Box,
  Input,
  Button,
  VStack,
  Heading,
} from '@chakra-ui/react';
import axios from 'axios';
import ChatBubble from '@/components/ChatBubble';

interface Message {
    role: string,
    text: string
}

export default function Home() {
    const [input, setInput] = useState('');
    const [chatHistory, setChatHistory] = useState<Message[]>([
        { role: "assistant", text: "Hello! How are you feeling today?" },
    ]);

    const handleSend = async () => {
        if (!input.trim()) return;
        setInput(input)

        const res = await axios.post('/api/chat', { message: input })
        setChatHistory(res.data.memory)
    }

    return (
        <Box p={6} minH="100vh">
            <VStack align="stretch" maxW="xl" mx="auto">
                <Heading size="lg">AI Life Assistant</Heading>
                <p style={{ fontStyle: 'italic'}}>Powered by Gemini</p>
                <Box h="400px" overflowY="scroll" p={4} border="1px solid gray" borderRadius="md" display={"flex"} flexDirection={"column"}>
                    {
                        chatHistory.map((message, i) => <ChatBubble key={i} role={message.role} text={message.text} />)
                    }
                </Box>
                <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="How are you feeling today?" />
                <Button onClick={handleSend} colorScheme="teal">Send</Button>
            </VStack>
        </Box>
    );
}
