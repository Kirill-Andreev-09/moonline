import { FC } from 'react';

export interface IIcon {
  fill?: string;
  stroke?: string;
  width?: number;
  height?: number;
}

export const DoneIcon: FC<IIcon> = ({ width = 40, height = 40 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dd_214_22)">
        <path
          d="M94.0651 75.0874C84.8818 75.0874 77.3984 82.5707 77.3984 91.7541C77.3984 100.937 84.8818 108.421 94.0651 108.421C103.248 108.421 110.732 100.937 110.732 91.7541C110.732 82.5707 103.248 75.0874 94.0651 75.0874ZM102.032 87.9207L92.5818 97.3707C92.3484 97.6041 92.0318 97.7374 91.6984 97.7374C91.3651 97.7374 91.0484 97.6041 90.8151 97.3707L86.0984 92.6541C85.6151 92.1707 85.6151 91.3707 86.0984 90.8874C86.5818 90.4041 87.3818 90.4041 87.8651 90.8874L91.6984 94.7207L100.265 86.1541C100.748 85.6707 101.548 85.6707 102.032 86.1541C102.515 86.6374 102.515 87.4207 102.032 87.9207Z"
          fill="#FFF36A"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_214_22"
          x="-2.73457"
          y="-2.64609"
          width={width}
          height={height}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2.4" />
          <feGaussianBlur stdDeviation="38.4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0.952941 0 0 0 0 0.415686 0 0 0 0.32 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_214_22"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2.4" />
          <feGaussianBlur stdDeviation="19.2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0.952941 0 0 0 0 0.415686 0 0 0 0.32 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_214_22"
            result="effect2_dropShadow_214_22"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_214_22"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
