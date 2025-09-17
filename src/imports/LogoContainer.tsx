import { imgAskTheCards } from "./svg-42j3v";

export default function LogoContainer() {
  return (
    <div className="flex items-center justify-center">
      <img 
        src={imgAskTheCards} 
        alt="Ask The Cards" 
        className="h-auto w-auto max-h-[60px]"
      />
    </div>
  );
}