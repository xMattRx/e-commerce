import { SignInButton, UserButton } from "@clerk/nextjs";
import { SignedOut } from "@clerk/nextjs/app-beta";
import Link from "next/link";



export default function Navbar() {
    return (
        <nav className='fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-slate-800 text-gray-300'>
            <Link href="/" className='uppercase font-bold text-md h-12 flex items-center'>
                Store
            </Link>
            <div className="flex items-center gap-8">
                <UserButton />
                <SignedOut>
                    <SignInButton mode="modal">
                        <button className="rounded-md border border-gray-400 px-3 py-2">
                            Fazer login
                        </button>
                    </SignInButton>
                </SignedOut>
            </div>
        </nav>
    )
}