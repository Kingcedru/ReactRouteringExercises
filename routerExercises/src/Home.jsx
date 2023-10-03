// import React from "react";
// import backImage from './assets/backi.png'

// export default function Home(){
//     return (
//         <div className="">
//             <nav className="flex justify-between px-5 py-10 bg-[#FFF7ED]">
//                 <div>
//                     <h1 className="font-bold text-4xl">#VANLIFE</h1>
//                 </div>
//                 <ul className="navbar flex gap-5 text-lg">
//                     <li><a href="/">Home</a></li>
//                     <li><a href="/">About</a></li>
//                 </ul>
//             </nav>
//             <div className="relative flex">
//                 <img className='w-screen h-[420px]' src={backImage}></img>
//                 <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-5/6">
//                     <h1 className="text-white text-4xl font-bold">You got the travel plans, we got the travel vans.</h1>
//                     <h1 className="text-white">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</h1>
//                     <button className="bg-orange-400 flex justify-center w-4/5 py-3 ">Find your Van</button>
//                 </div>
//             </div>
//             <div className="footer bg-[#252525] text-slate-400 py-6 flex justify-center">
//                 <h1>Ⓒ 2022 #VANLIFE</h1>
//             </div>
//         </div>
//     )
// }
import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="home-container">
            <h1>You got the travel plans, we got the travel vans.</h1>
            <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <Link to="vans">Find your van</Link>
        </div>
    )
};