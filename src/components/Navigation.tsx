import React from 'react';
import { MusicToggle } from "./MusicToggle";

interface NavigationProps {
  musicEnabled: boolean;
  setMusicEnabled: (enabled: boolean) => void;
}

export function Navigation({ musicEnabled, setMusicEnabled }: NavigationProps) {
  return (
    <div className="w-full sticky top-8">
      <div className="flex items-center justify-between px-8 py-3 bg-transparent">
        <div className="relative">
          <img 
            src={new URL('../assets/Moss&Flow_Logo.svg', import.meta.url).href}
            alt="Moss & Flow"
            className="h-auto w-auto max-h-[80px] object-contain"
          />
        </div>
        
        <div className="flex items-center">
          <MusicToggle enabled={musicEnabled} onToggle={setMusicEnabled} />
        </div>
      </div>
    </div>
  );
}