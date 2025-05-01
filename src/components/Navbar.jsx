import logo from '../assets/SGLogo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Navbar = () => {
    return (
        <nav className='mb-20 flex items-center justify-between py-6'>
            <div className='flex shrink-0 items-center'>
                <img src={logo} alt='logo' className='mx-2 w-28 cursor-pointer'></img>
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <a href='https://www.instagram.com/sidhant_gairola/'><FaInstagram className='hover:-translate-y-0.5 hover:text-red-400' /></a>
                <a href='https://linkedin.com/in/sidhant-gairola'><FaLinkedin className='hover:-translate-y-0.5 hover:text-blue-400' /></a>
                <a href='https://github.com/sidhant-gairola'><FaGithub className='hover:-translate-y-0.5 hover:text-violet-400' /></a>
            </div>
        </nav>
    )
}

export default Navbar
