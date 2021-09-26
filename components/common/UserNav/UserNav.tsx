import s from "./UserNav.module.css"
import { FC } from "react"
import Link from "next/link"
import { Bag, Heart } from "@components/icons"
import { useUI } from "@components/ui/context"
import useCart from "@framework/cart/use-cart"

const UserNav: FC = () => {
  const { openSidebar } = useUI()
  const { data } = useCart()
  return (
    <nav>
      <ul className={s.list}>
        <li className={s.item}>
          <Link href="/"><a><Bag onClick={openSidebar} /></a></Link>
        </li>
        <li className={s.item}>
          <Link href="/wishlist"><a><Heart /></a></Link>
        </li>
      </ul>
    </nav>
  )
}

export default UserNav
