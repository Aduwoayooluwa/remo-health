import Layout from "./Layout";
import PatientForm from "./PatientForm"
import openAIRequest from "../../api"
import { Heading } from "@chakra-ui/react"

interface FormData {
    patientName: string;
    symptoms: string;
}


export default function Home() {

    const handleFormSubmit = async (data: FormData): Promise<void> => {
    try {
        const response = await openAIRequest.post('/v1/engines/davinci-codex/completions', {
        prompt: `Patient name: ${data.patientName}\nSymptoms: ${data.symptoms}\nDiagnosis:`,
        max_tokens: 150,
        });
        console.log(response.data.choices[0].text);
        // Handle the response (e.g., display it on the UI)
    } catch (error: any) {
        console.error('Error fetching diagnosis:', error);

    }
    };

    
  return (
    <Layout>
          
          <PatientForm onSubmit={handleFormSubmit} />
    </Layout>
  );
}