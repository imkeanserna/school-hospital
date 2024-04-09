type DoctorInfo = {
    email: string;
    firstName: string;
    lastName: string;
    specialists: string;
    description: string;
}

export default function DoctorProfile({ email, firstName, lastName, specialists, description }: DoctorInfo) {
    return <div>
        <div className="flex gap-4 mb-6">
            <img src="/doctor-landing-page.png" alt=""
                className="h-36 w-36 rounded-full border-2 border-sky-300"
            />
            <div className="flex items-center w-full">
                <div className="flex shadow-md w-full shadow-sky-500/40 gap-5 p-6 border rounded-lg">
                    <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm font-medium">Dr. {firstName} {lastName}</p>
                        <p className="text-sm text-gray-500">{specialists}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-5">

            <div className="flex shadow-md shadow-sky-500/40 gap-5 p-6 border rounded-lg">
                <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
                <div>
                    <p className="text-sm font-medium">Office Timings</p>
                    <p className="text-sm text-gray-500">Monday - Saturday (9:00am to 5pm)</p>
                </div>
            </div>
            <div className="flex items-center shadow-md shadow-sky-500/40 gap-5 p-6 border rounded-lg">
                <div>
                    <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                    </div>
                </div>
                <div>
                    <p className="text-sm font-medium">Email Address</p>
                    <p className="text-sm text-gray-500">{email}</p>
                </div>
            </div>
            <div className="flex items-center shadow-md shadow-sky-500/40 gap-5 p-6 border rounded-lg">
                <div>
                    <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z" />
                        </svg>
                    </div>
                </div>
                <div>
                    <p className="text-sm font-medium">Description</p>
                    <p className="text-sm text-gray-500">{description}</p>
                </div>
            </div>
        </div>
    </div>
}