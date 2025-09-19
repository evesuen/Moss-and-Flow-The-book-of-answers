import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TopBanner } from './components/TopBanner';
import { Navigation } from './components/Navigation';
import { InputScreen } from './components/InputScreen';
import { DeckScreen } from './components/DeckScreen';
import { RevealScreen } from './components/RevealScreen';
import backgroundImage from 'figma:asset/9c7488397fd59327c7d7f4c3ad2fd946c136d6a7.png';
const welcomeBackgroundVideo = new URL('./assets/欢迎页背景.mp4', import.meta.url).href;
const welcomeLogo = new URL('./assets/welcomepage_Logo_White.png', import.meta.url).href;
const mossImage = new URL('./assets/苔.png', import.meta.url).href;
const lichenImage = new URL('./assets/藓.png', import.meta.url).href;
const springImage = new URL('./assets/泉.png', import.meta.url).href;
const waterImage = new URL('./assets/水.png', import.meta.url).href;

export type AppState = 'welcome' | 'input' | 'deck' | 'reveal';

export default function App() {
  const [currentState, setCurrentState] = useState<AppState>('welcome');
  const [question, setQuestion] = useState('');
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);
  const [musicEnabled, setMusicEnabled] = useState(false);
  const [cardGuidance, setCardGuidance] = useState('');
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [showCornerImages, setShowCornerImages] = useState(false);

  // 检测用户的动效偏好设置
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // 1秒后显示四个角落的图片
  useEffect(() => {
    if (currentState === 'welcome') {
      const timer = setTimeout(() => {
        setShowCornerImages(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentState]);

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

  // 简单的角落图片组件
  const CornerImage = ({ src, alt, position }: { src: string, alt: string, position: string }) => {
    const getPositionStyle = (pos: string) => {
      switch(pos) {
        case 'top-4 left-4':
          return { top: '32px', left: '32px' };
        case 'bottom-4 left-4':
          return { bottom: '32px', left: '32px' };
        case 'top-4 right-4':
          return { top: '32px', right: '32px' };
        case 'bottom-4 right-4':
          return { bottom: '32px', right: '32px' };
        default:
          return { top: '32px', left: '32px' };
      }
    };

    return showCornerImages && (
      <img
        src={src}
        alt={alt}
        className="fixed"
        style={{
          width: '40px',
          height: '40px',
          zIndex: 15,
          ...getPositionStyle(position)
        }}
      />
    );
  };

  // 欢迎页组件 - 简化版本
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
      
      {/* Logo和文字容器 - 全屏居中 */}
      <div 
        className="fixed inset-0 flex flex-col items-center justify-center"
        style={{ zIndex: 10 }}
      >
        <motion.img
          id="brandLogo"
          src={welcomeLogo}
          alt="MOSS & FLOW"
          className="w-auto h-auto mb-8"
          style={{ 
            maxWidth: '120px',
            width: '120px',
            height: 'auto'
          }}
          initial={{ 
            opacity: 0 
          }}
          animate={{ 
            opacity: 1 
          }}
          transition={{
            opacity: {
              duration: 0.4,
              ease: "easeIn"
            }
          }}
        />
        
        {/* 文字内容 */}
        <motion.div
          className="text-center text-white"
          style={{ 
            marginTop: '24px',    // 增加顶部间距
          }}
          initial={{ 
            opacity: 0,
            y: 10
          }}
          animate={{ 
            opacity: 1,
            y: 0
          }}
          transition={{
            opacity: {
              duration: 0.4,
              ease: "easeIn"
            },
            y: {
              duration: 0.4,
              ease: "easeIn"
            }
          }}
        >
          <div className="text-lg mb-2 font-light">
            在静谧里，你会听见回应
          </div>
          <div className="text-sm opacity-80 font-light">
            In stillness, the answer will come
          </div>
        </motion.div>
      </div>

      {/* 四个角落的图片 */}
      <CornerImage src={mossImage} alt="苔" position="top-4 left-4" />
      <CornerImage src={lichenImage} alt="藓" position="bottom-4 left-4" />
      <CornerImage src={springImage} alt="泉" position="top-4 right-4" />
      <CornerImage src={waterImage} alt="水" position="bottom-4 right-4" />

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