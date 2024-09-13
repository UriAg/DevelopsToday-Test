import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
    subsets:["latin"],
    weight:["600", "300", "300"]
});

export default function NotFound() {
    return (
    <div className={`${poppins.className} bg-slate-200 min-h-screen flex flex-col justify-center items-center`}>
      
        <h2 className="font-semibold text-2xl">404 - Not found</h2>
        <p className="font-thin pb-6">Cannot access to this route</p>
        <Link href="/" className="text-blue-700 hover:text-blue-900">Go back</Link>
    </div>
  );
}
