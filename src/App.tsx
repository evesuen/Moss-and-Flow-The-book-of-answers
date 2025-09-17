import { useState } from 'react';
import { TopBanner } from './components/TopBanner';
import { Navigation } from './components/Navigation';
import { InputScreen } from './components/InputScreen';
import { DeckScreen } from './components/DeckScreen';
import { RevealScreen } from './components/RevealScreen';
import backgroundImage from 'figma:asset/9c7488397fd59327c7d7f4c3ad2fd946c136d6a7.png';

export type AppState = 'input' | 'deck' | 'reveal';

export default function App() {
  const [currentState, setCurrentState] = useState<AppState>('input');
  const [question, setQuestion] = useState('');
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);
  const [musicEnabled, setMusicEnabled] = useState(false);
  const [cardGuidance, setCardGuidance] = useState('');

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

  return (
    <div 
      className="h-screen flex flex-col bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <TopBanner />
      <Navigation musicEnabled={musicEnabled} setMusicEnabled={setMusicEnabled} />
      
      <main className="flex-1 flex flex-col items-center justify-center px-4 overflow-hidden">
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
      </main>
    </div>
  );
}