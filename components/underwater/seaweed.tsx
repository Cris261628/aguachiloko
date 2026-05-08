export function Seaweed() {
  return (
    <div className="fixed bottom-0 left-0 right-0 pointer-events-none z-[5] overflow-hidden">
      <svg
        className="w-full h-40 md:h-60"
        viewBox="0 0 1200 200"
        preserveAspectRatio="xMidYMax slice"
      >
        {/* Seaweed strands */}
        {[50, 120, 200, 350, 480, 600, 750, 850, 950, 1050, 1150].map((x, i) => (
          <g key={i} className="animate-seaweed" style={{ animationDelay: `${i * 0.3}s` }}>
            <path
              d={`M ${x} 200 Q ${x + 15} 150 ${x - 10} 100 Q ${x + 20} 50 ${x} ${40 + (i % 3) * 20}`}
              fill="none"
              stroke={i % 2 === 0 ? "#22c55e" : "#16a34a"}
              strokeWidth={8 + (i % 3) * 2}
              strokeLinecap="round"
              opacity={0.7}
            />
            {/* Small leaves */}
            <ellipse
              cx={x + 10}
              cy={120}
              rx="8"
              ry="15"
              fill={i % 2 === 0 ? "#4ade80" : "#22c55e"}
              opacity={0.6}
              transform={`rotate(${20 + i * 5} ${x + 10} 120)`}
            />
            <ellipse
              cx={x - 8}
              cy={80}
              rx="6"
              ry="12"
              fill={i % 2 === 0 ? "#22c55e" : "#4ade80"}
              opacity={0.5}
              transform={`rotate(${-15 - i * 3} ${x - 8} 80)`}
            />
          </g>
        ))}
      </svg>
    </div>
  )
}
