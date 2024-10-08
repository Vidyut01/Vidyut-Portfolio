import Link from "next/link"
import { usePathname } from "next/navigation"

import styles from './NavItem.module.css'

const NavItem = ({
  name,
  href,
  onClick,
  className
}: {
  name: string,
  href: string,
  onClick?: () => void,
  className?: string
}) => {
  const currentRoute = usePathname();
  return (
    <div className={`px-3 ${className && className}`}>
        <Link href={href} className={`pb-1 ${currentRoute === href && 'font-bold'} ${styles.linkUnderline}`} onClick={onClick} >{name}</Link>
    </div>
  )
}

export default NavItem