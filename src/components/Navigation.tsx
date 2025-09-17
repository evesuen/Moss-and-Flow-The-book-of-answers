import image_d684ba38cbaaad165f27abc74c43d13edd0fe283 from 'figma:asset/d684ba38cbaaad165f27abc74c43d13edd0fe283.png';
import AskTheCardsLogo from "../imports/AskTheCardsLogo";
import LogoContainer from "../imports/LogoContainer";
import { MusicToggle } from "./MusicToggle";
import logoImage from 'figma:asset/412c5c7ada405df4ea1de17719ce31ddc447c85a.png';

interface NavigationProps {
  musicEnabled: boolean;
  setMusicEnabled: (enabled: boolean) => void;
}

export function Navigation({ musicEnabled, setMusicEnabled }: NavigationProps) {
  return (
    <div className="w-full sticky top-8">
      <div className="flex items-center justify-between px-[80px] py-3 bg-transparent">
        <div className="relative">
          <div className="relative w-[70px] h-[86px] rounded-[6px] overflow-hidden">
            {/* background SVG */}
            <AskTheCardsLogo className="absolute inset-0 w-full h-full text-primary" />

            {/* border + content */}
            <div className="absolute inset-[1px] border border-white rounded-[5px]">
              <div>
                <img 
                  src={image_d684ba38cbaaad165f27abc74c43d13edd0fe283}
                  alt="询问塔罗牌"
                  className="h-auto w-auto max-h-[80px] object-contain hover:scale-110 transition-transform duration-300 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center">
          <MusicToggle enabled={musicEnabled} onToggle={setMusicEnabled} />
        </div>
      </div>
    </div>
  );
}