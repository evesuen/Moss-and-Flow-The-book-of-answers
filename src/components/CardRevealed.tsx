interface CardRevealedProps {
  guidance: string;
}

export function CardRevealed({ guidance }: CardRevealedProps) {
  return (
    <div className="bg-primary w-[359px] h-[477px] rounded-radius-card overflow-hidden relative shadow-[var(--elevation-sm)]">
      {/* Card inner glow */}
      <div className="absolute inset-0 shadow-[0px_1px_6px_1px_inset_rgba(255,255,255,0.25)] pointer-events-none" />
      
      {/* Inner card background */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent w-[320px] h-[431px] rounded-[11px]" />
      
      {/* Decorative elements in corners */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px]">
        {/* Top left */}
        <div className="absolute top-0 left-0">
          <svg viewBox="0 0 18 18" fill="none" className="w-[17px] h-[17px] rotate-180 scale-y-[-1]">
            <circle cx="9" cy="9" r="8.5" fill="var(--color-primary)"/>
            <path d="M9.55257 7.94319L17.0374 8.51227L9.55257 9.08135C9.30058 9.09944 9.10044 9.29958 9.08115 9.55277L8.51207 17.0376L7.94299 9.55277C7.92491 9.30078 7.72476 9.10064 7.47157 9.08135L-0.0132731 8.51227L7.47157 7.94319C7.72356 7.92511 7.9237 7.72496 7.94299 7.47177L8.51207 -0.0130734L9.08115 7.47177C9.09924 7.72376 9.29938 7.9239 9.55257 7.94319Z" fill="white"/>
          </svg>
        </div>
        
        {/* Top right */}
        <div className="absolute top-0 right-0">
          <svg viewBox="0 0 18 18" fill="none" className="w-[17px] h-[17px] rotate-180 scale-y-[-1]">
            <circle cx="9" cy="9" r="8.5" fill="var(--color-primary)"/>
            <path d="M9.55268 7.94319L17.0375 8.51227L9.55268 9.08135C9.3007 9.09944 9.10055 9.29958 9.08126 9.55277L8.51218 17.0376L7.9431 9.55277C7.92502 9.30078 7.72488 9.10064 7.47168 9.08135L-0.0131615 8.51227L7.47168 7.94319C7.72367 7.92511 7.92381 7.72496 7.9431 7.47177L8.51218 -0.0130734L9.08126 7.47177C9.09935 7.72376 9.29949 7.9239 9.55268 7.94319Z" fill="white"/>
          </svg>
        </div>
        
        {/* Bottom left */}
        <div className="absolute bottom-0 left-0">
          <svg viewBox="0 0 18 18" fill="none" className="w-[17px] h-[17px] rotate-180 scale-y-[-1]">
            <circle cx="9" cy="9" r="8.5" fill="var(--color-primary)"/>
            <path d="M9.55257 7.9431L17.0374 8.51218L9.55257 9.08126C9.30058 9.09934 9.10044 9.29948 9.08115 9.55268L8.51207 17.0375L7.94299 9.55268C7.92491 9.30069 7.72476 9.10055 7.47157 9.08126L-0.0132731 8.51218L7.47157 7.9431C7.72356 7.92501 7.9237 7.72487 7.94299 7.47168L8.51207 -0.0131673L9.08115 7.47168C9.09924 7.72366 9.29938 7.92381 9.55257 7.9431Z" fill="white"/>
          </svg>
        </div>
        
        {/* Bottom right */}
        <div className="absolute bottom-0 right-0">
          <svg viewBox="0 0 18 18" fill="none" className="w-[17px] h-[17px] rotate-180 scale-y-[-1]">
            <circle cx="9" cy="9" r="8.5" fill="var(--color-primary)"/>
            <path d="M9.55268 7.9431L17.0375 8.51218L9.55268 9.08126C9.3007 9.09934 9.10055 9.29948 9.08126 9.55268L8.51218 17.0375L7.9431 9.55268C7.92502 9.30069 7.72488 9.10055 7.47168 9.08126L-0.0131615 8.51218L7.47168 7.9431C7.72367 7.92501 7.92381 7.72487 7.9431 7.47168L8.51218 -0.0131673L9.08126 7.47168C9.09935 7.72366 9.29949 7.92381 9.55268 7.9431Z" fill="white"/>
          </svg>
        </div>
      </div>
      
      {/* Guidance text */}
      <div className="absolute top-[153px] left-1/2 transform -translate-x-1/2 text-center px-8">
        <p className="text-foreground text-center leading-relaxed">
          {guidance}
        </p>
      </div>
    </div>
  );
}