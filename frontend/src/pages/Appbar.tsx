import { Link, useNavigate } from "react-router-dom"
import Button from "../components/Button"

const buttons = ["Home", "Services", "Blogs", "About", "Contact"];


export default function Appbar() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/doctors");
    }

    return <div className="fixed top-0 left-0 right-0 backdrop-blur-sm z-20 mx-40 mt-8 bg-sky-200/40 rounded-lg">
        <div className="px-10 py-4 flex justify-between items-center ">
            <Link to={"/"} className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
                <p className="text-sm font-semibold">Froiland's Ospital</p>
            </Link>
            <div className="flex items-center">
                <div className="flex gap-12 font-medium me-36">
                    {buttons.map((button: any, index: number) => {
                        return <Link key={index} to={"/"}
                            className="group transition-all duration-300 ease-in-out"
                        >
                            <span className="bg-left-bottom bg-gradient-to-r from-blue-600 to-blue-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                                {button}
                            </span>
                        </Link>
                    })}
                </div>
                <Button label="Book Now!" onSubmit={handleNavigate} />
            </div>
        </div>
    </div>
}