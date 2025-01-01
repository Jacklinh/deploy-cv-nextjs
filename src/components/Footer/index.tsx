import Link from "next/link"

const Footer = () => {
    return (
        <footer className="mx-auto max-w-container xl:max-2xl:max-w-65rem">
            <div className="footer-container text-center py-6 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto">
                <p>
                    Copyright by &nbsp;
                    <Link href="javascript:void(0)" className="transition-colors">
                        Le Van Linh
                    </Link>
                </p>
            </div>
        </footer>
    )
}

export default Footer