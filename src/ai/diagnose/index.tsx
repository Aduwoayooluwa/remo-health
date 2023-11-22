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
              prompt: `Act as a Senior Medical Professional with 50 years of experience, specializing in comprehensive diagnosis. Based on the following patient details, provide a detailed medical diagnosis and suggest potential treatment approaches.
                Patient Name: ${data.patientName}
                Symptoms: ${data.symptoms}
                Detailed Diagnosis and Treatment Suggestions:`,
                max_tokens: 150,
            });

            setAiResponses(prevResponses => [...prevResponses, response.data.choices[0].text]);
            
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
