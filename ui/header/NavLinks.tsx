import Link from "next/link";
export function NavLinks() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/">Usługi</Link>
                </li>
                <li>
                    <Link href="/">Kontakt</Link>
                </li>
            </ul>
        </nav>
    );
}
