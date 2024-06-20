import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from './NavItem.module.css'

const NavItem = ({name, href}: {name: string, href: string}) => {
  const currentRoute = usePathname();
  return (
    <div className="px-3">
        <Link href={href} className={`pb-1 ${currentRoute === href && 'font-bold'} ${styles.linkUnderline}`}>{name}</Link>
    </div>
  )
}

export default NavItem