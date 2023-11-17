import {create} from 'zustand';
import Cookies from 'js-cookie';

interface User {
  id: string;
  name: string;
  email: string;

}

interface UserStoreState {
  user: any;
  setUser: (userData: User) => void;
  logout: () => void;
}

const COOKIE_NAME = 'user';

const getUserFromCookie = (): User | any => {
  const cookie = Cookies.get(COOKIE_NAME);
  return cookie ? JSON.parse(cookie) : null;
};

const getPatientAppointments = () => {
  const cookie = Cookies.get("patientAppointments");
  return cookie ? JSON.parse(cookie) : null;

}

const useUserStore = create<UserStoreState>((set) => ({
  patientAppointments: getPatientAppointments(),
  user: getUserFromCookie(),
  setUser: (userData: any) => {
    Cookies.set(COOKIE_NAME, JSON.stringify(userData), { expires: 7 });
    set({ user: userData });
  },
  setPatientAppointments: (appointments: any) => {
    Cookies.set("patientAppointments", JSON.stringify(appointments), { expires: 7 })
  },
  logout: () => {
    Cookies.remove(COOKIE_NAME);
    set({ user: null });
  },
}));

export default useUserStore;
