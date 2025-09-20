import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TopBanner } from './components/TopBanner';
import { Navigation } from './components/Navigation';
import { InputScreen } from './components/InputScreen';
import { DeckScreen } from './components/DeckScreen';
import { RevealScreen } from './components/RevealScreen';
import CircularStartButton from './components/ui/circular-start-button';
import { MusicToggle } from './components/MusicToggle';
import backgroundImage from 'figma:asset/9c7488397fd59327c7d7f4c3ad2fd946c136d6a7.png';
import './styles/anti-flash.css';
import AiQing from './assets/audio/草地音乐.mp3';

const welcomeBackgroundVideo = new URL('./assets/欢迎页背景.mp4', import.meta.url).href;
const welcomeLogo = new URL('./assets/welcomepage_Logo_White.png', import.meta.url).href;
const mossImage = new URL('./assets/苔.png', import.meta.url).href;
const lichenImage = new URL('./assets/藓.png', import.meta.url).href;
const springImage = new URL('./assets/泉.png', import.meta.url).href;
const waterImage = new URL('./assets/水.png', import.meta.url).href;

export type AppState = 'welcome' | 'input' | 'deck' | 'reveal';

// 方案1：将 WelcomeScreen 移出 App 组件
const WelcomeScreen = ({ 
  welcomeLogo, 
  showCornerImages, 
  mossImage, 
  lichenImage, 
  springImage, 
  waterImage,
  handleStartButtonToggle
}: {
  welcomeLogo: string;
  showCornerImages: boolean;
  mossImage: string;
  lichenImage: string;
  springImage: string;
  waterImage: string;
  handleStartButtonToggle: (isPressed: boolean) => void;
}) => (
  <div className="relative h-full w-full">
    {/* 视频背景 */}
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        objectFit: 'cover',
        zIndex: 1
      }}
    >
      <source src={new URL('./assets/欢迎页背景.mp4', import.meta.url).href} type="video/mp4" />
    </video>
    
    {/* Logo和文字容器 */}
    <div className="fixed inset-0 flex flex-col items-center justify-center" style={{ zIndex: 10 }}>
      <motion.img
        key="brandLogo" // 稳定的 key
        src={welcomeLogo}
        alt="MOSS & FLOW"
        className="w-auto h-auto mb-8"
        style={{ maxWidth: '120px', width: '120px', height: 'auto' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ opacity: { duration: 0.4, ease: "easeIn" } }}
      />
      
      {/* 文字和按钮 */}
      <motion.div
        key="mainContent" // 稳定的 key
        style={{ 
          marginTop: '24px',
          textAlign: 'center',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '32px'
        }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          opacity: { duration: 0.4, ease: "easeIn" },
          y: { duration: 0.4, ease: "easeIn" }
        }}
      >
        {/* 文字内容 */}
        <div>
          <div style={{ 
            fontSize: '18px', 
            marginBottom: '4px', 
            fontWeight: '300', 
            fontFamily: 'system-ui, -apple-system, sans-serif' 
          }}>
            在静谧里，你会听见回应
          </div>
          <div style={{ 
            fontSize: '14px', 
            marginBottom: '60px', 
            opacity: 0.8, 
            fontWeight: '300', 
            fontFamily: '"Playfair Display", serif' 
          }}>
            In stillness, the answer will come
          </div>
        </div>
        
        {/* 启动按钮 */}
        <motion.div
          key="startButton" // 稳定的 key
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            opacity: { duration: 0.4, ease: "easeIn", delay: 0.3 },
            scale: { duration: 0.4, ease: "easeIn", delay: 0.3 }
          }}
        >
          <CircularStartButton
            onToggle={handleStartButtonToggle}
            ariaLabel="Start the tarot card experience"
          />
        </motion.div>
      </motion.div>
    </div>

    {/* 四个角落的图片 */}
    <img src={mossImage} alt="苔" className="corner-image corner-tl" style={{ opacity: showCornerImages ? 1 : 0, transition: 'opacity 0.8s ease-in-out' }} />
    <img src={lichenImage} alt="藓" className="corner-image corner-bl" style={{ opacity: showCornerImages ? 1 : 0, transition: 'opacity 0.8s ease-in-out' }} />
    <img src={springImage} alt="泉" className="corner-image corner-tr" style={{ opacity: showCornerImages ? 1 : 0, transition: 'opacity 0.8s ease-in-out' }} />
    <img src={waterImage} alt="水" className="corner-image corner-br" style={{ opacity: showCornerImages ? 1 : 0, transition: 'opacity 0.8s ease-in-out' }} />
  </div>
);

