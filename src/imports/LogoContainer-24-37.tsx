import { imgAskTheCards } from "./svg-i5mqj";

function LogoContent() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12.689px] h-[93.93px] items-start justify-start left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[73.298px]" data-name="Logo Content">
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

export default function LogoContainer() {
  return (
    <div className="relative size-full" data-name="Logo Container">
      <div className="absolute bg-[#459f89] h-[107.168px] left-1/2 rounded-[6.229px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[87.257px]" data-name="Logo Image" />
      <LogoContent />
      <div className="absolute h-[105.116px] left-1/2 rounded-[5.306px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[84.871px]" data-name="Logo Background">
        <div aria-hidden="true" className="absolute border-[0.231px] border-solid border-white inset-0 pointer-events-none rounded-[5.306px]" />
      </div>
    </div>
  );
}