import Link from 'next/link'

const Footer = () => {
    return (
        <footer>
            <div className="flex justify-center bg-black text-gray-400">
                <div className="w-full max-w-6xl flex justify-between items-center h-16 px-4">
                    <div className="">
                        <Link href={'/'}>
                            <p className="tracking-widest text-xs font-light">Copyright 2020 - FARNAY.</p>
                        </Link>
                    </div>
                    <div className="text-xs">
                        <Link href={'/'}>
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;