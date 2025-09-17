import React, { useState } from 'react';
import { motion } from 'motion/react';
import { cardData } from './cardData';

const Card1Image = new URL('../assets/3b1cb00660a9c4211c229e71941d8026292b476e.png', import.meta.url).href;

interface ThreeCardSelectionProps {
  onCardSelect: (cardIndex: number) => void;
}

export function ThreeCardSelection({ onCardSelect }: ThreeCardSelectionProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [flippedCards, setFlippedCards] = useState<boolean[]>([false, false, false]);
  
  // Generate 3 random card indices from the 11-card deck
  const [selectedIndices] = useState(() => {
    const indices = Array.from({ length: 11 }, (_, i) => i);
    const shuffled = indices.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
  });

  const handleCardClick = (displayIndex: number) => {
    // Flip the card
    setFlippedCards(prev => {
      const newFlipped = [...prev];
      newFlipped[displayIndex] = !newFlipped[displayIndex];
      return newFlipped;
    });
    
    // If card is being flipped to show back, trigger selection
    if (!flippedCards[displayIndex]) {
      setTimeout(() => {
        onCardSelect(selectedIndices[displayIndex]);
      }, 2300); // Navigate after the 2s flip + brief front-face display
    }
  };

  return (
    <div className="flex items-center gap-[40px] mx-[0px] my-[113px]">
      {[0, 1, 2].map((displayIndex) => {
        const deckIndex = selectedIndices[displayIndex];
        const card = cardData[deckIndex];
        return (
          <motion.div
            key={displayIndex}
            className="relative h-[336px] overflow-clip rounded-radius-card shrink-0 w-[252px] cursor-pointer z-10"
            style={{
              perspective: '1000px',
              transformStyle: 'preserve-3d'
            }}
            onMouseEnter={() => setHoveredCard(displayIndex)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => handleCardClick(displayIndex)}
            animate={{
              scale: hoveredCard === displayIndex ? 1.02 : 1,
              y: hoveredCard === displayIndex ? -8 : 0,
              rotateY: flippedCards[displayIndex] ? 180 : 0,
            }}
            transition={{ 
              scale: { duration: 0.2, ease: "easeOut" },
              y: { duration: 0.2, ease: "easeOut" },
              rotateY: { duration: 2, ease: "easeInOut" }
            }}
          >
            {/* Back Face */}
            <div
              className="absolute inset-0 rounded-radius-card overflow-hidden"
              style={{ 
                backfaceVisibility: 'hidden',
                filter: hoveredCard === displayIndex ? 'brightness(1.1)' : 'brightness(1)'
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
            </div>

            {/* Front Face (shows after 180° flip) */}
            <div
              className="absolute inset-0 bg-[#FDFEFD] rounded-radius-card p-6 flex flex-col justify-center items-center text-center"
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)'
              }}
            >
              <div className="space-y-3">
                <h3 className="text-[#39393e] mb-3 font-['Playfair_Display',serif] font-bold text-[16px]">{card.title}</h3>
                <p className="text-[#39393e] leading-relaxed font-['Playfair_Display',serif] font-medium text-[12px]">{card.meaning}</p>
                <div className="flex flex-wrap gap-1 justify-center mt-2">
                  {card.keywords.map((keyword, idx) => (
                    <span 
                      key={idx} 
                      className="font-['Playfair_Display',serif] text-[9px] text-[#39393e] bg-[#e4f8dd] px-1.5 py-0.5 rounded-full px-[17px] py-[2px]"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}