import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="py-8 md:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <Link href={"/"}>
                    <h1 className="text-4xl font-semibold">
                        Parvez <span className="text-accent">.</span>
                    </h1>
                </Link>
                {/*  navbar  */}
                <div className="hidden md:flex items-center gap-8">
                    <Nav></Nav>
                    <Link href={"/resume/hireme"}>
                    <Button variant={""} className={'cursor-pointer'}>Hire me</Button>
                    </Link>
                </div>

                {/* mobile nav */}
                <div className="md:hidden">
                   <MobileNav />
                </div>
            </div>
        </header>
    )
};

export default Header;