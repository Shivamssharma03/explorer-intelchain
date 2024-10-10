import { useState } from 'react';
import SubHeader from '../components/Subheader';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/SideBar';

const MainLayout = ({ children }) => {
  const [isSubHeaderVisible, setIsSubHeaderVisible] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleDismissSubHeader = () => {
    setIsSubHeaderVisible(false);
  };

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {isSubHeaderVisible && <SubHeader onDismiss={handleDismissSubHeader} />}
      <div className="flex flex-1 bg-[#070136] ">
        <Sidebar className="z-2" isOpen={isSidebarOpen} onToggle={handleToggleSidebar} />

        {/* Add transition-all to animate margin changes */}
        <main className={`bg-[#070136] z-1 w-full py-10 px-5 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-48' : 'ml-16' } ${isSubHeaderVisible ? 'mt-[30px]' : 'mt-0'} `}>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
