import axios from "axios";
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom"


export default function register() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        specialists: "",
        description: ""
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
        console.log(user);
        try {
            const { data } = await axios({
                method: "post",
                url: "http://localhost:8000/api/v1/user/register",
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
            setTimeout(() => {
                navigate("/")
            }, 1000)
        } catch (error: any) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
        }
    }

    return <div className="pt-36 grid grid-cols-2 h-min-screen">
        <Toaster
            position="top-right"
            reverseOrder={false}
        />
        <div className="relative">
            <img src="/doctor-signup.png" alt="" className="w-[700px] h-full object-cover rounded-tr-lg" />
            <div className="text-white absolute bottom-64 flex flex-col gap-6 ps-24 pe-72">
                <div>
                    <p className=" font-light text-xl">“For There Was Never Yet Philosopher, That Could Endure The Toothache Patiently”</p>
                    <p className=" font-medium text-xl">~ Dr Dre Andre Romelle</p>
                </div>
                <p className="font-light text-sm">Founder of Smile Pvt.Ltd</p>
            </div>
        </div>
        <div className="ps-10 pe-64 flex flex-col justify-center">
            <div>
                <p className="font-bold text-4xl text-blue-950 my-2">Create An Account</p>
                <p className="text-sm font-light text-blue-950">Discover a better way of spandings with Uifry.</p>
            </div>
            <div className="mb-6 mt-8 pt-12 border-t-2">
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div className=" rounded-lg relative ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 absolute left-4 top-4 text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                            <input type="text" name="firstName" placeholder="Type your firstname"
                                onChange={handleOnChange}
                                className="text-sm py-3 ps-12 w-full rounded-lg border-2" />
                        </div>
                        <div className=" rounded-lg relative ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 absolute left-4 top-4 text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                            <input type="text" name="lastName" placeholder="Type your lastname"
                                onChange={handleOnChange}
                                className="text-sm py-3 ps-12 w-full rounded-lg border-2" />
                        </div>
                    </div>
                    <div className=" rounded-lg relative ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 absolute left-4 top-4 text-gray-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                        </svg>
                        <input type="text" name="specialists" placeholder="Enter your Specialists"
                            onChange={handleOnChange}
                            className="text-sm py-3 ps-12 w-full rounded-lg border-2" />
                    </div>
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
                    <div className="col-span-full relative">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 absolute left-4 top-6 text-gray-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                        </svg>
                        <div className="mt-2">
                            <textarea
                                onChange={handleOnChange}
                                name="description"
                                rows={6}
                                className="py-3 ps-12 pe-3 dblock w-full rounded-lg border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                defaultValue={''}
                                placeholder="Write a few sentences about your self."
                            />
                        </div>
                    </div>
                    <div>
                        <button className="w-full bg-blue-600 hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-medium text-sm transition duration-700 ease-in-out hover:translate-y-1">
                            Sign up
                        </button>
                    </div>
                </form>
            </div>
            <p className="text-xs text-center text-blue-900">Have account?
                <Link to={"/signin"}
                    className="font-bold underline"
                >Sign In</Link></p>
        </div>
    </div>
}