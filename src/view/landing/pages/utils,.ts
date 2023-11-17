export const menuVariants = {
    open: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            stiffness: 20,
            delay: 0.2
        }
    },
    closed: {
        opacity: 0,
        x: "-100%",
        transition: {
            type: 'spring',
            stiffness: 20
        }
    }
};

export const linkAnimationVariants = {
    closed: {
        opacity: 0
    },
    open: { opacity: 1 }
};

export const sideBarVariants = {
    closed: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: -1
        }
    },
    open: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: 1
        }
    }
}

export const features = [
    {
        title: "Virtual Consultations",
        description: "Offer patients the convenience of consulting with certified doctors from the comfort of their own homes",
        keyPoints: ["Personalized care", "Variety of medical specialties", "Ease of scheduling", "No travel required"]
    },
    {
        title: "AI-Powered Symptom Checker",
        description: "Showcase your app's innovative AI-driven symptom analysis tool. ",
        keyPoints: ["Quick symptom assessment", "AI-driven recommendations", "First step in healthcare guidance", "Data privacy and security"]
    },
    {
        title: "Secure and Confidential Messaging",
        description: "Emphasize the ability for patients to securely message healthcare providers for advice, follow-ups, and prescription requests. ",
        keyPoints: ["Encrypted communication", "Easy follow-up", "Prescription renewals", "Secure platform"]
    },
    {
        title: "Personalized Health Records and Management",
        description: "Focus on how users can manage their health records, including past consultations, prescriptions, and medical history, all in one place.",
        keyPoints: ["Centralized health records", "Easy access to medical history", "Seamless information sharing", "Enhanced personal health management"]
    }
];


export const faqData = [
    {
        question: "How do I book an appointment?",
        answer: "Booking an appointment is easy. Just log in to your account, choose your doctor, and select an available time slot."
    },
    {
        question: "What services do you offer?",
        answer: "We offer a wide range of telemedicine services including general consultations, specialist appointments, and mental health services."
    },
];
