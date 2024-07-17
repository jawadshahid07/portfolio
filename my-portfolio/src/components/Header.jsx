import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";

const Header = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="m-8 flex items-center justify-center gap-4 text-2xl ml-auto"> 
                <a href="https://www.linkedin.com/in/jawad07" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/jawadshahid07" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://jawadify.xyz" target="_blank" rel="noopener noreferrer"> 
                    <FaFileAlt />
                </a>
            </div>
        </nav>
    );
}

export default Header;
