export default function Button({ label, onSubmit }: { label: string, onSubmit: any }) {
    return <button onClick={onSubmit} className="bg-blue-600 hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-medium text-sm transition duration-700 ease-in-out hover:translate-y-1">
        {label}
    </button>
}