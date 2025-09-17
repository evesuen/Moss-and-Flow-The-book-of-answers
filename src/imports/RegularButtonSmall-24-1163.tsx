import { imgOthersThinkingProblem } from "./svg-g3kyt";

function OthersThinkingProblem() {
  return (
    <div className="relative shrink-0 size-4" data-name="Others/thinking-problem">
      <img className="block max-w-none size-full" src={imgOthersThinkingProblem} />
    </div>
  );
}

function TextPadding() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-0.5 py-0 relative shrink-0" data-name="Text padding">
      <div className="font-['Playfair:ExtraBold',_sans-serif] font-extrabold leading-[0] relative shrink-0 text-[#fdfefd] text-[20px] text-nowrap" style={{ fontVariationSettings: "'opsz' 12, 'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">Ask a new question</p>
      </div>
    </div>
  );
}

export default function RegularButtonSmall() {
  return (
    <div className="bg-[#336655] relative rounded-[4px] size-full" data-name="RegularButton/Small">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-3 items-center justify-center p-[12px] relative size-full">
          <OthersThinkingProblem />
          <TextPadding />
        </div>
      </div>
    </div>
  );
}