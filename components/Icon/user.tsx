import { FC } from 'react';

interface Props {
  size?: string;
  className?: string;
}

const IconUser = ({ size = '1em', className = '' }: Props) => {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1_6)">
        <path d="M0 0H100V100H0V0Z" fill="#194AC3"/>
        <path d="M65.2273 21.8182H72.2727V60.3409C72.2727 64.3182 71.3352 67.8693 69.4602 70.9943C67.6042 74.1004 64.9811 76.553 61.5909 78.3523C58.2008 80.1326 54.2235 81.0227 49.6591 81.0227C45.0947 81.0227 41.1174 80.1326 37.7273 78.3523C34.3371 76.553 31.7045 74.1004 29.8295 70.9943C27.9735 67.8693 27.0455 64.3182 27.0455 60.3409V21.8182H34.0909V59.7727C34.0909 62.6136 34.7159 65.142 35.9659 67.358C37.2159 69.5549 38.9962 71.2879 41.3068 72.5568C43.6364 73.8068 46.4205 74.4318 49.6591 74.4318C52.8977 74.4318 55.6818 73.8068 58.0114 72.5568C60.3409 71.2879 62.1212 69.5549 63.3523 67.358C64.6023 65.142 65.2273 62.6136 65.2273 59.7727V21.8182Z" fill="white"/>
      </g>
      <defs>
        <clipPath id="clip0_1_6">
          <rect width="100" height="100" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconUser;
