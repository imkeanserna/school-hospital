

export default function ProfileCard({firstName, lastName, specialists}: {firstName: string, lastName: string, specialists: string}) {
    return <div className="flex gap-3">
        <img src="/doctor-landing-page.png" alt="" 
            className="rounded-xl h-9 w-9 border border-gray-400"
        />
        <div>
            <p className="text-sm font-medium">Dr {firstName} {lastName}</p>
            <p className="text-[10px] font-light text-gray-600">{specialists}</p>
        </div>
    </div>
}