import { useState } from 'react';

const SubHeader = ({ onDismiss }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss(); // Call the onDismiss function to update MainLayout
  };

  if (!isVisible) return null;

  return (
    <div className="bg-[#1E1F20] text-center py-5 h-10 text-sm text-white  flex justify-center items-center opacity-100 z-40 fixed top-10 left-0 right-0">
      <p className="inline-flex items-center">
        The chain is currently being indexed. Some data may be temporarily unavailable, and you may experience degraded performance.
        <button
          onClick={handleDismiss}
          className="text-white underline focus:outline-none ml-1 bg-transparent"
        >
          Dismiss
        </button>
      </p>
    </div>
  );
};

export default SubHeader;
