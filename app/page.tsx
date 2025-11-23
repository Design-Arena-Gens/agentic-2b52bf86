export default function Page() {
  return (
    <main className="container">
      <header className="header">
        <h1>????? ???????? ???? ?? ????? ?? ??????</h1>
        <p className="sub">
          ????? ????? ??????? ?? ?????? ??????? ???? ???? ???????? ???? ?????
          ?????? ????? ?? ???????? ??????.
        </p>
      </header>

      <section aria-label="???? ????? ?????">
        <svg
          className="scene"
          viewBox="0 0 1200 700"
          role="img"
          aria-labelledby="title desc"
        >
          <title id="title">????? ????? ???? ?? ????????</title>
          <desc id="desc">
            ???? ??????: ??? ?????? ???? ????? ????? ???? ???? ???? ???????
            ????? ????.
          </desc>

          <defs>
            <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0c1445" />
              <stop offset="60%" stopColor="#1f2b6c" />
              <stop offset="100%" stopColor="#2a3d73" />
            </linearGradient>
            <radialGradient id="glow" cx="50%" cy="45%" r="60%">
              <stop offset="0%" stopColor="#fff6c2" stopOpacity="0.25" />
              <stop offset="60%" stopColor="#ffe48a" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#ffd45e" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="steel" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#9ea7b3" />
              <stop offset="45%" stopColor="#c7cbd1" />
              <stop offset="55%" stopColor="#7e8794" />
              <stop offset="100%" stopColor="#b0b7c2" />
            </linearGradient>
            <linearGradient id="sword" x1="0" x2="1">
              <stop offset="0%" stopColor="#e8eef7" />
              <stop offset="100%" stopColor="#adb7c7" />
            </linearGradient>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.45" />
            </filter>
          </defs>

          <rect x="0" y="0" width="1200" height="700" fill="url(#sky)" />
          <circle cx="820" cy="140" r="180" fill="url(#glow)" />

          <g aria-label="???" transform="translate(0, 520)">
            <rect x="0" y="0" width="1200" height="180" fill="#2a2f3a" />
            <path
              d="M0,40 C250,10 420,80 600,50 C780,20 970,70 1200,40 L1200,180 L0,180 Z"
              fill="#1f242e"
            />
          </g>

          <g
            aria-label="????? ????"
            transform="translate(420, 180)"
            filter="url(#shadow)"
          >
            <ellipse cx="140" cy="420" rx="70" ry="18" fill="#111722" opacity="0.6" />

            <g aria-label="?????">
              <path
                d="M130 160 C120 200, 90 260, 95 340 C145 360, 175 360, 225 340 C230 260, 200 200, 190 160 Z"
                fill="url(#steel)"
                stroke="#788290"
                strokeWidth="3"
              />
              <rect
                x="145"
                y="195"
                width="35"
                height="70"
                rx="6"
                fill="#d2d7de"
                opacity="0.7"
              />
              <rect
                x="165"
                y="195"
                width="35"
                height="70"
                rx="6"
                fill="#9aa5b2"
                opacity="0.25"
              />
            </g>

            <g aria-label="??????">
              <path
                d="M160 90 C130 95, 110 120, 110 145 C160 150, 190 150, 240 145 C240 120, 220 95, 190 90 Z"
                fill="url(#steel)"
                stroke="#6d7786"
                strokeWidth="3"
              />
              <rect
                x="145"
                y="140"
                width="60"
                height="18"
                rx="4"
                fill="#2b3140"
              />
            </g>

            <g aria-label="?????? ?????? ??????" transform="rotate(-22, 210, 230)">
              <rect
                x="210"
                y="210"
                width="70"
                height="22"
                rx="8"
                fill="url(#steel)"
                stroke="#6d7786"
                strokeWidth="3"
              />
              <g aria-label="?????" transform="translate(270, 205) rotate(-8)">
                <rect x="0" y="6" width="220" height="8" fill="url(#sword)" />
                <rect x="-14" y="0" width="18" height="20" rx="3" fill="#b48a4a" />
                <rect x="-34" y="5" width="22" height="10" rx="2" fill="#9e7639" />
                <polygon
                  points="220,10 260,8 220,4"
                  fill="#e4ebf6"
                  stroke="#bfc8d6"
                />
              </g>
            </g>

            <g aria-label="?????? ??????" transform="rotate(18, 120, 230)">
              <rect
                x="60"
                y="210"
                width="70"
                height="22"
                rx="8"
                fill="url(#steel)"
                stroke="#6d7786"
                strokeWidth="3"
              />
              <circle cx="60" cy="222" r="14" fill="#485264" />
            </g>

            <g aria-label="??????">
              <rect
                x="130"
                y="330"
                width="24"
                height="80"
                rx="6"
                fill="#8f98a6"
              />
              <rect
                x="185"
                y="330"
                width="24"
                height="80"
                rx="6"
                fill="#8f98a6"
              />
              <rect x="118" y="405" width="46" height="14" rx="4" fill="#2b3140" />
              <rect x="176" y="405" width="46" height="14" rx="4" fill="#2b3140" />
            </g>
          </g>

          <g
            aria-label="????????"
            transform="translate(820, 210)"
            filter="url(#shadow)"
          >
            <ellipse cx="40" cy="420" rx="70" ry="18" fill="#0b0f18" opacity="0.5" />
            <path
              d="M80 120 C40 120, 10 160, 10 210 C10 260, 40 310, 100 320 C160 310, 190 260, 190 210 C190 160, 160 120, 120 120 Z"
              fill="#a01725"
              stroke="#650d15"
              strokeWidth="4"
            />
            <path
              d="M30 110 C60 80, 70 60, 60 40 C40 60, 35 90, 30 110 Z"
              fill="#7b0f1b"
            />
            <path
              d="M170 110 C140 80, 130 60, 140 40 C160 60, 165 90, 170 110 Z"
              fill="#7b0f1b"
            />
            <circle cx="70" cy="200" r="10" fill="#ffe6a8" />
            <circle cx="130" cy="200" r="10" fill="#ffe6a8" />
            <rect x="85" y="235" width="30" height="10" rx="3" fill="#3b0710" />
            <path
              d="M60 260 C80 240, 120 240, 140 260"
              stroke="#3b0710"
              strokeWidth="6"
              fill="none"
            />
            <g aria-label="?????" transform="translate(0,0) rotate(6,100,270)">
              <path
                d="M10 270 C20 280, 30 300, 40 310"
                stroke="#650d15"
                strokeWidth="10"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M160 270 C150 280, 140 300, 130 310"
                stroke="#650d15"
                strokeWidth="10"
                strokeLinecap="round"
                fill="none"
              />
            </g>
          </g>

          <g aria-label="???? ??????">
            <path
              d="M840 320 Q 780 300, 720 280 Q 660 260, 600 250"
              stroke="#ffe8a6"
              strokeWidth="10"
              strokeLinecap="round"
              fill="none"
              opacity="0.8"
            />
            <path
              d="M840 320 Q 780 300, 720 280 Q 660 260, 600 250"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              opacity="0.7"
            />
            <circle cx="842" cy="320" r="12" fill="#ffe8a6" opacity="0.85" />
          </g>
        </svg>
      </section>

      <footer className="footer">
        <span>???? ????? ?????? ???????? SVG ? ???? ??? ??????</span>
      </footer>
    </main>
  );
}

