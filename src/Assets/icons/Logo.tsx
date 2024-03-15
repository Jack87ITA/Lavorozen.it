import React from "react";
import { Image, Text, TextProps, chakra } from "@chakra-ui/react";
import { colors } from "../../Styles/Theme/colors";

interface LogoProps extends TextProps {
  color?: string;
  size?: string;
  props?: any;
}

const Logo = ({ color = "primary.main", size = "3xl", props }: LogoProps) => {
  return (
    <Image
      src="https://www.lavorozen.it/wp-content/uploads/2024/02/cropped-Color-logo-with-background-180_60-1-180x41.png"
      alt="Lavorozen Logo"
      width={180}
      {...props}
    />
    //   <svg
    //   width={153}
    //   height={22}
    //   viewBox="0 0 153 22"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <g clipPath="url(#axx)">
    //     <path
    //       id="logo_sunset"
    //       fillRule="evenodd"
    //       clipRule="evenodd"
    //       d="M29.965 21.575a14.94 14.94 0 0 0-3.806-9.18c-5.53-6.172-15.017-6.693-21.188-1.164A14.955 14.955 0 0 0 0 21.575h29.965Z"
    //       fill="url(#b)"
    //       style={{
    //         translate: "none",
    //         rotate: "none",
    //         scale: "none",
    //         transformOrigin: "0px 0px"
    //       }}
    //       data-svg-origin="0 7.402395725250244"
    //       transform="matrix(1,0,0,1,0,0)"
    //     />
    //     <path
    //       d="M125.514 11.597a7.397 7.397 0 0 1 1.441-2.374c.618-.68 1.387-1.221 2.309-1.622.921-.4 1.927-.601 3.018-.601 1.351 0 2.573.337 3.663 1.013a7.024 7.024 0 0 1 2.534 2.685c.598 1.115.898 2.334.898 3.656 0 .415-.029.801-.087 1.158h-10.742c.213.888.663 1.597 1.354 2.128.689.53 1.546.795 2.57.795.675 0 1.322-.13 1.939-.39a3.658 3.658 0 0 0 1.52-1.174l2.49 1.984c-.637.898-1.481 1.603-2.534 2.114a7.655 7.655 0 0 1-3.388.767c-1.39 0-2.659-.32-3.807-.956a7.028 7.028 0 0 1-2.707-2.635c-.656-1.119-.985-2.354-.985-3.705 0-.995.171-1.943.514-2.845v.002Zm10.185 1.237c-.106-.714-.488-1.312-1.144-1.794-.656-.482-1.423-.724-2.302-.724-.878 0-1.577.23-2.214.688a3.744 3.744 0 0 0-1.361 1.832h7.021v-.002Z"
    //       fill="#051D2E"
    //     />
    //     <path
    //       d="m144.01 14.244-4.531-6.988h3.937l2.592 3.792 2.577-3.792h3.937l-4.56 6.988 5.037 7.098h-3.909l-3.083-4.502-3.084 4.502h-3.924l5.01-7.098h.001ZM123.422 18.288c-.599 0-1.005-.126-1.216-.376-.211-.25-.319-.637-.319-1.158V.04h-3.649v17.539c0 1.332.359 2.357 1.079 3.076.718.719 1.749 1.08 3.091 1.08.453 0 .979-.082 1.577-.246v-3.23c-.135.02-.323.03-.565.03h.002ZM39.42 9.139c1.451-1.429 3.215-2.143 5.29-2.143 1.313 0 2.525.301 3.634.905a7.375 7.375 0 0 1 2.679 2.44l-3.113 1.81a3.874 3.874 0 0 0-1.374-1.216 3.8 3.8 0 0 0-1.824-.449c-1.061 0-1.976.384-2.744 1.15-.767.768-1.15 1.673-1.15 2.716 0 1.043.383 1.961 1.15 2.728.767.767 1.681 1.151 2.744 1.151.685 0 1.318-.162 1.897-.485a3.783 3.783 0 0 0 1.39-1.325l3.083 1.84a7.408 7.408 0 0 1-2.692 2.525 7.393 7.393 0 0 1-3.678.947 7.503 7.503 0 0 1-3.764-.992 7.315 7.315 0 0 1-2.714-2.692 7.209 7.209 0 0 1-.992-3.699c0-2.046.726-3.782 2.178-5.211ZM54.23 9.139c1.452-1.429 3.216-2.143 5.291-2.143 1.37 0 2.632.326 3.785.977a7.197 7.197 0 0 1 2.722 2.67 7.194 7.194 0 0 1 .992 3.706c0 1.341-.33 2.564-.992 3.698a7.284 7.284 0 0 1-2.722 2.693 7.473 7.473 0 0 1-3.785.992c-1.37 0-2.615-.33-3.763-.992a7.315 7.315 0 0 1-2.715-2.693 7.209 7.209 0 0 1-.992-3.698c0-2.046.727-3.783 2.178-5.211Zm2.547 7.94c.767.767 1.681 1.15 2.744 1.15a3.783 3.783 0 0 0 2.764-1.15c.762-.767 1.144-1.677 1.144-2.729 0-1.051-.38-1.946-1.144-2.715-.762-.766-1.684-1.15-2.764-1.15-1.08 0-1.976.384-2.744 1.15-.767.767-1.15 1.672-1.15 2.715s.383 1.962 1.15 2.729ZM70.905 7.257l3.591 9.555 3.62-9.555h3.966l-5.66 14.087h-3.821L66.925 7.257h3.982-.002ZM82.426 11.593a7.397 7.397 0 0 1 1.441-2.374c.618-.68 1.387-1.221 2.309-1.622.921-.4 1.927-.6 3.019-.6 1.35 0 2.572.336 3.662 1.012a7.016 7.016 0 0 1 2.534 2.686c.598 1.114.898 2.333.898 3.655 0 .415-.029.802-.087 1.158H85.46c.213.888.663 1.597 1.354 2.128.69.53 1.546.795 2.57.795.675 0 1.322-.13 1.94-.39a3.661 3.661 0 0 0 1.52-1.174l2.489 1.984c-.637.898-1.481 1.603-2.534 2.114a7.652 7.652 0 0 1-3.387.767c-1.39 0-2.66-.32-3.808-.956a7.035 7.035 0 0 1-2.707-2.635c-.656-1.119-.985-2.354-.985-3.705 0-.995.172-1.943.514-2.845v.002Zm10.185 1.238c-.106-.715-.487-1.313-1.144-1.795-.656-.482-1.423-.724-2.301-.724-.879 0-1.578.23-2.215.688a3.742 3.742 0 0 0-1.36 1.832h7.02v-.002ZM98.27 6.981h3.649V8.3a5.916 5.916 0 0 1 2.179-1.027c.776-.184 1.855-.275 3.235-.275v3.49c-.917 0-1.7.053-2.353.16-.652.106-1.175.253-1.57.442-.395.19-.705.446-.927.775a2.91 2.91 0 0 0-.449 1.035 6.41 6.41 0 0 0-.116 1.325v7.122l-3.65-.004V6.982h.002ZM116.261 3.46V.039c-.945-.07-2.215-.03-2.931.003-.134.003-.263.01-.391.02-.1.006-.153.014-.153.014-1.108.116-1.958.506-2.548 1.172-.714.805-1.07 1.927-1.07 3.365v16.73h3.648V10.488h3.446v-3.23h-3.446V5.137c0-2.023 2.121-1.703 3.446-1.677h-.001Z"
    //       fill="#051D2E"
    //     />
    //   </g>
    //   <defs>
    //     <linearGradient
    //       id="b"
    //       x1="8.239"
    //       y1="10.343"
    //       x2="11.843"
    //       y2="22.155"
    //       gradientUnits="userSpaceOnUse"
    //     >
    //       <stop stopColor={colors.primary.main} />
    //       <stop offset={1} stopColor={colors.primary.main} />
    //     </linearGradient>
    //     <clipPath id="axx">
    //       <path fill="#fff" d="M0 0h153v21.734H0z" />
    //     </clipPath>
    //   </defs>
    // </svg>
  );
};

export const LogoWhite = (props: LogoProps) => {
  return (
    <Image
      src="https://www.lavorozen.it/wp-content/uploads/2024/02/White-logo-no-background-180_60.png"
      alt="Lavorozen Logo"
      width={180}
      {...props}
    />
  );
};

export default Logo;
