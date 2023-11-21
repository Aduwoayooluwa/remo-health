import type { NextRequest } from 'next/server';
import axios from 'axios';

export async function POST(request: NextRequest) {
    const { message } = await request.json();

    try {
        const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
            prompt: message,
            max_tokens: 150
        }, {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`
            }
        });

        return new Response(JSON.stringify({ reply: response.data.choices[0].text }), {
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        return new Response(JSON.stringify({ message: 'Error in processing your message' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
