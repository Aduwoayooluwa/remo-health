import { Text, Box, VStack, Heading, SimpleGrid } from "@chakra-ui/react";


const healthData = {
  bloodType: 'A+',
  allergies: ['Peanuts', 'Shellfish'],
  currentMedications: ['Ibuprofen', 'Lisinopril'],
  chronicConditions: ['Asthma', 'Hypertension']
};
const appointments = [
  { date: '2023-04-10', time: '10:00 AM', doctorName: 'Dr. Emily Smith', reason: 'Regular Checkup' },
  { date: '2023-04-15', time: '02:00 PM', doctorName: 'Dr. John Doe', reason: 'Follow-up Visit' },
  { date: '2023-04-20', time: '11:00 AM', doctorName: 'Dr. Sarah Johnson', reason: 'Consultation' }
];

const messages = [
  { title: 'Appointment Reminder', content: 'Your appointment with Dr. Smith is tomorrow at 10 AM.', date: '2023-04-09' },
  { title: 'New Message from Dr. Smith', content: 'Please remember to bring your test results.', date: '2023-04-08' },
  { title: 'Health Tips', content: 'Stay hydrated during the summer season.', date: '2023-04-07' }
];


export const HealthInformation = () => {
  return (
    <VStack align="start" spacing={3}>
      <Text fontSize="sm">Blood Type: {healthData.bloodType}</Text>
      <Text fontSize="sm">Allergies: {healthData.allergies.join(', ') || "None"}</Text>
      <Text fontSize="sm">Current Medications: {healthData.currentMedications.join(', ') || "None"}</Text>
      <Text fontSize="sm">Chronic Conditions: {healthData.chronicConditions.join(', ') || "Nonw"}</Text>
    </VStack>
  );
};

export const AppointmentHistory = () => {
  return (
    <SimpleGrid columns={2} spacing={5}>

      {appointments.slice(0, 3).map((appointment, index) => (
        <Box  key={index} p={3} shadow="md" borderWidth="1px">
          <Text fontWeight="bold">{appointment.date}</Text>
          <Text fontSize="sm">{appointment.time}</Text>
          <Text fontSize="sm">With: {appointment.doctorName}</Text>
          <Text fontSize="sm">Reason: {appointment.reason}</Text>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export const MessagesNotifications = () => {
  return (
    <VStack align="start" spacing={3}>

      {messages.slice(0, 3).map((message, index) => (
        <Box  w="full" key={index} p={3} shadow="md" borderWidth="1px">
          <Text fontWeight="bold">{message.title}</Text>
          <Text fontSize="sm">{message.content}</Text>
          <Text fontSize="sm" color="gray.600">{message.date}</Text>
        </Box>
      ))}
    </VStack>
  );
};



