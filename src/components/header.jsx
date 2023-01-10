import logo from '../assets/images/icons/logo.svg';
import { navLinks } from "../data/navLinks.js";

const Header = () => {
    return (
        <header className="bg-dark-2 flex items-center pr-9">
            <div className="bg-dark-1 w-1/4 py-6 px-9 flex justify-between items-center">
                <img src={logo} alt="logo" />
                <button type="button" className="p-3 text-white bg-muted-2 rounded cursor-pointer transition-all duration-75 hover:bg-muted-3">
                    <i className="bi bi-volume-up flex items-center justify-center" />
                </button>
            </div>
            <nav className="bg-dark w-2/4 px-8">
                <ul className="flex gap-2 items-center">
                    {
                        navLinks.map(({id, name, icon, link}) => {
                            return (
                                <li key={id}>
                                    <a href={link} className="text-muted-1 text-base font-bold px-5 py-8 cursor-pointer transition-all duration-75 ease-in group hover:text-white hover:border-t-2 border-solid border-primary">
                                        <i className={`bi bi-${icon} mr-1 group-hover:text-primary`} /> {name}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
            <div className="flex items-center gap-2 w-1/4 justify-end">
                <div className="flex items-center mr-16">
                    <div className="text-white text-base p-3 rounded whitespace-nowrap font-bold">
                        KES. 2,850.00
                    </div>
                    <a href="/wallet" className="py-2 px-5 text-base inline-flex bg-primary text-white font-bold rounded transition-all duration-75 ease-in hover:bg-primary-hover">
                        <i className="bi bi-coin mr-2" /> Deposit
                    </a>
                </div>
                <a href="/profile" className="flex items-center bg-muted-2 hover:bg-muted-3 rounded font-bold text-white py-2 px-5">
                    <i className="bi bi-person-gear mr-2" /> WakaFlaka
                </a>
                <button type="button" className="p-3 text-danger bg-muted-2 rounded cursor-pointer transition-all duration-75 hover:bg-muted-3">
                    <i className="bi bi-box-arrow-right flex items-center justify-center" />
                </button>
            </div>
        </header>
    )
}

export default Header