import useUserStore from "@/lib/store"
import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase";

export async function getUsers() {
    const { data, error } = await supabase.from("user").select("*");

    let allDoctors: any[] = [];

    data?.forEach((doc) => {
        if (doc.role === "doctor") {

            allDoctors.push(doc)
        }
    });
    return allDoctors;
}
export async function getAppointments(email: string) {
    const { data, error } = await supabase.from("appointments").select("*").eq("senderEmail", email);

    return data;
}
export async function getDoctor(id: number) {
    const { data, error } = await supabase.from("user").select(id);

    return data;
}

export const useGetDoctors = () => {

    const [doctors, setDoctors] = useState<any[]>([])

    useEffect(() => {
        getUsers().then((res: any[]) => {
            setDoctors(res)
        });

    }, [])

    return { doctors }

}

export const useGetAppointments = () => {
    const [pAppointments, setPAppointments] = useState<any[]>([])
    const user = useUserStore((state) => state.user)

    useEffect(() => {
        getAppointments(user?.email).then((res: any) => {
            setPAppointments(res)

        });
    }, [user?.email])

    return { pAppointments }
}