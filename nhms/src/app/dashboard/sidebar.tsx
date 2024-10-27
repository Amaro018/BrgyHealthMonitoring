export default function Sidebar(){
    return (

 
        <div className="flex flex-col bg-slate-900 w-[350px] h-screen p-12">
        <h1 className="text-sm font-bold underline underline-offset-4 sm:text-sm md:text-4xl lg:text-4xl text-center">NHMS</h1>
        <p className="text-xs text-center">nagsiya health monitoring system</p>
        <div className="mt-16 flex flex-col gap-2">
        
        <div className="flex gap-2 items-center hover:text-green-500 cursor-pointer">
        <i className='bx bx-home-heart text-2xl'></i>
        <p className="text-2xl">HOME</p>
        </div>
        
        
        <div className="flex gap-2 items-center hover:text-green-500 cursor-pointer">
        <i className='bx bx-universal-access text-2xl'></i>
        <p className="text-2xl">RESIDENTS</p>
        </div>
        
        
        <div className="flex gap-2 items-center hover:text-green-500 cursor-pointer">
        <i className='bx bx-heart text-2xl'></i>
        <p className="text-2xl">RECORDS</p>
        </div>
        
        <div className="flex gap-2 items-center hover:text-green-500 cursor-pointer">
        <i className='bx bxs-calendar-event text-2xl'></i>
        <p className="text-2xl">PROJECTS</p>
        </div>
        
        <div className="flex gap-2 items-center hover:text-green-500 cursor-pointer">
        <i className='bx bx-log-out text-2xl'></i>
        <p className="text-2xl">LOGOUT</p>
        </div>
        
        </div>
        </div>
       
    
    )
}