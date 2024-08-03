import { AiFillGithub } from "react-icons/ai"
import { FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="w-full grid place-items-center py-3">
        <div className="flex mb-2">
            <a href="https://github.com/Vidyut01"><AiFillGithub size={30} className="mr-5" /></a>
            <a href="https://www.linkedin.com/in/vidyut-venkatesan"><FaLinkedin size={30} /></a>
        </div>
        <h4>Made by Vidyut &copy; 2024</h4>
        <h4>
          The Source Code for this site can be found on {""}
          <a className="text-blue-400 hover:underline" href="https://github.com/Vidyut01/portfolio">
            GitHub
          </a>
        </h4>
    </div>
  )
}

export default Footer