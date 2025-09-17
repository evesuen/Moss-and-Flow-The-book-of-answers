import { Button } from './ui/button';
import { AnimatedCardDeck } from './AnimatedCardDeck';
import { imgOthersThinkingProblem } from "../imports/svg-g3kyt";

interface RevealScreenProps {
  question: string;
  guidance: string;
  onNewQuestion: () => void;
  selectedCardIndex: number;
}

export function RevealScreen({ question, guidance, onNewQuestion, selectedCardIndex }: RevealScreenProps) {
  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-4xl h-full justify-center mx-[0px] my-[-48px]">
      {/* Question Display */}
      <div className="text-center max-w-[498px]">
        <h3 className="text-[rgba(51,102,85,1)] font-['Playfair_Display',serif] font-bold text-[24px] font-[Playfair]">{question}</h3>
      </div>

      {/* Revealed Card - Show the animated deck with the selected card revealed */}
      <div className="relative scale-75">
        <AnimatedCardDeck 
          isRevealing={true}
          selectedCardIndex={selectedCardIndex}
        />
      </div>

      {/* New Question Button */}
      <button
        onClick={onNewQuestion}
        className="bg-[#336655] hover:bg-[#2d5a49] transition-colors rounded-[4px] flex items-center justify-center gap-2 py-2 px-4"
      >
        <div className="relative shrink-0 size-3">
          <img className="block max-w-none size-full" src={imgOthersThinkingProblem} alt="思考问题图标" />
        </div>
        <div className="font-['Playfair_Display',serif] font-extrabold text-[#fdfefd] text-[16px] whitespace-nowrap">
          提出新问题
        </div>
      </button>
    </div>
  );
}