import { imgOthersMagic, imgOthersCardTwo, imgArrowsSend } from "./svg-1ei4v";

function OthersMagic() {
  return (
    <div className="relative shrink-0 size-4" data-name="Others/magic">
      <img className="block max-w-none size-full" src={imgOthersMagic} />
    </div>
  );
}

function TextPadding() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-0.5 py-0 relative shrink-0" data-name="Text padding">
      <div className="font-['Playfair:ExtraBold',_sans-serif] font-extrabold leading-[0] relative shrink-0 text-[#fdfefd] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 12, 'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">Random Question</p>
      </div>
    </div>
  );
}

function RegularButtonSmall() {
  return (
    <div className="bg-[#336655] box-border content-stretch flex gap-1 h-8 items-center justify-center px-3 py-2 relative rounded-[4px] shrink-0" data-name="RegularButton/Small">
      <OthersMagic />
      <TextPadding />
    </div>
  );
}

function OthersCardTwo() {
  return (
    <div className="relative shrink-0 size-4" data-name="Others/card-two">
      <img className="block max-w-none size-full" src={imgOthersCardTwo} />
    </div>
  );
}

function TextPadding1() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-0.5 py-0 relative shrink-0" data-name="Text padding">
      <div className="font-['Playfair:ExtraBold',_sans-serif] font-extrabold leading-[0] relative shrink-0 text-[#fdfefd] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 12, 'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">Card of today</p>
      </div>
    </div>
  );
}

function RegularButtonSmall1() {
  return (
    <div className="bg-[#336655] box-border content-stretch flex gap-1 h-8 items-center justify-center px-3 py-2 relative rounded-[4px] shrink-0" data-name="RegularButton/Small">
      <OthersCardTwo />
      <TextPadding1 />
    </div>
  );
}

function Frame519() {
  return (
    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0">
      <RegularButtonSmall />
      <RegularButtonSmall1 />
    </div>
  );
}

function ArrowsSend() {
  return (
    <div className="relative shrink-0 size-[18.286px]" data-name="Arrows/send">
      <img className="block max-w-none size-full" src={imgArrowsSend} />
    </div>
  );
}

function RegularButtonSmall2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center p-[7px] relative rounded-[113.143px] shrink-0 size-10" data-name="RegularButton/Small">
      <ArrowsSend />
    </div>
  );
}

function Frame520() {
  return (
    <div className="basis-0 content-stretch flex gap-2.5 grow items-center justify-end min-h-px min-w-px relative shrink-0">
      <RegularButtonSmall2 />
    </div>
  );
}

function Frame518() {
  return (
    <div className="content-stretch flex gap-2 items-end justify-center relative shrink-0 w-full">
      <Frame519 />
      <Frame520 />
    </div>
  );
}

export default function ChatInput() {
  return (
    <div className="bg-[#fdfefd] relative rounded-[8px] size-full" data-name="ChatInput">
      <div aria-hidden="true" className="absolute border border-[#d1d1d4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_7.3px_2px_rgba(67,137,114,0.2)]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-[24px] relative size-full">
          <div className="font-['Playfair:Light',_sans-serif] font-light h-[68px] leading-[0] relative shrink-0 text-[#bfbfc3] text-[20px] w-full" style={{ fontVariationSettings: "'opsz' 12, 'wdth' 100" }}>
            <p className="leading-[normal]">{`What's on your mind?`}</p>
          </div>
          <Frame518 />
        </div>
      </div>
    </div>
  );
}