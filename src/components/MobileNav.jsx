"use client"
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";




const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "services",
        path: "/services"
    },
    {
        name: "resume",
        path: "/resume"
    },
    {
        name: "work",
        path: "/work"
    }
]


const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center ">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col ">
                <VisuallyHidden>
                    <SheetTitle>Hidden Title</SheetTitle>
                </VisuallyHidden>
                {/* logo */}
                <div className="mt-32 mb-40 text-center text-2xl text-white">
                    <Link href={'/'}>
                        <h1 className="text-4xl font-semibold">
                            Parvez <span className="text-accent">.</span>
                        </h1>
                    </Link>
                </div>
                {/* nav */}
                <nav className="flex flex-col justify-center items-center gap-8 text-white ">
                    {
                        links.map((link, index) => {
                            return <Link key={index} href={link.path}
                                className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize hover:text-accent transition-all`}
                            >
                                {link.name}
                            </Link>
                        })
                    }
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;