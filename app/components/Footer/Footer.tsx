import { AiFillGithub } from "react-icons/ai"
import { FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="bg-gray-400 w-full grid place-items-center py-3 text-gray-800">
        <div className="flex mb-2">
            <a href="https://github.com/Vidyut01"><AiFillGithub size={30} className="mr-5" /></a>
            <a href="https://www.linkedin.com/in/vidyut-venkatesan"><FaLinkedin size={30} /></a>
        </div>
        <h4>Made by Vidyut &copy; 2024</h4>
    </div>
  )
}

export default Footer