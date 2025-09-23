import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Frame455 } from './Frame455';
// import CardBackImage from '../assets/CardBack.png';
import { cardTypes, DrawnCard } from './cardData';
// import pageFlipSound from '../assets/audio/page-flip.mp3';

interface AnimatedCardDeckProps {
  onCardSelect?: (cardIndex: number) => void;
  isRevealing?: boolean;
  selectedCardIndex?: number | null;
}

export function AnimatedCardDeck({ 
  onCardSelect, 
  isRevealing = false, 
  selectedCardIndex = null
}: AnimatedCardDeckProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioInitialized, setAudioInitialized] = useState(false);

  // 初始化音效
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(new URL('../assets/audio/page-flip.mp3', import.meta.url).href);
      audioRef.current.volume = 0.4;
      audioRef.current.preload = 'auto';
      setAudioInitialized(true);
      console.log('音效初始化成功');
    }
  }, []);

  // 播放hover音效
  const playHoverSound = async () => {
    if (audioRef.current && audioInitialized) {
      try {
        audioRef.current.currentTime = 0;
        await audioRef.current.play();
        console.log('音效播放成功');
      } catch (error) {
        console.log('音效播放失败:', error);
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

  const handleCardClick = (cardIndex: number) => {
    if (onCardSelect) {
      onCardSelect(cardIndex);
    }
  };

  // 处理hover进入事件
  const handleMouseEnter = (cardIndex: number) => {
    setHoveredCard(cardIndex);
    console.log('Hover到卡牌:', cardIndex);
    playHoverSound();
  };

  // If revealing and a card is selected, show single card
  if (isRevealing && selectedCardIndex !== null) {
    return (
      <div className="bg-[#336655] h-[384px] overflow-clip rounded-[5.691px] w-[288px] mx-[0px] my-[-4px]">
        <div className="absolute bg-[#FDFEFD] h-[336px] rounded-[11.381px] translate-x-[-50%] translate-y-[-50%] w-[252px]" style={{ top: "calc(50% - 1.004px)", left: "calc(50% - 0.253px)" }} />
        <Frame455 />
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 w-full">
          <div className="space-y-3">
            <h3 className="font-chinese font-extrabold text-[#39393e] text-[36px]">
              {cardTypes[selectedCardIndex - 1]?.name || '未知'}
            </h3>
            <p className="font-chinese font-medium text-[#39393e] text-[11px] leading-relaxed px-[24px] py-[0px]">
              显示选中的卡牌内容
            </p>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none" />
      </div>
    );
  }

  // Otherwise show the full deck with entrance animation
  return (
    <div className="box-border content-stretch flex items-center justify-start pl-0 pr-[190px] py-0 relative shrink-0 rounded-[4px]">
      {[...Array(11).keys()].map((_, i) => (
        <motion.div
          key={i}
          className={`relative h-[336px] mr-[-190px] overflow-clip rounded-radius-card shrink-0 w-[252px] cursor-pointer ${
            selectedCardIndex === i ? 'z-20' : 'z-10'
          }`}
          style={{}}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => handleCardClick(i)}
          // 入场动画：从左到右逐一展开
          initial={{ 
            x: -300,  // 从左侧开始
            opacity: 0,
            scale: 0.8
          }}
          animate={{ 
            x: 0,     // 移动到最终位置
            opacity: 1,
            scale: 1,
            // 保留hover效果
            y: hoveredCard === i ? -8 : 0
          }}
          transition={{ 
            // 入场动画设置
            x: { 
              duration: 0.6, 
              ease: [0.25, 0.46, 0.45, 0.94], // 平滑的缓动曲线
              delay: i * 0.08  // 每张卡牌延迟0.08秒，形成从左到右的效果
            },
            opacity: { 
              duration: 0.4, 
              delay: i * 0.08 
            },
            scale: { 
              duration: 0.6, 
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: i * 0.08 
            },
            // hover效果的过渡
            y: { duration: 0.2, ease: "easeOut" }
          }}
        >
          {/* Card Back */}
          <AnimatePresence>
            {(!isRevealing || selectedCardIndex !== i) && (
              <motion.div
                className="absolute inset-0 rounded-radius-card overflow-hidden"
                initial={{ rotateY: 0 }}
                exit={{ rotateY: 90 }}
                transition={{ duration: 0.3 }}
                style={{ 
                  backfaceVisibility: 'hidden',
                  filter: hoveredCard === i ? 'brightness(1.1)' : 'brightness(1)'
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
              </motion.div>
            )}
          </AnimatePresence>

          {/* Card Front */}
          <AnimatePresence>
            {isRevealing && selectedCardIndex === i && (
              <motion.div
                className="absolute inset-0 bg-background rounded-radius-card p-6 flex flex-col justify-center items-center text-center"
                initial={{ rotateY: -90 }}
                animate={{ rotateY: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="space-y-3">
                  <h3 className="text-primary mb-3 font-chinese font-bold text-[16px]">{cardTypes[i % cardTypes.length].name}</h3>
                  <p className="text-foreground leading-relaxed font-chinese font-medium text-[12px]">卡牌内容</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}