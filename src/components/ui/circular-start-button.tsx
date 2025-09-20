import React, { useState, useCallback, useRef, useEffect } from 'react';
import '../../styles/circular-start-button.css';
import clickSound from '../../assets/audio/water-drop-85731.mp3'; // 你可以替换成你自己的音效文件

interface CircularStartButtonProps {
  onToggle?: (isPressed: boolean) => void;
  initialPressed?: boolean;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
}

/**
 * 圆形启动按钮组件
 * 支持三种状态：regular / hover / active
 * 完全可访问，支持键盘导航
 */
export const CircularStartButton: React.FC<CircularStartButtonProps> = ({
  onToggle,
  initialPressed = false,
  disabled = false,
  className = '',
  ariaLabel = 'Start application'
}) => {
  const [isPressed, setIsPressed] = useState(initialPressed);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // 初始化音效
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(clickSound);
      audioRef.current.volume = 0.15; // 设置音效音量
      audioRef.current.preload = 'auto';
    }
  }, []);

  // 播放点击音效
  const playClickSound = useCallback(() => {
    if (audioRef.current && !disabled) {
      audioRef.current.currentTime = 0; // 重置到开始位置
      audioRef.current.play().catch(error => {
        console.log('音效播放失败:', error);
      });
    }
  }, [disabled]);

  // 切换状态
  const toggleState = useCallback(() => {
    if (disabled) return;
    
    // 播放点击音效
    playClickSound();
    
    const newState = !isPressed;
    setIsPressed(newState);
    onToggle?.(newState);
  }, [isPressed, disabled, onToggle, playClickSound]);

  // 键盘事件处理
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      toggleState();
    }
  }, [toggleState]);

  // 外部状态同步
  useEffect(() => {
    setIsPressed(initialPressed);
  }, [initialPressed]);

  return (
    <div className={`start-button-container ${className}`}>
      <button
        ref={buttonRef}
        className="start-button"
        aria-pressed={isPressed}
        aria-label={ariaLabel}
        disabled={disabled}
        onClick={toggleState}
        onKeyDown={handleKeyDown}
        type="button"
      >
        {/* 核心按钮圆 */}
        <div className="btn-core"></div>
        
        {/* 外环 SVG (hover/active 状态显示) */}
        <div className="btn-ring">
          <svg xmlns="http://www.w3.org/2000/svg" width="102" height="102" viewBox="0 0 102 102" fill="none">
            <g filter="url(#filter0_d_7560_135)">
              <circle cx="51.0001" cy="50" r="40.2594" stroke="#FDFEFD"/>
            </g>
            <defs>
              <filter id="filter0_d_7560_135" x="0.940722" y="0.9406" width="100.119" height="100.119" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feMorphology radius="2" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_7560_135"/>
                <feOffset dy="1"/>
                <feGaussianBlur stdDeviation="3.65"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.264435 0 0 0 0 0.535565 0 0 0 0 0.445188 0 0 0 0.2 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7560_135"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7560_135" result="shape"/>
              </filter>
            </defs>
          </svg>
        </div>
      </button>
      
      {/* 下方文字 */}
      <div className="btn-text">START</div>
    </div>
  );
};

export default CircularStartButton;
