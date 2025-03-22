import { FaRegCopyright } from "react-icons/fa6";
const date = new Date();

const Footer = () => {
  return (
    <>
      <p className="mx-auto my-2 flex flex-wrap justify-center text-center gap-x-1 tracking-tight">Copyright <FaRegCopyright className="mt-1"/> {date.getFullYear()} | All Rights Reserved.</p>
    </>
  )
}

export default Footer
