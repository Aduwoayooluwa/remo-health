import { getAppointments } from "@/helper/users";
import useUserStore from "@/lib/store";
import { useState, useEffect } from "react";


export function useGetAppointments() {
    const { user } = useUserStore();
     const [allAppointments, setAllAppointments] = useState<any[]>([]);

    useEffect(() => {
        const appointments = getAppointments(user?.id);
        appointments.then((res: any) => {
            setAllAppointments(res)
        })
    }, [user?.id])


    return { allAppointments }
}