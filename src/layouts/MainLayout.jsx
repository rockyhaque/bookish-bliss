
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className=''>
            <div className='h-20'>
                <Navbar></Navbar>
            </div>
            <div className='min-h-[calc(100vh-68px)]'>
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default MainLayout;