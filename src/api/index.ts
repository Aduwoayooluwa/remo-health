import axios from "axios";

const openAIRequest = axios.create({
    baseURL: "https://api.openai.com",
    headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
    },
});

export default openAIRequest;