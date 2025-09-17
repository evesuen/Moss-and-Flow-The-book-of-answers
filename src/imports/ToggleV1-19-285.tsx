import { imgIndicator, imgIndicator1, imgHandle } from "./svg-cjy1q";

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
    <div className="relative shrink-0 size-3 z-[2]" data-name="Indicator on">
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
    <div className="opacity-0 relative shrink-0 size-3 z-[1]" data-name="Indicator off">
      <Indicator1 />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#5fb095] box-border content-stretch flex inset-0 isolate items-center justify-between overflow-clip pl-4 pr-0 py-0 rounded-[99px]" data-name="_Background">
      <IndicatorOn />
      <IndicatorOff />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_3px_0px_inset_rgba(0,0,0,0.2)]" />
    </div>
  );
}

function Handle() {
  return (
    <div className="absolute bottom-[5%] left-1/2 right-[5%] top-[5%]" data-name="_Handle">
      <div className="absolute inset-[-2.78%_-19.44%_-66.67%_-19.44%]">
        <img className="block max-w-none size-full" src={imgHandle} />
      </div>
    </div>
  );
}

export default function ToggleV1() {
  return (
    <div className="relative size-full" data-name="Toggle - V1">
      <Background />
      <Handle />
    </div>
  );
}