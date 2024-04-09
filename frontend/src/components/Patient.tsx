import { useState } from "react";

export default function Patient({ patient, onClick }: { patient: any, onClick: any }) {
    return <div className="relative">
        <button onClick={onClick} className="flex gap-1 items-center absolute transform active:scale-75 transition-transform -top-5 right-0 hover:">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 fill-blue-600">
                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clip-rule="evenodd" />
            </svg>
            <p className="text-xs font-light">Close</p>
        </button>
        <div className="p-6 flex flex-col gap-6 ">
            <PatientProfileCard patient={patient} />
            <PatientDescription description={patient.message} />
        </div>
    </div>
}


export function PatientProfileCard({ patient }: { patient: any }) {
    return <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4 flex gap-4 bg-white p-5 h-40 rounded-xl">
            <img src="patient.png" alt=""
                className="h-28 w-28 rounded-md border"
            />
            <div className="">
                <p className=" font-medium text-lg">{patient.firstName} {patient.lastName}</p>
                <div className="flex flex-col gap-6">
                    <div className="flex justify-between font-medium text-sm text-gray-500">
                        <p >{patient.sex}</p>
                        <p >Age {patient.age}</p>
                    </div>
                    <div className="text-xs font-light text-blue-600">
                        <p>{patient.id}</p>
                        <p>{patient.email}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-span-8 p-5 bg-white rounded-xl">
            <div className="flex justify-between items-center pb-5 border-b">
                <p className="font-bold text-lg text-gray-600">Latest Vitals</p>
                <div className="flex gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 fill-blue-600">
                        <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                    </svg>
                    <p className=" text-blue-600 text-xs">Edit</p>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-6 py-6">
                <div>
                    <p className="font-semibold text-gray-800 text-lg">120mg/dt</p>
                    <div className="mt-3">
                        <p className="text-sm text-gray-600 font-medium">Blood Glucose Level</p>
                        <p className="text-sm text-gray-400 font-medium">Before meal - 11/03/23</p>
                    </div>
                </div>
                <div>
                    <p className="font-semibold text-gray-800 text-lg">98.1 ℉</p>
                    <div className="mt-3">
                        <p className="text-sm text-gray-600 font-medium">Temperature</p>
                        <p className="text-sm text-gray-400 font-medium">Today</p>
                    </div>
                </div>
                <div>
                    <p className="font-semibold text-gray-800 text-lg">120/80 mm hg</p>
                    <div className="mt-3">
                        <p className="text-sm text-gray-600 font-medium">Blood Pressure</p>
                        <p className="text-sm text-gray-400 font-medium">Today</p>
                    </div>
                </div>
                <div>
                    <p className="font-semibold text-gray-800 text-lg">120mg/dt</p>
                    <div className="mt-3">
                        <p className="text-sm text-gray-600 font-medium">Blood Glucose Level</p>
                        <p className="text-sm text-gray-400 font-medium">After meal - 11/03/23</p>
                    </div>
                </div>
                <div>
                    <p className="font-semibold text-gray-800 text-lg">160 cm</p>
                    <div className="mt-3">
                        <p className="text-sm text-gray-600 font-medium">Height</p>
                        <p className="text-sm text-gray-400 font-medium">20/03/23</p>
                    </div>
                </div>
                <div>
                    <p className="font-semibold text-gray-800 text-lg">55 Kg</p>
                    <div className="mt-3">
                        <p className="text-sm text-gray-600 font-medium">Weight</p>
                        <p className="text-sm text-gray-400 font-medium">20/03/23</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}


export function PatientDescription({description}: {description: string}) {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full">
            <input
                id="expandCollapse"
                type="checkbox"
                checked={open}
                className="peer sr-only"
            />
            <label
                htmlFor="expandCollapse"
                className="w-full rounded-t-lg p-6 flex hover:bg-slate-50 cursor-pointer justify-between items-center bg-white border-b"
                onClick={() => setOpen(!open)}
            >
                <p className="font-bold text-lg text-gray-700">Reason for Consultation</p>

                <svg className="w-4 h-4 fill-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
                    <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
                </svg>
            </label>
            <div className=" overflow-hidden rounded-b-lg bg-white h-0 peer-checked:h-[200px] ">
                <div className="p-6 flex flex-col gap-3">
                    <p className="text-xs font-medium text-gray-800">Description on Consultation:</p>
                    <p className="text-gray-600 ps-6">{description}</p>
                </div>
            </div>
        </div>
    );
}
