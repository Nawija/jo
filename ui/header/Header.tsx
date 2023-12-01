import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";

export function Header() {
    return (
        <div className="flex">
            <Logo title='Seovileo' />
            <NavLinks />
        </div>
    );
}
