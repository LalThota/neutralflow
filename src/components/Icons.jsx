import React from 'react';

// Custom inline SVGs with accessibility defaults
export const LogoIcon = ({ className = '', size = 32, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path
      d="M16 2L2 9L16 16L30 9L16 2Z"
      fill="url(#logo-grad-1)"
    />
    <path
      d="M2 23L16 30L30 23"
      stroke="url(#logo-grad-2)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 16L16 23L30 16"
      stroke="url(#logo-grad-3)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient id="logo-grad-1" x1="2" y1="2" x2="30" y2="16" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00D9FF" />
        <stop offset="1" stopColor="#4F46E5" />
      </linearGradient>
      <linearGradient id="logo-grad-2" x1="2" y1="23" x2="30" y2="30" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4F46E5" />
        <stop offset="1" stopColor="#00D9FF" />
      </linearGradient>
      <linearGradient id="logo-grad-3" x1="2" y1="16" x2="30" y2="23" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00D9FF" stopOpacity="0.8" />
        <stop offset="1" stopColor="#4F46E5" stopOpacity="0.8" />
      </linearGradient>
    </defs>
  </svg>
);

export const MenuIcon = ({ className = '', size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </svg>
);

export const CloseIcon = ({ className = '', size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const ChevronIcon = ({ className = '', size = 16, direction = 'down', ...props }) => {
  const rotation = {
    down: 'rotate(0deg)',
    up: 'rotate(180deg)',
    right: 'rotate(-90deg)',
    left: 'rotate(90deg)',
  }[direction];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transform: rotation, transition: 'transform var(--transition-normal)' }}
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="m19.5 8.25l-7.5 7.5l-7.5-7.5" />
    </svg>
  );
};

export const StarIcon = ({ className = '', size = 16, filled = true, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={filled ? 'var(--color-accent)' : 'none'}
    stroke={filled ? 'var(--color-accent)' : 'currentColor'}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

// Feature Icons
export const AgentIcon = ({ className = '', size = 24, color = 'currentColor', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <g fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
      <path d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93c.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204c.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78c-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107c-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93c-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204c-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78c.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107c.397-.165.71-.505.78-.929l.15-.894Z"/>
      <path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"/>
    </g>
  </svg>
);

export const ZapIcon = ({ className = '', size = 24, color = 'currentColor', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
  </svg>
);

export const BrainIcon = ({ className = '', size = 24, color = 'currentColor', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill={color}
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M8.372 1.349a.75.75 0 0 0-.744 0l-4.81 2.748L8 7.131l5.182-3.034zM14 5.357L8.75 8.43v6.005l4.872-2.784A.75.75 0 0 0 14 11zm-6.75 9.078V8.43L2 5.357V11c0 .27.144.518.378.651z" />
  </svg>
);

export const ArrowsIcon = ({ className = '', size = 24, color = 'currentColor', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
  </svg>
);

export const LockIcon = ({ className = '', size = 24, color = 'currentColor', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037a.75.75 0 0 1-.646 1.353a5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353a5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037a.75.75 0 0 1-.354-1Z" />
  </svg>
);

export const EyeIcon = ({ className = '', size = 24, color = 'currentColor', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <g fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
      <path d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
      <path d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
    </g>
  </svg>
);

// Map feature icon keys to component
export const FeatureIcon = ({ name, color, size = 24, className = '' }) => {
  const icons = {
    agent: AgentIcon,
    zap: ZapIcon,
    brain: BrainIcon,
    arrows: ArrowsIcon,
    lock: LockIcon,
    eye: EyeIcon,
  };
  const Comp = icons[name] || ZapIcon;
  return <Comp color={color} size={size} className={className} />;
};

// Social Icons
export const TwitterIcon = ({ className = '', size = 20, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const GithubIcon = ({ className = '', size = 20, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

export const LinkedinIcon = ({ className = '', size = 20, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);

// High-tech placeholder company SVGs
export const CompanyLogo1 = ({ className = '', ...props }) => (
  <svg viewBox="0 0 120 32" height="24" className={className} aria-hidden="true" {...props}>
    <text x="0" y="22" fontFamily="var(--font-display)" fontWeight="700" fontSize="20" fill="currentColor" letterSpacing="-1">
      ACME<tspan fill="var(--color-accent)">.</tspan>LABS
    </text>
  </svg>
);

export const CompanyLogo2 = ({ className = '', ...props }) => (
  <svg viewBox="0 0 120 32" height="24" className={className} aria-hidden="true" {...props}>
    <text x="0" y="22" fontFamily="var(--font-display)" fontWeight="700" fontSize="18" fill="currentColor" letterSpacing="2">
      KRONOS
    </text>
  </svg>
);

export const CompanyLogo3 = ({ className = '', ...props }) => (
  <svg viewBox="0 0 120 32" height="24" className={className} aria-hidden="true" {...props}>
    <text x="0" y="22" fontFamily="var(--font-display)" fontWeight="700" fontSize="19" fill="currentColor" letterSpacing="0">
      APEX<tspan fill="var(--color-primary)">_</tspan>DATA
    </text>
  </svg>
);

export const CompanyLogo4 = ({ className = '', ...props }) => (
  <svg viewBox="0 0 120 32" height="24" className={className} aria-hidden="true" {...props}>
    <text x="0" y="22" fontFamily="var(--font-display)" fontWeight="700" fontSize="18" fill="currentColor" letterSpacing="-0.5">
      CYBER<tspan fill="var(--color-accent)">FLOW</tspan>
    </text>
  </svg>
);
