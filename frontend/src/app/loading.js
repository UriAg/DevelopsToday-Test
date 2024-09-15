import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "300", "300"],
});

export default function Loading() {
  return (
    <div
      className={`${poppins.className} bg-slate-200 min-h-screen flex flex-col justify-center items-center`}
    >
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
