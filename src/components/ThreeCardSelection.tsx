import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { drawThreeCards, DrawnCard } from './cardData';
// import CardBackImage from '../assets/CardBack.png';

interface ThreeCardSelectionProps {
  onCardSelect: (card: DrawnCard) => void;
}

export function ThreeCardSelection({ onCardSelect }: ThreeCardSelectionProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [flippedCards, setFlippedCards] = useState<boolean[]>([false, false, false]);
  const [clickedCard, setClickedCard] = useState<number | null>(null);
  const [ripple, setRipple] = useState<{x:number, y:number, id:number} | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioInitialized, setAudioInitialized] = useState(false);
  
  // 使用新的抽牌逻辑：从10种卡牌类型中随机选择3种不同类型，每种随机选择一个语句
  const [drawnCards] = useState<DrawnCard[]>(() => drawThreeCards());

  // 初始化音效
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(new URL('../assets/audio/page-flip.mp3', import.meta.url).href);
      audioRef.current.volume = 0.4;
      audioRef.current.preload = 'auto';
      setAudioInitialized(true);
      console.log('三张卡牌音效初始化成功');
    }
  }, []);

  // 播放hover音效
  const playHoverSound = async () => {
    if (audioRef.current && audioInitialized) {
      try {
        audioRef.current.currentTime = 0;
        await audioRef.current.play();
        console.log('三张卡牌音效播放成功');
      } catch (error) {
        console.log('三张卡牌音效播放失败:', error);
        // 如果播放失败，尝试重新加载
        try {
          await audioRef.current.load();
          await audioRef.current.play();
        } catch (retryError) {
          console.log('重试播放也失败:', retryError);
        }
      }
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>, displayIndex: number) => {
    // 记录点击坐标给水波纹
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    setRipple({ x: e.clientX - rect.left, y: e.clientY - rect.top, id: Date.now() });
    handleCardClick(displayIndex);
  };

  const handleCardClick = (displayIndex: number) => {
    // 设置点击状态
    setClickedCard(displayIndex);
    
    // 短暂延迟后开始翻转
    setTimeout(() => {
      setFlippedCards(prev => {
        const newFlipped = [...prev];
        newFlipped[displayIndex] = !newFlipped[displayIndex];
        return newFlipped;
      });
    }, 200);
    
    // 如果卡牌正在翻转到背面，触发选择
    if (!flippedCards[displayIndex]) {
      setTimeout(() => {
        onCardSelect(drawnCards[displayIndex]);
      }, 2000); // 减少延迟，因为翻转时间变短了
    }
  };

  return (
    <div className="flex items-center gap-[40px] mx-[0px] my-[113px]">
      {[0, 1, 2].map((displayIndex) => {
        const card = drawnCards[displayIndex];
        const isClicked = clickedCard === displayIndex;
        
        return (
          <motion.div
            key={displayIndex}
            className="relative h-[336px] overflow-clip rounded-radius-card shrink-0 w-[252px] cursor-pointer z-10"
            style={{
              color: '#FCFEFB',
              perspective: '1000px',
              transformStyle: 'preserve-3d'
            }}
            onMouseEnter={() => {
              setHoveredCard(displayIndex);
              playHoverSound();
            }}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={(e) => handleClick(e, displayIndex)}
            animate={{
              scale: isClicked ? 0.95 : (hoveredCard === displayIndex ? 1.02 : 1),
              y: isClicked ? 2 : (hoveredCard === displayIndex ? -8 : 0),
              rotateY: flippedCards[displayIndex] ? 360 : 0, // 2.5圈
            }}
            transition={{ 
              scale: { duration: 0.1, ease: "easeOut" },
              y: { duration: 0.1, ease: "easeOut" },
              rotateY: { 
                duration: 1.2, 
                ease: "easeInOut"
              }
            }}
          >
            {/* 移除光效，只保留阴影效果 */}
            {/* 水光扫过效果已移除 */}

            {/* 简化的水波纹：ripple */}
            {isClicked && ripple && (
              <motion.div
                key={ripple.id}
                className="absolute rounded-full pointer-events-none"
                style={{
                  left: ripple.x, top: ripple.y, width: 20, height: 20,
                  transform: 'translate(-50%,-50%)',
                  background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.2) 40%, rgba(255,255,255,0) 70%)',
                  border: '1px solid rgba(255,255,255,0.3)',
                }}
                initial={{ scale: 0, opacity: 0.9 }}
                animate={{ scale: 8, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            )}

            {/* Back Face */}
            <div
              className="absolute inset-0 rounded-radius-card overflow-hidden"
              style={{ 
                backfaceVisibility: 'hidden',
                filter: hoveredCard === displayIndex ? 'brightness(1.1)' : 'brightness(1)',
                boxShadow: isClicked 
                  ? '0 12px 24px rgba(51, 102, 85, 0.3)' 
                  : '0 8px 16px rgba(51, 102, 85, 0.15)',
              }}
            >
              <img 
                src={new URL('../assets/CardBack.png', import.meta.url).href}
                alt="塔罗牌背面"
                className="w-full h-full object-cover"
              />
              <div 
                className="absolute inset-0 pointer-events-none rounded-radius-card" 
              />
            </div>

            {/* Front Face (shows after 180° flip) */}
            <div
              className="absolute inset-0 bg-[#FDFEFD] rounded-radius-card p-4 flex flex-col justify-center items-center text-center"
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)'
              }}
            >
              <div className="space-y-4 flex flex-col items-center">
                {/* 卡牌类型图像 */}
                <div className="w-20 h-20 mb-2">
                  <img 
                    src={new URL(`../assets/CardFront/${card.image}`, import.meta.url).href}
                    alt={card.typeName}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* 卡牌类型名称 */}
                <h3 className="text-[#39393e] font-chinese font-bold text-[18px] mb-2">
                  {card.typeName}
                </h3>
                
                {/* 随机选择的语句 */}
                <p className="text-[#39393e] leading-relaxed font-chinese font-medium text-[13px] px-2">
                  {card.message.chinese}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}