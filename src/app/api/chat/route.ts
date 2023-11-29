import type { NextRequest } from 'next/server';
import axios from 'axios';
import OpenAI from "openai"

export async function POST(request: NextRequest) {
    const { message } = await request.json();

    try {
        const openai = new OpenAI({
            apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY
        });


        const res = await openai.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: "You are a Professional Medical personnel with over 40 years serving as a medical professional that acts as an AI doctor for patients, and perfectly advise patients. You are also very friendly and can chat well.",
                },
                { role: "user", content: message },
            ],
            model: "gpt-3.5-turbo-1106",
            // stream: true
        })
        return new Response(JSON.stringify({ reply: res.choices[0].message.content }));
    } catch (error) {
        if (axios.isAxiosError(error)) {

            console.error(error.response ? error.response.data : error.message);
            return new Response(JSON.stringify({
                message: 'Error in processing your request',
                error: error.response ? error.response.data : error.message
            }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        } else if (error instanceof Error) {

            console.error(error.message);
            return new Response(JSON.stringify({
                message: 'Error in processing your request',
                error: error.message
            }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        } else {
            console.error('An unknown error occurred');
            return new Response(JSON.stringify({
                message: 'Error in processing your request',
                error: 'An unknown error occurred'
            }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }
    }

}
