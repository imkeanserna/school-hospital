import axios from "axios";
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom"


export default function Signin() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const [debouncingId, setDebouncingId] = useState(0)

    const handleOnChange = (e: any) => {
        clearTimeout(debouncingId)
        const id = setTimeout(() => {
            setUser({ ...user, [e.target.name]: e.target.value })
        }, 200)
        setDebouncingId(id);
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const { data } = await axios({
                method: "post",
                url: "http://localhost:8000/api/v1/user/signin",
                data: user,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            toast.success(data.message, {
                style: {
                    maxWidth: "400px"
                }
            });
            console.log(data.isExist)
            localStorage.setItem("doctorInfo", JSON.stringify(data.isExist))
            setTimeout(() => {
                navigate("/")
            }, 1000)
        } catch(error: any) {
            toast.error(error.response.data.message)
        }
    }

    return <div className="pt-36 grid grid-cols-2">
         <Toaster
            position="top-right"
            reverseOrder={false}
        />
        <div className="relative">
            <img src="/doctor-signin.png" alt="" className="w-[700px] h-[650px] object-cover rounded-tr-lg" />
            <div className="text-white absolute bottom-12 flex flex-col gap-6 ps-24 pe-72">
                <div>
                    <p className=" font-light text-xl">“For There Was Never Yet Philosopher, That Could Endure The Toothache Patiently”</p>
                    <p className=" font-medium text-xl">~ Dr Dre Andre Romelle</p>
                </div>
                <p className="font-light text-sm">Founder of Smile Pvt.Ltd</p>
            </div>
        </div>
        <div className="ps-10 pe-64 flex flex-col justify-center">
            <div>
                <p className="font-bold text-4xl text-blue-950 my-2">Welcome Back</p>
                <p className="text-sm font-light text-blue-950">Discover a better way of spandings with Uifry.</p>
            </div>
            <div className="mb-6 mt-8 pt-12 border-t-2">
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className=" rounded-lg relative ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 absolute left-4 top-4 text-gray-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                        <input type="email" name="email" placeholder="Enter your Email"
                            onChange={handleOnChange}
                            className="text-sm py-3 ps-12 w-full rounded-lg border-2" />
                    </div>
                    <div className=" rounded-lg relative ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 absolute left-4 top-4 text-gray-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                        <input type="password" name="password" placeholder="Password"
                            onChange={handleOnChange}
                            className="text-sm py-3 ps-12 w-full rounded-lg border-2" />
                    </div>
                    <div>
                        <button className="w-full bg-blue-600 hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-medium text-sm transition duration-700 ease-in-out hover:translate-y-1">
                            Login
                        </button>
                    </div>
                </form>
            </div>
            <p className="text-xs text-center text-blue-900">Not member yet? <Link to={"/register"}
                className="font-bold"
            >Create an account</Link></p>
        </div>
    </div>
}