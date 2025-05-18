import { EIconName } from "@/types/enum"
import { IconBaseProps } from "react-icons";
import { FaArrowRight, FaBoxOpen, FaCartPlus, FaMoon, FaPhoneAlt, FaSearch, FaShoppingCart, FaSun, FaUsers } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6";
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
            return <FaMoon {...props} />

        case EIconName.ADD:
            return <FaCartPlus  {...props} />

        case EIconName.ARROW_RIGHT:
            return <FaArrowRight {...props} />

        case EIconName.PRODUCTS:
            return < FaBoxOpen {...props} />

        case EIconName.USERS:
            return <FaUsers  {...props} />

        case EIconName.SELECTED_PRODUCTS:
            return <FaShoppingCart  {...props} />

        case EIconName.HEADER_LOGO:
            return <VscProject {...props} />

        case EIconName.SEARCH:
            return <FaSearch  {...props} />

        case EIconName.LOCATION:
            return <FaLocationDot   {...props} />

        case EIconName.PHONE:
            return <FaPhoneAlt   {...props} />

    }
}

export default IconMaker