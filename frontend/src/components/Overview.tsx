import axios from "axios";
import { useState } from "react"
import Patient from "./Patient";


export default function Overview({ patients }: { patients: any }) {
    console.log(patients)
    const [flag, setFlag] = useState(false);
    const [patient, setPatient] = useState({});
    const handlePatient = async (id: string) => {
        const { data } = await axios({
            method: 'get',
            url: `http://localhost:8000/api/v1/patient/appointment/${id}`
        });
        setFlag(true)
        setPatient(data.patient)
    }

    const handleFlag = () => {
        setFlag(false)
    }

    return <div className="">
        <div className="flex mb-6 gap-3 items-center">
            <p className="text-sm font-medium">Today</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
        </div>
        {!flag ?
            <div className="flex flex-col gap-4">
                <div className="grid grid-cols-3 gap-6">
                    <OverviewCard label="Appointments" amount="24" />
                    <OverviewCard label="Hours" amount="1hr" />
                    <OverviewCard label="Surgey" amount="02" />
                </div>
                <div className="bg-white p-5 rounded-lg border">

                    <div>
                        <div className="flex justify-between mb-7">
                            <p className="font-medium text-xl">Appointments</p>
                            <button className="text-sm font-medium text-blue-600">View All</button>
                        </div>
                        <div>
                            <div className="relative overflow-x-auto sm:rounded-lg overflow-auto h-[400px]">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                                    <thead className="text-xs text-gray-700 uppercase">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                Visit No.
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Patient Name
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Gender
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Reason
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {patients.map((patient: any, key: number) => {
                                            return <tr onClick={() => { handlePatient(patient.id) }} key={key} className="hover:bg-gray-200 border-y cursor-pointer ">
                                                <th scope="row" className="px-6 py-4">
                                                    #{Math.floor(Math.random() * 999999) + 100000}
                                                </th>
                                                <td className="px-6 py-4">
                                                    {patient.firstName} {patient.lastName}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {patient.sex}
                                                </td>
                                                <td className="px-6 py-4">
                                                    Monthly Checkup
                                                </td>
                                                <td className="px-6 py-4">
                                                    <a href="#" className="font-medium text-blue-600 hover:underline">Consult</a>
                                                </td>
                                            </tr>
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            :
            <Patient patient={patient} onClick={handleFlag} />
        }
    </div>
}

export function OverviewCard({ label, amount }: { label: string, amount: string }) {
    return <div className="p-5 bg-white cursor-pointer rounded-xl border flex flex-col gap-6">
        <div className=" text-gray-700 flex justify-between">
            <p className="text-sm">{label}</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 cursor-pointer">
                <path fill-rule="evenodd" d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clip-rule="evenodd" />
            </svg>
        </div>
        <div>
            <p className="font-semibold mb-2 text-4xl">{amount}</p>
            <div className="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 fill-green-600">
                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" clip-rule="evenodd" />
                </svg>
                <p className="text-green-600 text-xs font-medium">+5.11%</p>
            </div>
        </div>
    </div>
}