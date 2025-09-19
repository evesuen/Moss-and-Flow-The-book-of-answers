import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TopBanner } from './components/TopBanner';
import { Navigation } from './components/Navigation';
import { InputScreen } from './components/InputScreen';
import { DeckScreen } from './components/DeckScreen';
import { RevealScreen } from './components/RevealScreen';
import backgroundImage from 'figma:asset/9c7488397fd59327c7d7f4c3ad2fd946c136d6a7.png';
const welcomeBackgroundVideo = new URL('./assets/欢迎页背景.mp4', import.meta.url).href;

export type AppState = 'welcome' | 'input' | 'deck' | 'reveal';

export default function App() {
  const [currentState, setCurrentState] = useState<AppState>('welcome');
  const [question, setQuestion] = useState('');
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);
  const [musicEnabled, setMusicEnabled] = useState(false);
  const [cardGuidance, setCardGuidance] = useState('');

  // 3秒后自动跳转到输入页面
  useEffect(() => {
    if (currentState === 'welcome') {
      const timer = setTimeout(() => {
        setCurrentState('input');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentState]);

  const handleQuestionSubmit = (submittedQuestion: string) => {
    setQuestion(submittedQuestion);
    setCurrentState('deck');
  };

  const handleCardSelect = (cardIndex: number) => {
    setSelectedCardIndex(cardIndex);
    setCurrentState('reveal');
  };

  const handleNewQuestion = () => {
    setQuestion('');
    setSelectedCardIndex(null);
    setCardGuidance('');
    setCurrentState('input');
  };

  // 欢迎页组件
  const WelcomeScreen = () => (
    <div className="relative h-full w-full">
      {/* 视频背景 */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          zIndex: -1
        }}
      >
        <source src={welcomeBackgroundVideo} type="video/mp4" />
      </video>
      
      {/* 内容层 */}
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center h-full w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
      {/* 三张浅绿色卡片 */}
      <div className="flex items-center gap-[40px]">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="relative h-[336px] overflow-clip rounded-radius-card shrink-0 w-[252px]"
            style={{
              perspective: '1000px',
              transformStyle: 'preserve-3d'
            }}
            initial={{ 
              opacity: 0, 
              x: -100, 
              rotateY: -90,
              scale: 0.8
            }}
            animate={{ 
              opacity: 1, 
              x: 0, 
              rotateY: 0,
              scale: 1
            }}
            transition={{ 
              delay: index * 0.3,
              duration: 0.8,
              ease: "easeOut"
            }}
          >
            {/* 浅绿色卡片背景 */}
            <div className="absolute inset-0 bg-[#a8d5ba] rounded-radius-card flex items-center justify-center">
              {/* 卡片符号 */}
              <div className="text-[#336655] text-[48px] font-bold">
                {index === 0 ? '—' : index === 1 ? '—' : '+'}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 标题文字 */}
      <motion.div
        className="text-center mt-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <h1 className="font-['Playfair_Display',serif] font-bold text-[#FCFEFB] text-[36px] mb-2">
          塔罗牌占卜
        </h1>
        <p className="font-['Playfair_Display',serif] text-[#FCFEFB] text-[16px]">
          探索内心的智慧与指引
        </p>
      </motion.div>
    </motion.div>
    </div>
  );

  return (
    <div 
      className="h-screen flex flex-col bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden"
      style={{
        backgroundImage: currentState === 'welcome' 
          ? 'none' 
          : `url(${backgroundImage})`,
      }}
    >
      {currentState !== 'welcome' && <TopBanner />}
      {currentState !== 'welcome' && <Navigation musicEnabled={musicEnabled} setMusicEnabled={setMusicEnabled} />}
      
      <main className="flex-1 flex flex-col items-center justify-center px-4 overflow-hidden">
        <AnimatePresence mode="wait">
          {currentState === 'welcome' && (
            <WelcomeScreen key="welcome" />
          )}
          
          {currentState === 'input' && (
            <InputScreen onQuestionSubmit={handleQuestionSubmit} />
          )}
          
          {currentState === 'deck' && (
            <DeckScreen 
              question={question} 
              onCardSelect={handleCardSelect}
            />
          )}
          
          {currentState === 'reveal' && selectedCardIndex !== null && (
            <RevealScreen 
              question={question}
              guidance={cardGuidance}
              onNewQuestion={handleNewQuestion}
              selectedCardIndex={selectedCardIndex}
            />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}