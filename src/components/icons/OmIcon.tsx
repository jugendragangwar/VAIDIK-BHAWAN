interface OmIconProps {
  className?: string;
  size?: number;
}

const OmIcon = ({ className = "", size = 48 }: OmIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 5c-2.5 0-4.5 2-4.5 4.5S47.5 14 50 14c2.5 0 4.5-2 4.5-4.5S52.5 5 50 5z"
        fillRule="evenodd"
      />
      <path
        d="M68 18c-8-3-17 0-22 7-3 4-4 9-3 14 1 4 4 8 8 10 3 2 6 2 10 1l2-1c-3 3-7 5-12 5-7 0-13-4-16-10-2-4-2-9-1-14 2-7 7-12 14-14 6-2 12-1 17 2l3 2v-2z"
        fillRule="evenodd"
      />
      <path
        d="M25 35c-5 0-9 2-12 6-3 4-4 9-3 14 2 8 8 14 16 16 5 1 10 0 14-2 4-3 7-7 8-12v-2h-3c-1 5-4 9-8 11-4 2-9 2-13 0-6-3-10-9-11-16-1-4 0-8 2-11 2-3 5-5 9-5 3 0 6 1 8 4 2 2 3 5 3 8l-1 3c-2-2-4-3-7-3-4 0-7 3-7 7s3 7 7 7 7-3 7-7v-1c0-5-2-9-5-12-3-4-7-5-12-5z"
        fillRule="evenodd"
      />
      <path
        d="M75 35c-4 0-8 2-10 5-2 3-3 7-2 11 1 5 5 9 10 10 3 1 7 0 10-2 2-2 4-5 4-8v-2h-3c0 3-1 5-3 6-2 2-5 2-8 1-3-1-6-4-7-8 0-2 0-5 2-7 1-2 4-3 6-3 2 0 4 1 5 3 1 1 2 3 2 5h-2c-1-2-3-3-5-3-3 0-5 2-5 5s2 5 5 5 5-2 5-5v-1c0-3-1-6-3-8-2-3-5-4-8-4z"
        fillRule="evenodd"
      />
      <path
        d="M45 75c0-3 2-5 5-5s5 2 5 5-2 5-5 5-5-2-5-5z"
        fillRule="evenodd"
      />
      <path
        d="M42 85h16v3H42v-3z"
        fillRule="evenodd"
      />
      <path
        d="M48 88h4v7h-4v-7z"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default OmIcon;
