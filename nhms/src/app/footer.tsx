export default function Footer () {
    return (
        <footer className="absolute bottom-0 text-center w-full border-t border-green-200 bg-slate-900">
            <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                <p className="dark:text-white">Copyright &copy; {new Date().getFullYear()} NHMS. by Jhemell Amaro</p>
            </div>
        </footer>
    )
}