interface CardBackProps {
  isHoverable?: boolean;
}

export function CardBack({ isHoverable = false }: CardBackProps) {
  return (
    <div className={`
      bg-primary w-[252px] h-[335px] rounded-radius-card overflow-hidden relative
      shadow-[var(--elevation-sm)]
      transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0px_8px_25px_rgba(95,176,149,0.3)] hover:ring-2 hover:ring-primary/40 hover:ring-offset-2 hover:ring-offset-background
      ${isHoverable ? 'cursor-pointer' : ''}
    `}>
      {/* Card inner glow */}
      <div className="absolute inset-0 shadow-[0px_1px_6px_1px_inset_rgba(255,255,255,0.25)] pointer-events-none" />
      
      {/* Star symbol */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <svg viewBox="0 0 76 76" fill="none" className="w-[75px] h-[75px]">
          <path d="M42.4752 35.3185L75.7552 37.8488L42.4752 40.3791C41.3548 40.4595 40.4649 41.3494 40.3791 42.4752L37.8488 75.7551L35.3185 42.4752C35.2381 41.3548 34.3482 40.4649 33.2225 40.3791L-0.0574624 37.8488L33.2225 35.3185C34.3429 35.2381 35.2328 34.3482 35.3185 33.2225L37.8488 -0.0574755L40.3792 33.2225C40.4596 34.3429 41.3495 35.2328 42.4752 35.3185Z" fill="white"/>
        </svg>
      </div>
    </div>
  );
}