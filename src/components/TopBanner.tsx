import { useState } from 'react';

interface TopBannerProps {
  onClose?: () => void;
}

export function TopBanner({ onClose }: TopBannerProps) {
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="w-full sticky top-0">
      <div className="bg-[rgba(51,102,85,1)] h-8 flex items-center justify-between px-8">
        {/* 左侧文字 */}
        <div className="flex-1 flex justify-center">
          <p className="text-white text-center text-[10px] font-chinese font-normal font-chinese">
            ⟡  心里有疑惑吗？写下来，让卡牌告诉你答案吧  ⟡  
          </p>
        </div>
        
        {/* 右侧关闭按钮 */}
        <button
          onClick={handleClose}
          className="text-white hover:text-gray-300 transition-colors duration-200 ml-4 flex-shrink-0"
          aria-label="关闭"
        >
          <svg 
            width="12" 
            height="12" 
            viewBox="0 0 12 12" 
            fill="none" 
            className="w-3 h-3"
          >
            <path 
              d="M9 3L3 9M3 3L9 9" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}