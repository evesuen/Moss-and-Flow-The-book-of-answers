import { imgGroup4044, imgAskTheCards, imgIndicator, imgIndicator1, imgHandle, imgShape13, imgShape14, imgShape15, imgShape16, imgOthersThinkingProblem } from "./svg-n4oyd";

function Group4044() {
  return (
    <div className="absolute inset-[14.58%_8.33%_12.5%_8.33%]">
      <div className="absolute inset-[-5.71%_-5%]">
        <img className="block max-w-none size-full" src={imgGroup4044} />
      </div>
    </div>
  );
}

function CommunicateMessageEmoji() {
  return (
    <div className="overflow-clip relative shrink-0 size-[13px]" data-name="Communicate/message-emoji">
      <Group4044 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[22px] items-center justify-center relative shrink-0" data-name="Content">
      <CommunicateMessageEmoji />
      <div className="flex flex-col font-['Ubuntu:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white w-[299px]">
        <p className="leading-[normal]">New here? Type your question and click “Draw a Card.”</p>
      </div>
    </div>
  );
}

function InstructionBanner() {
  return (
    <div className="bg-[#336655] h-10 relative shrink-0 w-full" data-name="Instruction Banner">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-[22px] h-10 items-center justify-center px-[47px] py-0 relative w-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

function TopBanner() {
  return (
    <div className="content-stretch flex flex-col gap-2.5 items-start justify-start shrink-0 sticky top-0 w-full" data-name="Top Banner">
      <InstructionBanner />
    </div>
  );
}

function LogoContent() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[12.689px] h-[93.93px] items-start justify-start ml-[6.979px] mt-[6.619px] relative w-[73.298px]" data-name="Logo Content">
      <div className="font-['Playfair_Display:Regular',_'Noto_Sans_Math:Regular',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[4.614px] text-white uppercase" style={{ width: "min-content" }}>
        <p className="leading-[normal]">⟢</p>
      </div>
      <div className="h-[56.093px] relative shrink-0 w-[68.328px]" data-name="Ask the Cards">
        <img className="block max-w-none size-full" src={imgAskTheCards} />
      </div>
      <div className="font-['Playfair_Display:Regular',_'Noto_Sans_Math:Regular',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[4.614px] text-right text-white uppercase" style={{ width: "min-content" }}>
        <p className="leading-[normal]">⟢</p>
      </div>
    </div>
  );
}

function LogoContainer() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Logo Container">
      <div className="[grid-area:1_/_1] bg-[#459f89] h-[107.168px] ml-0 mt-0 rounded-[6.229px] w-[87.257px]" data-name="Logo Image" />
      <LogoContent />
      <div className="[grid-area:1_/_1] h-[105.116px] ml-[1.193px] mt-[1.026px] relative rounded-[5.306px] w-[84.871px]" data-name="Logo Background">
        <div aria-hidden="true" className="absolute border-[0.231px] border-solid border-white inset-0 pointer-events-none rounded-[5.306px]" />
      </div>
    </div>
  );
}

function Indicator() {
  return (
    <div className="absolute h-3 left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-0" data-name="Indicator">
      <div className="absolute bottom-0 left-0 right-[-2px] top-0">
        <img className="block max-w-none size-full" src={imgIndicator} />
      </div>
    </div>
  );
}

function IndicatorOn() {
  return (
    <div className="opacity-0 relative shrink-0 size-3" data-name="Indicator on">
      <Indicator />
    </div>
  );
}

function Indicator1() {
  return (
    <div className="absolute left-1/2 size-3 top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Indicator">
      <img className="block max-w-none size-full" src={imgIndicator1} />
    </div>
  );
}

function IndicatorOff() {
  return (
    <div className="relative shrink-0 size-3" data-name="Indicator off">
      <Indicator1 />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#e5e5e6] box-border content-stretch flex h-10 items-center justify-between left-0 overflow-clip pl-0 pr-4 py-0 rounded-[99px] top-0 w-20" data-name="_Background">
      <IndicatorOn />
      <IndicatorOff />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_3px_0px_inset_rgba(0,0,0,0.2)]" />
    </div>
  );
}

function Handle() {
  return (
    <div className="relative shrink-0 size-9" data-name="_Handle">
      <div className="absolute inset-[-2.78%_-19.44%_-66.67%_-19.44%]">
        <img className="block max-w-none size-full" src={imgHandle} />
      </div>
    </div>
  );
}

