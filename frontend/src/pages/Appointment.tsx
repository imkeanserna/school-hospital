import { useParams } from "react-router-dom";
import AppointmentForm from "../components/AppointmentForm";
import { useEffect, useState } from "react";
import axios from "axios";
import DoctorProfile from "../components/DoctorProfile";
import toast, { Toaster } from "react-hot-toast";

export default function Appointment() {
    const { id } = useParams();
    const [doctor, setDoctor] = useState<any>({});
    const [patients, setPatients] = useState({
        email: "",
        firstName: "",
        lastName: "",
        sex: "",
        age: "",
        appointmentDate: "",
        phoneNumber: "",
        message: "",
        doctorId: id
    });
    const [debounceNumber, setDebounceNumber] = useState(0);

    const handleSubmit = async () => {
        try {
            const { data } = await axios({
                method: "post",
                url: "http://localhost:8000/api/v1/patient/appointment",
                data: patients,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            toast.success(data.message, {
                style: {
                    maxWidth: "400px"
                }
            })
        } catch (error: any) {
            toast.error(error.response.data.message)
        }
    }

    const handleInput = (e: any) => {
        clearTimeout(debounceNumber)
        const timeoutId = setTimeout(() => {
            setPatients({ ...patients, [e.target.name]: e.target.value })
        }, 200)
        setDebounceNumber(timeoutId);
    }

    useEffect(() => {
        const getUser = async () => {
            const { data } = await axios({
                method: 'get',
                url: `http://localhost:8000/api/v1/user/getDoctor/${id}`
            })
            setDoctor(data.user);
        }
        getUser();
    }, []);

    return <div className="my-36 px-40">
        <Toaster
            position="top-right"
            reverseOrder={false}
        />
        <div className="text-center my-16">
            <p className="font-medium text-5xl text-blue-900">Get In Touch</p>
            <p className="text-sm font-light">Book an Appointment to treat your health right now</p>
        </div>
        <div className="grid grid-cols-2">
            <div className="px-12">
                <DoctorProfile
                    email={doctor.email}
                    firstName={doctor.firstName}
                    lastName={doctor.lastName}
                    specialists={doctor.specialists}
                    description={doctor.description}
                />
            </div>
            <div className="border p-10 rounded-lg border-sky-300 bg-sky-50">
                <AppointmentForm onChange={handleInput} onSubmit={handleSubmit} />
            </div>
        </div>
    </div>
}