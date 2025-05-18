import { EIconName } from "@/types/enum"
import { IconBaseProps } from "react-icons";
import { FaArrowRight, FaBoxOpen, FaCartPlus, FaMoon, FaShoppingCart, FaSun, FaUsers } from "react-icons/fa"
import { VscProject } from "react-icons/vsc"


type IconMakerProps = {
    name: EIconName;
    props?: IconBaseProps;
}

const IconMaker = ({ name, props }: IconMakerProps) => {

    switch (name) {
        case EIconName.SUN:
            return <FaSun {...props} />

        case EIconName.MOON:
            return <FaMoon />

        case EIconName.ADD:
            return <FaCartPlus />

        case EIconName.ARROW_RIGHT:
            return <FaArrowRight />

        case EIconName.PRODUCTS:
            return < FaBoxOpen />

        case EIconName.USERS:
            return <FaUsers />

        case EIconName.SELECTED_PRODUCTS:
            return <FaShoppingCart />

        case EIconName.HEADER_LOGO:
            return <VscProject {...props} />
    }
}

export default IconMaker