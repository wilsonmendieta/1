import svgPaths from "./svg-u0c0e4jw2i";
import imgDownload1 from "figma:asset/b0816fda3bc75aa7dd5f4e4bd6624ffee119cddf.png";
import imgScreenshot202505230942381 from "figma:asset/465709eaf4c712b6c3108036433dcfe7b165297e.png";

function LogoPage() {
  return (
    <div className="absolute inset-0 w-full h-full" data-name="Logo-page">
      <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1720 2260">
        <g clipPath="url(#clip0_1_145)" filter="url(#filter0_i_1_145)" id="Logo-page">
          <rect fill="#FFF2F2" height="2260" width="1720" />
          <g filter="url(#filter1_f_1_145)" id="Vector" className="animate-float-blob-1" style={{ transformOrigin: 'center' }}>
            <path clipRule="evenodd" d={svgPaths.p372291f0} fill="var(--fill-0, #EC5C22)" fillRule="evenodd" />
          </g>
          <g filter="url(#filter2_f_1_145)" id="Vector_2" className="animate-float-blob-2" style={{ transformOrigin: 'center' }}>
            <path clipRule="evenodd" d={svgPaths.p4ac8780} fill="var(--fill-0, #25524A)" fillRule="evenodd" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="2264" id="filter0_i_1_145" width="1720" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1_145" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="3147" id="filter1_f_1_145" width="3339" x="-393" y="213">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_1_145" stdDeviation="250" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="2954" id="filter2_f_1_145" width="2910" x="-836" y="-881">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_1_145" stdDeviation="250" />
          </filter>
          <clipPath id="clip0_1_145">
            <rect fill="white" height="2260" width="1720" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Download2() {
  return (
    <div className="relative shrink-0 w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 xl:w-60 xl:h-60" data-name="Download 2">
      <div className="absolute inset-0 rounded-full" data-name="Download 1">
        <img alt="CS Logo" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-full size-full" src={imgDownload1} />
      </div>
    </div>
  );
}

function Screenshot202505230942382() {
  return (
    <div className="relative shrink-0 w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 xl:w-60 xl:h-60" data-name="Screenshot 2025-05-23 094238 2">
      <div className="absolute inset-0 rounded-full" data-name="Screenshot 2025-05-23 094238 1">
        <img alt="Logo" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-full size-full" src={imgScreenshot202505230942381} />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative bg-[rgba(255,255,255,0.04)] rounded-[32px] sm:rounded-[48px] md:rounded-[64px] lg:rounded-[80px] xl:rounded-[92px] mx-auto max-w-7xl">
      <div className="box-border content-stretch flex flex-col sm:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-24 xl:gap-48 items-center justify-center overflow-clip px-6 py-10 sm:px-8 sm:py-12 md:px-12 md:py-16 lg:px-16 lg:py-20 xl:px-28 xl:py-36 relative rounded-[inherit]">
        <Download2 />
        <Screenshot202505230942382 />
      </div>
      <div aria-hidden="true" className="absolute border-[2px] sm:border-[3px] md:border-[4px] lg:border-[5px] xl:border-[5.29px] border-[rgba(255,255,255,0.01)] border-solid inset-0 pointer-events-none rounded-[inherit]" />
    </div>
  );
}

export default function LogoPage1() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 overflow-hidden" data-name="Logo-page">
      <LogoPage />
      <div className="relative z-10 w-full">
        <Frame6 />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_4px_4px_0px_inset_rgba(0,0,0,0.25)]" />
    </div>
  );
}