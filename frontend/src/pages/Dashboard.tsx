import { useEffect, useState } from "react";
import Overview from "../components/Overview";
import ProfileCard from "../components/ProfileCard";
import Sidebar from "../components/Sidebar";
import axios from "axios";

export default function Dashboard() {
    const [appointments, setAppointments] = useState([])
    const [userInfo, setUserInfo]: any = useState("")

    useEffect(() => {
        const doctorInfoString: any = localStorage.getItem("doctorInfo");
        const fetchAppointments = async () => {
            if(doctorInfoString !== null) {
                const doctor = JSON.parse(doctorInfoString) 
                setUserInfo(doctor)
                const {data} = await axios({
                    method: 'get',
                    url: "http://localhost:8000/api/v1/user/appointments",
                    headers: {
                        'Authorization': doctor.id
                    }
                });
                setAppointments(data.patients)
            }
        }
        fetchAppointments();
    }, [])
 
    return <div className="mt-36 h-screen p-4 grid gap-4 grid-cols-12">
        <div className="col-span-2 flex flex-col justify-between">
            <Sidebar />
            <div className="cursor-pointer mb-16 pt-4 border-t">
                <ProfileCard firstName={userInfo.firstName} lastName={userInfo.lastName} specialists={userInfo.specialists}/>
            </div>
        </div>
        <div className="col-span-10 border p-6 bg-gray-100 rounded-2xl">
            <Overview patients={appointments} />
        </div>
    </div>
}