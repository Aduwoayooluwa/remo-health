export const getFormattedTime = (d: any) => {
    let date = new Date(d);
    let formattedTime = date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });

    return formattedTime;
}

export const patients = [
    {
        id: 1,
        name: 'Alex Johnson',
        age: 29,
        lastVisit: '2023-03-15'
    },
    {
        id: 2,
        name: 'Maria Garcia',
        age: 34,
        lastVisit: '2023-03-20'
    },
    {
        id: 3,
        name: 'James Smith',
        age: 45,
        lastVisit: '2023-03-18'
    },
    {
        id: 4,
        name: 'Emily Davis',
        age: 52,
        lastVisit: '2023-03-22'
    },
    {
        id: 5,
        name: 'John Williams',
        age: 38,
        lastVisit: '2023-03-10'
    }

];

export const appointmentsData: any[] = [
    {
        id: 1,
        patientName: 'Emily Johnson',
        date: '2023-04-10',
        time: '10:00 AM',
        reason: 'Regular Checkup'
    },
    {
        id: 2,
        patientName: 'Michael Brown',
        date: '2023-04-11',
        time: '02:00 PM',
        reason: 'Follow-up Visit'
    },
    {
        id: 3,
        patientName: 'Sophia Davis',
        date: '2023-04-12',
        time: '11:30 AM',
        reason: 'Consultation'
    },
    {
        id: 4,
        patientName: 'James Wilson',
        date: '2023-04-13',
        time: '09:00 AM',
        reason: 'Physical Therapy'
    },
    {
        id: 5,
        patientName: 'Isabella Martinez',
        date: '2023-04-14',
        time: '01:00 PM',
        reason: 'Dental Check'
    },
    {
        id: 6,
        patientName: 'William Thomas',
        date: '2023-04-15',
        time: '03:30 PM',
        reason: 'Vaccination'
    },
    {
        id: 7,
        patientName: 'Olivia Garcia',
        date: '2023-04-16',
        time: '10:15 AM',
        reason: 'Eye Examination'
    }
];


export const categories = [
    'Dermatologist',
    'Cardiologist',
    'Neurologist',
    'Pediatrician',
    'Ophthalmologist',
    'Orthopedic Surgeon',
    'Gynecologist',
    'Psychiatrist',
    // Add more categories as needed
];