export default function App() {
  const [currentState, setCurrentState] = useState<AppState>('welcome');
  const [question, setQuestion] = useState('');
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);
  const [musicEnabled, setMusicEnabled] = useState(true); // 默认启用音乐
  const [cardGuidance, setCardGuidance] = useState('');
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [showCornerImages, setShowCornerImages] = useState(false);
  const [imagesReady, setImagesReady] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);
  
  // 欢迎页音乐播放器
  const welcomeAudioRef = useRef<HTMLAudioElement | null>(null);

  // 初始化欢迎页音乐播放器
  useEffect(() => {
    if (!welcomeAudioRef.current) {
      welcomeAudioRef.current = new Audio(AiQing);
      welcomeAudioRef.current.loop = true;
      welcomeAudioRef.current.volume = 0.5;
      welcomeAudioRef.current.preload = 'auto';
    }
  }, []);

  // 当进入欢迎页时自动播放音乐
  useEffect(() => {
    if (currentState === 'welcome' && welcomeAudioRef.current && musicEnabled) {
      const playMusic = async () => {
        try {
          await welcomeAudioRef.current?.play();
          console.log('欢迎页音乐开始播放');
        } catch (error) {
          console.log('欢迎页音乐播放被阻止:', error);
        }
      };
      playMusic();
    }
  }, [currentState, musicEnabled]);

  // 当离开欢迎页时，停止欢迎页音乐
  useEffect(() => {
    if (currentState !== 'welcome' && welcomeAudioRef.current) {
      welcomeAudioRef.current.pause();
      welcomeAudioRef.current.currentTime = 0;
    }
  }, [currentState]);

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

  // 预加载和解码所有角落图片
  useEffect(() => {
    const imageUrls = [mossImage, lichenImage, springImage, waterImage];
    
    const preloadImages = imageUrls.map(src => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => {
          // 使用 decode() 方法确保图片完全解码
          if (img.decode) {
            img.decode().then(() => resolve()).catch(() => resolve());
          } else {
            resolve();
          }
        };
        img.onerror = () => resolve(); // 即使加载失败也继续
        img.src = src;
      });
    });

    Promise.all(preloadImages).then(() => {
      setImagesReady(true);
    });
  }, []);

  // 1秒后显示四个角落的图片（只有在图片准备好之后）
  useEffect(() => {
    if (currentState === 'welcome') {
      // 中间内容立即显示
      setShowMainContent(true);
      
      // 角落图片在图片准备好后延迟显示
      if (imagesReady) {
        const timer = setTimeout(() => {
          setShowCornerImages(true);
        }, 1000);
        return () => clearTimeout(timer);
      }
    } else {
      // 离开欢迎页时重置状态
      setShowMainContent(false);
      setShowCornerImages(false);
    }
  }, [currentState, imagesReady]);

  // 移除自动跳转逻辑，改为用户点击按钮后跳转

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

  // 处理启动按钮点击
  const handleStartButtonToggle = (isPressed: boolean) => {
    if (isPressed) {
      setCurrentState('input');
    }
  };

  // 在组件外部定义 OptimizedCornerImage，避免每次渲染都重新创建
  const OptimizedCornerImage = React.memo(({ src, alt, position }: { 
    src: string, 
    alt: string, 
    position: 'tl' | 'tr' | 'bl' | 'br' 
  }) => (
    <img
      src={src}
      alt={alt}
      className={`corner-image corner-${position} ${showCornerImages ? 'show' : ''}`}
    />
  ));

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
            <WelcomeScreen 
              welcomeLogo={welcomeLogo}
              showCornerImages={showCornerImages}
              mossImage={mossImage}
              lichenImage={lichenImage}
              springImage={springImage}
              waterImage={waterImage}
              handleStartButtonToggle={handleStartButtonToggle}
            />
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