function ToggleV1() {
  return (
    <div className="box-border content-stretch flex gap-2.5 h-10 items-center justify-start px-[5px] py-px relative shrink-0 w-20" data-name="Toggle - V1">
      <Background />
      <Handle />
    </div>
  );
}

function Navigation() {
  return (
    <div className="shrink-0 sticky top-0 w-full" data-name="Navigation">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[100px] py-5 relative w-full">
          <LogoContainer />
          <ToggleV1 />
        </div>
      </div>
    </div>
  );
}

function QuestionContainer() {
  return (
    <div className="content-stretch flex flex-col items-center justify-start leading-[0] relative shrink-0 text-black w-[498px]" data-name="Question Container">
      <div className="font-['Playfair:Bold',_sans-serif] font-bold relative shrink-0 text-[40px] w-full" style={{ fontVariationSettings: "'opsz' 12, 'wdth' 100" }}>
        <p className="leading-[normal]">Should I accept this job offer?</p>
      </div>
      <div className="font-['Playfair:Medium',_sans-serif] font-medium relative shrink-0 text-[25px] text-center w-full" style={{ fontVariationSettings: "'opsz' 12, 'wdth' 100" }}>
        <p className="leading-[normal]">Choose one card. Follow your instinct.</p>
      </div>
    </div>
  );
}

function Shape13() {
  return (
    <div className="relative size-[17.025px]" data-name="shape-13">
      <img className="block max-w-none size-full" src={imgShape13} />
    </div>
  );
}

function Shape14() {
  return (
    <div className="relative size-[17.025px]" data-name="shape-13">
      <img className="block max-w-none size-full" src={imgShape14} />
    </div>
  );
}

function Shape15() {
  return (
    <div className="relative size-[17.025px]" data-name="shape-13">
      <img className="block max-w-none size-full" src={imgShape15} />
    </div>
  );
}

function Shape16() {
  return (
    <div className="relative size-[17.025px]" data-name="shape-13">
      <img className="block max-w-none size-full" src={imgShape16} />
    </div>
  );
}

function Frame455() {
  return (
    <div className="absolute content-start flex flex-wrap gap-[266.034px] items-start justify-start translate-x-[-50%] translate-y-[-50%] w-[300.084px]" style={{ top: "calc(50% - 1.004px)", left: "calc(50% - 0.253px)" }}>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Shape13 />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Shape14 />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Shape15 />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Shape16 />
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[#336655] h-[476.586px] overflow-clip relative rounded-[5.691px] shadow-[0px_1.423px_10.385px_2.845px_rgba(67,137,114,0.2)] shrink-0 w-[358.506px]" data-name="Card">
      <div className="absolute bg-[#5fb095] h-[430.585px] rounded-[11.381px] translate-x-[-50%] translate-y-[-50%] w-[320.327px]" style={{ top: "calc(50% - 1.004px)", left: "calc(50% - 0.253px)" }} />
      <Frame455 />
      <div className="absolute font-['Playfair:ExtraBold',_sans-serif] font-extrabold leading-[0] text-[#39393e] text-[16px] text-nowrap top-[153.24px]" style={{ left: "calc(50% - 66.671px)", fontVariationSettings: "'opsz' 12, 'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">Sample Text</p>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1.423px_5.691px_1.423px_inset_rgba(255,255,255,0.25)]" />
    </div>
  );
}

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

function RegularButtonSmall() {
  return (
    <div className="bg-[#5fb095] box-border content-stretch flex gap-3 items-center justify-center p-[12px] relative rounded-[4px] shrink-0" data-name="RegularButton/Small">
      <div aria-hidden="true" className="absolute border border-[#39393e] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <OthersThinkingProblem />
      <TextPadding />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[30px] items-center justify-start relative shrink-0" data-name="Button">
      <RegularButtonSmall />
    </div>
  );
}

function Main() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[30px] grow items-center justify-start min-h-px min-w-px pb-0 pt-5 px-0 relative shrink-0 w-full" data-name="Main">
      <QuestionContainer />
      <Card />
      <Button />
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-[#fcfefb] content-stretch flex flex-col items-start justify-start relative size-full" data-name="Home">
      <TopBanner />
      <Navigation />
      <Main />
    </div>
  );
}