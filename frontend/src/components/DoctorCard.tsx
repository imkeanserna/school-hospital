import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

type DoctorInfo = {
    firstName: string;
    lastName: string;
    specialists: string;
    description: string;
    id: string;
}

export default function DoctorCard({ firstName, lastName, specialists, description, id }: DoctorInfo) {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/appointment/${id}`)
    }
    return <div onClick={() => { navigate(`/appointment/${id}`) }} className="border cursor-pointer transition duration-700 ease-in-out hover:-translate-y-1 hover:scale-120  shadow-md p-8 rounded-xl  flex flex-col gap-4">
        <div className="flex justify-center">
            <img src="/doctor-landing-page.png" alt=""
                className="w-20 h-20 rounded-full drop-shadow-md"
            />
        </div>
        <div className="text-center">
            <p className="text-lg font-medium">Dr. {firstName} {lastName}</p>
            <p className="text-sm font-medium">{specialists}</p>
        </div>
        <p className="text-sm font-light text-balance truncate line-clamp-4">{description}</p>
        <Button label="Book me" onSubmit={handleNavigate} />
    </div>
}