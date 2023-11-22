import Layout from "./Layout";
import PatientForm from "./PatientForm"
import openAIRequest from "../../api"
import { Heading, useToast } from "@chakra-ui/react"
import Reply from "./Reply"
import React from "react";
interface FormData {
    patientName: string;
    symptoms: string;
}


export default function Home() {
  const toast = useToast();

  const [aiResponses, setAiResponses] = React.useState<string[]>([]);

       const handleFormSubmit = async (data: FormData) => {
        try {
            const response = await openAIRequest.post('/v1/engines/ada/completions', {
                prompt: `Patient name: ${data.patientName}\nSymptoms: ${data.symptoms}\nDiagnosis:`,
                max_tokens: 150,
            });

            setAiResponses(prevResponses => [...prevResponses, response.data.choices[0].text]);
            // Handle the response (e.g., display it on the UI)
        } catch (error: any) {
            console.error('Error fetching diagnosis:', error);
            toast({
                status: "error",
                description: "Error fetching diagnosis"
            });
        }
    };


    
  return (
    <Layout>
      <PatientForm onSubmit={handleFormSubmit} />
      
      <Reply aiResponses={aiResponses} />
    </Layout>
  );
}
