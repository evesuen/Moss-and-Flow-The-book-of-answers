import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Frame455 } from './Frame455';
import Card1Image from '../assets/3b1cb00660a9c4211c229e71941d8026292b476e.png';
import { cardData } from './cardData';

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

  const handleCardClick = (cardIndex: number) => {
    if (onCardSelect) {
      onCardSelect(cardIndex);
    }
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
              {cardData[selectedCardIndex].title}
            </h3>
            <p className="font-chinese font-medium text-[#39393e] text-[11px] leading-relaxed px-[24px] py-[0px]">
              {cardData[selectedCardIndex].meaning}
            </p>
            <div className="flex flex-wrap gap-1 justify-center mt-2">
              {cardData[selectedCardIndex].keywords.map((keyword, idx) => (
                <span 
                  key={idx} 
                  className="font-chinese text-[9px] text-[#39393e] bg-[#e4f8dd] px-1.5 py-0.5 rounded-full px-[17px] py-[2px]"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none" />
      </div>
    );
  }

  // Otherwise show the full deck
  return (
    <div className="box-border content-stretch flex items-center justify-start pl-0 pr-[190px] py-0 relative shrink-0 rounded-[4px]">
      {[...Array(11).keys()].map((_, i) => (
        <motion.div
          key={i}
          className={`relative h-[336px] mr-[-190px] overflow-clip rounded-radius-card shrink-0 w-[252px] cursor-pointer ${
            selectedCardIndex === i ? 'z-20' : 'z-10'
          }`}
          style={{}}
          onMouseEnter={() => setHoveredCard(i)}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => handleCardClick(i)}
          animate={{
            scale: hoveredCard === i ? 1.02 : 1,
            y: hoveredCard === i ? -8 : 0,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
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
                  src={Card1Image}
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
                  <h3 className="text-primary mb-3 font-chinese font-bold text-[16px]">{cardData[i].title}</h3>
                  <p className="text-foreground leading-relaxed font-chinese font-medium text-[12px]">{cardData[i].meaning}</p>
                  <div className="flex flex-wrap gap-1 justify-center mt-4">
                    {cardData[i].keywords.map((keyword, idx) => (
                      <span 
                        key={idx} 
                        className="font-chinese text-[9px] text-muted-foreground bg-accent px-1.5 py-0.5 rounded-full"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}