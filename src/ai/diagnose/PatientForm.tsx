import { FormControl, FormLabel, Input, Textarea, Button, VStack } from "@chakra-ui/react";
import { useState, FormEvent } from "react";


interface PatientFormProps {
  onSubmit: (formData: { patientName: string; symptoms: string }) => void;
}

const PatientForm = ({ onSubmit }: PatientFormProps) => {
  const [patientName, setPatientName] = useState<string>('');
  const [symptoms, setSymptoms] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    onSubmit({ patientName, symptoms });
  };

  return (
    <VStack as="form" onSubmit={handleSubmit} spacing={4}>
      <FormControl isRequired>
        <FormLabel>Patient Name</FormLabel>
        <Input value={patientName} onChange={(e) => setPatientName(e.target.value)} />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Symptoms</FormLabel>
        <Textarea value={symptoms} onChange={(e) => setSymptoms(e.target.value)} />
      </FormControl>
      <Button type="submit" colorScheme="blue">Diagnose</Button>
    </VStack>
  );
};

export default PatientForm;

