import Button from "./Button";

type Appointment = {
    onChange: any;
    onSubmit: any
}

export default function AppointmentForm({ onChange, onSubmit }: Appointment) {
    return <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">First name</label>
                <input type="text" name="firstName" className="border border-gray-300 btext-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="First name" required
                    onChange={onChange}
                />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Last name</label>
                <input type="text" name="lastName" className="border border-gray-300 btext-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Last name" required
                    onChange={onChange}
                />
            </div>
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
            <input type="email" name="email" className="border border-gray-300 btext-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Email" required
                onChange={onChange}
            />
        </div>
        <div className="flex gap-4">
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">Gender</label>
                <select id="countries" name="sex" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    onChange={onChange}
                >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Binary</option>
                </select>
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Age</label>
                <input type="text" name="age" className="border border-gray-300 btext-gray-900 text-sm rounded-lg block w-16 p-2.5" placeholder="Age" required
                    onChange={onChange}
                />
            </div>
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">Selec Date</label>
            <input type="date" name="appointmentDate" className="border border-gray-300 btext-gray-900 text-sm rounded-lg block w-full p-2.5" required
                onChange={onChange}
            />
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">Phone number</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 fill-blue-500">
                        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                    </svg>
                </div>
                <input type="text" name="phoneNumber" id="phone-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required
                    onChange={onChange}
                />
            </div>
        </div>
        <div className="col-span-full">
            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Message
            </label>
            <div className="mt-2">
                <textarea
                    onChange={onChange}
                    name="message"
                    rows={6}
                    className="p-2 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                />
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about your appointment.</p>
        </div>
        <div className="flex justify-center mt-6">
            {/* <button onClick={onSubmit} className="bg-blue-600 hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-medium text-sm transition duration-700 ease-in-out hover:translate-y-1">
                Book an appointment
            </button> */}
            <Button label="Book an appointment" onSubmit={onSubmit} />
        </div>
    </div>
}