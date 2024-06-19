import Link from "next/link"
import { usePathname } from "next/navigation"

const NavItem = ({name, href}: {name: string, href: string}) => {
  const currentRoute = usePathname();
  return (
    <div className="px-3">
        <Link href={href} className={`pb-1 hover:border-b-2 border-black ${currentRoute === href && 'border-b-2'}`}>{name}</Link>
    </div>
  )
}

export default NavItem