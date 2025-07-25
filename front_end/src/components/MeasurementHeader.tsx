import React from 'react';
import { GoArrowLeft } from "react-icons/go";

interface MeasurementHeaderProps {
  frameIdx: number;
  timestamp: number;
  onBack: () => void;
}

const MeasurementHeader: React.FC<MeasurementHeaderProps> = ({
  frameIdx,
  timestamp,
  onBack
}) => {
  return (
    <div className="fixed top-4 left-8 right-8 z-50">
      <div className="bg-[#232a36]/75 backdrop-blur rounded-2xl px-6 py-3 shadow-[0_8px_25px_rgba(148,163,184,0.25)] border border-gray-500/30 flex justify-between items-center relative">
        {/* Back Button */}
        <button 
          onClick={onBack} 
          className="bg-gray-700/50 hover:bg-gray-600/70 text-white border-none rounded-lg px-4 py-2 text-sm cursor-pointer transition-all duration-200 flex items-center gap-2 backdrop-blur"
        >
          <GoArrowLeft />
          Back to Video Analysis
        </button>
        
        {/* Central Title and Frame Info */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <div className="flex gap-6 text-sm text-gray-300">
            <span className="bg-white/10 rounded-full px-3 py-1">Frame: {frameIdx}</span>
            <span className="bg-white/10 rounded-full px-3 py-1">Time: {timestamp.toFixed(3)}s</span>
          </div>
        </div>
        
        {/* Right side spacer to balance the layout */}
        <div className="w-[200px]"></div>
      </div>
    </div>
  );
};

export default MeasurementHeader;