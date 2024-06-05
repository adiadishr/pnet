import { ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from 'react-router-dom';
import toTop from '../../../utilities/toTop';

interface DropdownProps {
    children: ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ children }) => {

    const [open, setOpen] = useState(false);
    const showFlyout = open;

    return (
        <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className='relative'>
            {children}
            <AnimatePresence>
                {showFlyout && (
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        style={{ translateX: "-50%" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="border-t-2 border-primary absolute left-1/2 top-12 w-64 rounded-xl bg-white text-black flex px-[25%] flex-col py-4 gap-2 shadow-lg"
                    >
                        <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                        <div className="absolute left-1/2 top-[-1px] h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white border-t-2 border-l-2 border-primary" />
                        <Link className="navlink" onClick={toTop} to='/Ongoing'> <span className="mr-1">🚧</span> Ongoing Projects</Link>
                        <Link className="navlink" onClick={toTop} to='/Completed'><span className="mr-1">🏁</span> Completed Projects</Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Dropdown