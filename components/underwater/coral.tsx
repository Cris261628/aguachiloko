export function Coral() {
  return (
    <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-[5]">
      <svg
        className="w-full h-32 md:h-48"
        viewBox="0 0 1200 150"
        preserveAspectRatio="xMidYMax slice"
      >
        {/* Coral formations */}
        <g className="animate-coral">
          {/* Coral 1 - Brain coral */}
          <ellipse cx="80" cy="130" rx="40" ry="25" fill="#f97316" opacity="0.8" />
          <ellipse cx="80" cy="125" rx="35" ry="20" fill="#fb923c" opacity="0.7" />
          
          {/* Coral 2 - Branching coral */}
          <path d="M 200 150 L 210 100 L 205 90 M 210 100 L 220 85 M 210 100 L 195 80" 
                stroke="#ec4899" strokeWidth="8" strokeLinecap="round" fill="none" opacity="0.8" />
          <path d="M 230 150 L 235 110 L 240 95 M 235 110 L 225 90" 
                stroke="#f472b6" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.7" />
          
          {/* Coral 3 - Fan coral */}
          <ellipse cx="400" cy="140" rx="50" ry="30" fill="#dc2626" opacity="0.7" />
          <ellipse cx="400" cy="135" rx="40" ry="25" fill="#ef4444" opacity="0.6" />
          <ellipse cx="400" cy="130" rx="30" ry="18" fill="#f87171" opacity="0.5" />
        </g>
        
        <g className="animate-coral" style={{ animationDelay: "0.5s" }}>
          {/* Coral 4 */}
          <path d="M 600 150 L 590 90 L 580 75 M 590 90 L 605 70 M 590 90 L 575 85" 
                stroke="#a855f7" strokeWidth="10" strokeLinecap="round" fill="none" opacity="0.7" />
          
          {/* Coral 5 - Tube coral */}
          <ellipse cx="750" cy="135" rx="30" ry="20" fill="#0ea5e9" opacity="0.8" />
          <ellipse cx="780" cy="140" rx="25" ry="18" fill="#38bdf8" opacity="0.7" />
          
          {/* Coral 6 */}
          <ellipse cx="900" cy="130" rx="45" ry="25" fill="#f97316" opacity="0.7" />
          <path d="M 880 130 Q 900 100 920 130" fill="#fb923c" opacity="0.5" />
        </g>
        
        <g className="animate-coral" style={{ animationDelay: "1s" }}>
          {/* Coral 7 */}
          <path d="M 1050 150 L 1060 95 L 1055 80 M 1060 95 L 1075 75 M 1060 95 L 1045 85" 
                stroke="#ec4899" strokeWidth="9" strokeLinecap="round" fill="none" opacity="0.8" />
          <path d="M 1100 150 L 1095 105 L 1090 90 M 1095 105 L 1105 88" 
                stroke="#f472b6" strokeWidth="7" strokeLinecap="round" fill="none" opacity="0.7" />
        </g>
        
        {/* Sandy bottom */}
        <rect x="0" y="145" width="1200" height="10" fill="#d4a574" opacity="0.3" />
      </svg>
    </div>
  )
}
