import useUserStore from "@/lib/store";
import { supabase } from "@/lib/supabase"
import { useToast } from "@chakra-ui/react"
import { useRouter } from "next/navigation";
import { useState } from "react";

export async function addUser(userData: any) {
    const { first_name, last_name, role, email } = userData;


    const { data } = await supabase
        .from('user')
        .insert(
            {
                first_name,
                last_name,
                email,
                role,

            },
        );
    return data;
}

export async function createUserAppointment(payload: any) {
    const { patient_name, reason, timeOfAppointment, doctorId, isApproved, doctor_name, senderEmail } = payload;

    const { data, error } = await supabase
        .from("appointments")
        .insert(
            {
                patient_name,
                reason,
                doctorId,
                timeOfAppointment,
                isApproved,
                doctor_name,
                senderEmail
            }
        )

    if (error) {
        alert(error.message)
        return;
    }

    alert("Appointment Booked. Awaiting approval")
    return data;
}

export function useAuth() {
    const toast = useToast()
    const [isLoading, setIsLoading] = useState(false);
    const { push } = useRouter();

    const setUser = useUserStore((state) => state.setUser)
    const logout = useUserStore((state) => state.logout)


    async function signUpNewUser(payload: { email: string, password: string, role: string, first_name: string, last_name: string }) {
        const { email, password, role, first_name, last_name } = payload;
        const userData = {
            email, role, first_name, last_name
        }

        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        });

        setIsLoading(true);

        try {

            if (error) {
                toast({
                    status: "error",
                    title: error.message
                });
                return;
            }


            toast({
                status: "success",
                description: "Success"
            })
            setUser(userData)
            addUser(userData)

            if (role === "doctor") {
                push("/dashboard")
            }
            else {
                push("/user")
            }
            return data;
        }
        catch (error) {
            setIsLoading(false);
            toast({
                status: "error",
                description: "Something went wrong"
            });
        }
        finally {
            setIsLoading(false);
        }
    }

    async function signInWithEmail(payload: Readonly<{ email: string, password: string, role: string }>) {
        const { email, password, role } = payload

        const userData = {
            email, role
        }


        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });
        setIsLoading(true);


        try {
            if (isLoading) {
                toast({
                    status: "loading",
                    description: ""
                })
                return;
            }

            if (error) {
                toast({
                    status: "error",
                    title: error.message
                });
                return;
            }

            toast({
                status: "success",
                description: "Success"
            })


            const { data: userDetails, error: userDetailsError } = await supabase
                .from('user')
                .select('*')
                .eq('email', email)
                .single();

            const combinedData = {
                ...userDetails,
                role,
                ...data,

            }

            setUser(combinedData)

            // appointments of a patient
            // const { data: pAppointment } = await supabase.from("")

            // redirect patient to patient page and doctor to doctor's dashboard. 
            if (role === "doctor") {
                push("/doctor")
            }
            else {
                push("/user")
            }
            return data;
        }
        catch (error) {
            setIsLoading(false);
            toast({
                status: "error",
                description: "Something went wrong"
            });
        }
        finally {
            setIsLoading(false);
        }
    }


    async function signOut() {
        const { error } = await supabase.auth.signOut();

        if (error) {
            toast({
                status: "error",
                title: error.message
            })
            return;
        }

        logout();

        push("/login")
    }
    return {
        signOut, signInWithEmail, signUpNewUser, isLoading
    }
}


