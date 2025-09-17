import { imgIndicator, imgIndicator1, imgHandle } from "./svg-g7mfo";

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

export default function ToggleV1() {
  return (
    <div className="relative size-full" data-name="Toggle - V1">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-[5px] py-px relative size-full">
          <Background />
          <Handle />
        </div>
      </div>
    </div>
  );
}