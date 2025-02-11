import { HeaderImage } from "./styles"

import headerBackground from "../../assets/headerBackground.svg"
import { NavLink } from "react-router-dom"

export const Header = () => {
    return (
        <NavLink to="/">
            <HeaderImage src={headerBackground} />
        </NavLink>
    )
}