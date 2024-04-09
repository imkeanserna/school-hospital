import { useEffect, useState } from "react";
import DoctorCard from "../components/DoctorCard";
import axios from "axios";

export default function SelectAppointment() {
    const [doctors, setDoctors] = useState([]);

    const fetchDoctors = async () => {
        const { data }: any = await axios({
            method: 'get',
            url: 'http://localhost:8000/api/v1/user/getDoctors'
        })
        setDoctors(data.users)
        console.log(data.users)
    }

    useEffect(() => {
        fetchDoctors();
    }, [])

    return <div className="my-56 px-40 ">
        <div className="text-center pb-16">
            <p className="font-bold text-5xl">Meet Our Specialists</p>
            <p className="font-light texttext-sm">We use only the best quality materials on the market in order to provide the best products to our patients.</p>
        </div>
        <div className="grid grid-cols-3 gap-12">
            {doctors.map((doctor: any, key: number) => {
                return <DoctorCard key={key}
                    firstName={doctor.firstName}
                    lastName={doctor.lastName}
                    specialists={doctor.specialists}
                    description={doctor.description}
                    id={doctor.id}
                />
            })}
        </div>
    </div>
}