
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { RiTwitterLine } from "react-icons/ri";
import { AiOutlineYoutube } from "react-icons/ai";
export const FooterRight = [

    {
        title: "Gym 24",
        information: ['Build strength and confidence at our gym with state-of-the-art equipment, personalized training, and a motivating community'],

    },
]
export const FoooterMiddle = [
    {
        title: "Address",
        information: "Republic of Belarus Minsk city Dzerzhinsky Avenue 15",

    },
]
export const FooterLeft = [

    {
        title: 'Contact',
        information: [ <FaPhoneAlt />  ,  '+375(44)-777-24-12 ',    <AiOutlineMail /> , 'gym24@gmail.com',  ],
        icons: [<FaInstagram />, < SlSocialFacebook />, <RiTwitterLine />, < AiOutlineYoutube />]
    },
]