import { NextApiRequest, NextApiResponse } from "next";
import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY});

let conversationHistory: {role: 'user' | 'assistant' | 'system'; text: string }[] = [
    { role: 'system', text: 'you are a helpful assistant'}
]

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const userMessage = req.body.message;
    conversationHistory.push({
        role: 'user',
        text: userMessage
    })
    try {
        const response = await ai.models.generateContent({
        model: 'gemini-2.0-flash-001',
        contents: conversationHistory
    })
    const model_response = response.text || ''
    conversationHistory.push({
        role: 'assistant',
        text: model_response
    })

    if (conversationHistory.length > 40) {
        conversationHistory = conversationHistory.slice(-40)
    }

    res.status(200).json({ text: response.text, memory: conversationHistory })
    } catch (err: any) {
        console.error('Error calling model')
        res.status(500).json({'error': err})
    }
}
