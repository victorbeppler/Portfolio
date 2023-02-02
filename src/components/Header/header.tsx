export function Header() {
    return (
        <div className="w-100% h-20 border-b border-white solid top-0 left-0">
            <div className="flex justify-center items-center gap-20 py-5">
                <button className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl">About me</button>
                <button className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl">Projects</button>
                <button className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl">Contact</button>
            </div>
        </div>
    )
}