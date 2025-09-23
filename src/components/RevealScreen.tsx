import React, { useRef, useState } from 'react';
import { Button } from './ui/button';
import { imgOthersThinkingProblem } from "../imports/svg-g3kyt";
import { DrawnCard } from './cardData';

interface RevealScreenProps {
  question: string;
  guidance: string;
  onNewQuestion: () => void;
  selectedCard: DrawnCard;
}

export function RevealScreen({ question, guidance, onNewQuestion, selectedCard }: RevealScreenProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0, z: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // 加强倾斜角度，增加动态范围
    const rotateX = (mouseY / rect.height) * 25; // 从15度增加到25度
    const rotateY = (mouseX / rect.width) * 25;   // 从15度增加到25度
    
    // 添加轻微的Z轴位移，增强3D效果
    const translateZ = Math.abs(mouseX) + Math.abs(mouseY);
    const maxTranslateZ = 20; // 最大Z轴位移
    const normalizedTranslateZ = Math.min(translateZ / 100, maxTranslateZ);
    
    setMousePosition({ 
      x: rotateY, 
      y: -rotateX,
      z: normalizedTranslateZ 
    });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0, z: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleCardClick = async () => {
    if (isDownloading) return;
    
    setIsDownloading(true);
    
    try {
      // 创建一个新的图片元素来加载卡牌图片
      const cardImage = new Image();
      cardImage.crossOrigin = 'anonymous';
      
      // 等待图片加载完成
      await new Promise((resolve, reject) => {
        cardImage.onload = resolve;
        cardImage.onerror = reject;
        cardImage.src = new URL(`../assets/CardFront/${selectedCard.image}`, import.meta.url).href;
      });
      
      // 创建 Canvas
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('无法创建 Canvas 上下文');
      
      // 设置 Canvas 尺寸（高分辨率）
      const scale = 2;
      canvas.width = cardImage.width * scale;
      canvas.height = cardImage.height * scale;
      
      // 设置背景色
      ctx.fillStyle = '#FDFEFD';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // 绘制卡牌图片
      ctx.drawImage(cardImage, 0, 0, canvas.width, canvas.height);
      
      // 设置文字样式
      ctx.fillStyle = '#336655';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      // 计算文字区域（留出边框和边距）
      const borderWidth = 8 * scale; // 边框宽度
      const padding = 16 * scale; // 内边距
      const textAreaWidth = canvas.width - (borderWidth + padding) * 2;
      const textAreaHeight = canvas.height - (borderWidth + padding) * 2;
      
      // 绘制中文文字
      ctx.font = `${18 * scale}px Arial, sans-serif`;
      const chineseText = selectedCard.message.chinese;
      
      // 检查文字是否超出边界，如果超出则换行
      const maxWidth = textAreaWidth;
      const lines = [];
      let currentLine = '';
      
      for (let i = 0; i < chineseText.length; i++) {
        const testLine = currentLine + chineseText[i];
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && currentLine !== '') {
          lines.push(currentLine);
          currentLine = chineseText[i];
        } else {
          currentLine = testLine;
        }
      }
      if (currentLine) {
        lines.push(currentLine);
      }
      
      // 绘制中文文字（支持多行）
      const chineseY = canvas.height / 2 - 30 * scale; // 从 -15 改为 -30，增加间距
      lines.forEach((line, index) => {
        ctx.fillText(line, canvas.width / 2, chineseY + index * 25 * scale);
      });
      
      // 绘制英文文字
      ctx.font = `${16 * scale}px Arial, sans-serif`;
      const englishText = selectedCard.message.english;
      
      // 检查英文文字是否超出边界
      const englishLines = [];
      let englishCurrentLine = '';
      const words = englishText.split(' ');
      
      for (let i = 0; i < words.length; i++) {
        const testLine = englishCurrentLine + (englishCurrentLine ? ' ' : '') + words[i];
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && englishCurrentLine !== '') {
          englishLines.push(englishCurrentLine);
          englishCurrentLine = words[i];
        } else {
          englishCurrentLine = testLine;
        }
      }
      if (englishCurrentLine) {
        englishLines.push(englishCurrentLine);
      }
      
      // 绘制英文文字（支持多行）
      const englishY = canvas.height / 2 + 30 * scale; // 从 +15 改为 +30，增加间距
      englishLines.forEach((line, index) => {
        ctx.fillText(line, canvas.width / 2, englishY + index * 20 * scale);
      });
      
      // 创建下载链接
      const link = document.createElement('a');
      link.download = `塔罗牌-${selectedCard.typeName}-${new Date().toISOString().slice(0, 10)}.jpg`;
      link.href = canvas.toDataURL('image/jpeg', 0.9);
      
      // 触发下载
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
    } catch (error) {
      console.error('保存图片失败:', error);
      alert('保存图片失败，请重试');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-4xl h-full justify-center p-[0px]">
      {/* Question Display - 与DeckScreen保持一致的样式 */}
      <div className="text-center max-w-[498px]">
        <h3 className="text-[rgba(51,102,85,1)] mb-[54px] text-[40px] font-chinese z-50 relative text-center break-words leading-relaxed font-chinese font-normal font-bold px-[5px] py-[0px] mt-[0px] mr-[0px] ml-[0px]">{question}</h3>
      </div>

      {/* Revealed Card - 使用与DeckScreen相同的布局结构 */}
      <div className="scale-75 p-[0px] mt-[-109px] mr-[0px] mb-[0px] ml-[0px]">
        <div className="flex items-center justify-center">
          <div 
            ref={cardRef}
            className="relative card-container"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleCardClick}
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg) translateZ(${mousePosition.z}px) scale(${isHovered ? 1.15 : 1})`,
              transformStyle: 'preserve-3d',
              transition: isHovered ? 'none' : 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
              filter: isHovered ? 'drop-shadow(0 20px 40px rgba(51, 102, 85, 0.3))' : 'drop-shadow(0 8px 16px rgba(51, 102, 85, 0.15))',
              cursor: isDownloading ? 'wait' : 'pointer',
            }}
          >
            {/* 卡牌图片本身作为卡牌 */}
            <img 
              src={new URL(`../assets/CardFront/${selectedCard.image}`, import.meta.url).href}
              alt={selectedCard.typeName}
              className="block"
              style={{
                transform: `translateZ(${10 + mousePosition.z * 0.5}px)`,
                transition: 'filter 0.3s ease',
                filter: isHovered ? 'brightness(1.1) contrast(1.05)' : 'brightness(1)',
              }}
            />
            
            {/* 水光扫过效果 */}
            <div 
              className="absolute inset-0 pointer-events-none overflow-hidden"
              style={{
                transform: `translateZ(${30 + mousePosition.z * 0.8}px)`,
                opacity: isHovered ? 1 : 0,
                transition: 'opacity 0.3s ease',
              }}
            >
              <div 
                className="water-shimmer"
                style={{
                  position: 'absolute',
                  top: '-50%',
                  left: '-50%',
                  width: '200%',
                  height: '200%',
                  background: 'linear-gradient(135deg, transparent 30%, rgba(255, 255, 255, 0.4) 50%, transparent 70%)',
                  transform: isHovered ? 'translateX(100%) translateY(100%)' : 'translateX(-100%) translateY(-100%)',
                  transition: 'transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
                  animation: isHovered ? 'shimmer 1.5s ease-in-out infinite' : 'none',
                }}
              />
            </div>
            
            {/* 文字内容 - 在卡牌中居中，最上层 */}
            <div 
              className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center"
              style={{
                transform: `translateZ(${40 + mousePosition.z}px)`,
                transition: 'filter 0.3s ease',
                filter: isHovered ? 'drop-shadow(0 2px 8px rgba(51, 102, 85, 0.3))' : 'none',
              }}
            >
              {/* 卡牌内容 - 两行显示 */}
              <div className="px-2">
                {/* 第一行：中文句子 */}
                <p className="text-[#336655] font-chinese font-medium leading-relaxed mb-1" style={{ fontSize: '18px' }}>
                  {selectedCard.message.chinese}
                </p>
                
                {/* 第二行：英文翻译 */}
                <p className="text-[#336655] font-chinese font-medium leading-relaxed" style={{ fontSize: '16px' }}>
                  {selectedCard.message.english}
                </p>
              </div>
            </div>

            {/* 边框光效 */}
            <div 
              className="absolute inset-0 pointer-events-none rounded-lg"
              style={{
                transform: `translateZ(${20 + mousePosition.z * 0.6}px)`,
                opacity: isHovered ? 1 : 0,
                transition: 'opacity 0.3s ease',
                background: 'linear-gradient(45deg, rgba(51, 102, 85, 0.3), rgba(255, 255, 255, 0.2), rgba(51, 102, 85, 0.3))',
                borderRadius: '8px',
                border: '1px solid rgba(51, 102, 85, 0.4)',
                boxShadow: 'inset 0 0 20px rgba(51, 102, 85, 0.2)',
              }}
            />

            {/* 下载提示 */}
            {isDownloading && (
              <div 
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white font-chinese rounded-lg"
                style={{ transform: 'translateZ(50px)' }}
              >
                <div className="text-center">
                  <div className="animate-spin w-8 h-8 border-2 border-white border-t-transparent rounded-full mx-auto mb-2"></div>
                  <p>正在保存图片...</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* New Question Button */}
      <button
        onClick={onNewQuestion}
        className="bg-[#336655] hover:bg-[#2d5a49] transition-colors rounded-[4px] flex items-center justify-center gap-2 py-2 px-4"
      >
        <div className="relative shrink-0 size-3">
          <img className="block max-w-none size-full" src={imgOthersThinkingProblem} alt="思考问题图标" />
        </div>
        <div className="font-chinese font-extrabold text-[#fdfefd] text-[16px] whitespace-nowrap">
          提出新问题
        </div>
      </button>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
          50% {
            transform: translateX(0%) translateY(0%) rotate(45deg);
          }
          100% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .card-container {
          animation: float 4s ease-in-out infinite;
        }

        .card-container:hover {
          animation-play-state: paused;
        }

        .water-shimmer {
          mask: linear-gradient(135deg, transparent 0%, black 20%, black 80%, transparent 100%);
          -webkit-mask: linear-gradient(135deg, transparent 0%, black 20%, black 80%, transparent 100%);
        }
      `}</style>
    </div>
  );
}