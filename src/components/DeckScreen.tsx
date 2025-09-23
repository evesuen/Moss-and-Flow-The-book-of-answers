import { ThreeCardSelection } from './ThreeCardSelection';
import { DrawnCard } from './cardData';

interface DeckScreenProps {
  question: string;
  onCardSelect: (card: DrawnCard) => void;
}

export function DeckScreen({ question, onCardSelect }: DeckScreenProps) {
  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-4xl h-full justify-center p-[0px]">
      {/* Question Display */}
      <div className="text-center max-w-[498px]">
        <h3 className="text-[rgba(51,102,85,1)] mb-[54px] text-[40px] font-chinese z-50 relative text-center break-words leading-relaxed font-chinese font-normal font-bold px-[5px] py-[0px] mt-[0px] mr-[0px] ml-[0px]">{question}</h3>
        <h3 className="text-[rgba(51,102,85,1)] text-center !text-[16px] font-chinese font-medium font-chinese px-[0px] py-[-5px] mx-[0px] my-[-52px]">选择一张牌。跟随您的直觉。</h3>
      </div>

      {/* Three Cards */}
      <div className="scale-75 p-[0px] mt-[-109px] mr-[0px] mb-[0px] ml-[0px]">
        <ThreeCardSelection onCardSelect={onCardSelect} />
      </div>
    </div>
  );
}