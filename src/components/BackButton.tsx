import {
    ArrowLeftCircle
} from "lucide-react"

import Link
    from "next/link"
interface BackButtonProps {
    text: string, 
    link: string, 
}


const BackButton = ({text, link}: BackButtonProps) => {
    return (
        <>
        <Link href={link} className="flex text-gray-500 hover:underline gap-1 font-bold mb-5">
            <ArrowLeftCircle size={20} />
            <p>{text}</p>
        </Link>
        </>
     );
}
 
export default BackButton;