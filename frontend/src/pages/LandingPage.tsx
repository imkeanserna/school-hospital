import Button from "../components/Button";
import LandingCard from "../components/LandingCard";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/doctors");
    }
    
    return <div className="px-40 my-36">
        <div className="flex relative items-center mt-16 h-[680px]">
            <div className="z-10 flex flex-col gap-10">
                <div>
                    <p className="font-extrabold text-6xl w-[800px]">Get Ready For Your Best Ever Medical Experience!</p>
                    <p className="mt-4 font-light text-sm text-gray-600 tracking-wide w-[500px]">We use only the best quality materials on the market in order to provide the best products to our patients, So don’t worry about anything and book yourself.</p>
                </div>
                <div className="flex gap-4">
                    <Button label="Book an appointment" onSubmit={handleNavigate}/>
                    <div className="flex gap-3">
                        <div className="border border-blue-600 rounded-lg p-3 bg-blue-100 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 fill-blue-600">
                                <path fillRule="evenodd" d="M19.5 9.75a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l4.72-4.72a.75.75 0 1 1 1.06 1.06L16.06 9h2.69a.75.75 0 0 1 .75.75Z" clipRule="evenodd" />
                                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className=" text-xs">
                            <p className="font-bold text-blue-600">Hospital 24H Emergency</p>
                            <p>0900-78601</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 transition duration-700 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer w-26 shadow-2xl w-80 border p-3 rounded-lg ">
                    <div className="flex gap-4">
                        <img src="/doctor-card.png" alt=""
                            className="w-8 h-8 border border-gray-500 rounded-full"
                        />
                        <div className=" text-xs">
                            <p className="font-medium">Lebron James</p>
                            <p className="font-light">Doctor</p>
                        </div>
                    </div>
                    <p className=" font-light text-xs">Top Quailty medical treatment done by field experts, Highly Recommended for everyone</p>
                </div>
            </div>
            <div>
                <img src="/doctor-landing-page.png" alt=""
                    className="absolute top-28 right-0 z-0"
                />
            </div>
        </div>
        <div className="flex justify-between gap-4 px-8 py-10 rounded-lg bg-sky-100">
            <LandingCard title="Root Canal Treatment" description="Root canal treatment (endodontics) is a dental procedure used to treat infection at the centre of a tooth." />
            <LandingCard title="Cosmetic Dentist" description="Cosmetic dentistry is the branch of dentistry that focuses on improving the appearance of your smile." />
            <LandingCard title="Dental Implants" description="A dental implant is an artificial tooth root that’s placed into your jaw to hold a prosthetic tooth or bridge." />
        </div>
    </div>
}