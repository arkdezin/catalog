import svgPaths from "./svg-e9lso9xwvd";
import clsx from "clsx";
import imgImageWithFallback from "figma:asset/ddaaa4f279cecc2bacc05c47d5a02f58ee775c6f.png";
import imgImage1 from "figma:asset/82fb0d74fdd082799fd161875f955838fd277dba.png";

function PrimitiveDiv({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[20px] relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] h-full items-start relative">{children}</div>
    </div>
  );
}

function PrimitiveButton3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[rgba(255,255,255,0)] opacity-50 relative rounded-[3.35544e+07px] shrink-0 size-[16px]">
      <div aria-hidden="true" className="absolute border border-[#fe7f2e] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[8px] px-px relative size-full">{children}</div>
    </div>
  );
}
type PrimitiveButton2Props = {
  additionalClassNames?: string;
};

function PrimitiveButton2({ children, additionalClassNames = "" }: React.PropsWithChildren<PrimitiveButton2Props>) {
  return (
    <div className={clsx("bg-[#fe7f2e] relative rounded-[4px] shrink-0 size-[16px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[#fe7f2e] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-px relative size-full">{children}</div>
    </div>
  );
}
type Container5Props = {
  additionalClassNames?: string;
};

function Container5({ children, additionalClassNames = "" }: React.PropsWithChildren<Container5Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">{children}</div>
    </div>
  );
}

function Container4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[20px] relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-full items-center relative">{children}</div>
    </div>
  );
}
type PrimitiveLabelProps = {
  additionalClassNames?: string;
};

function PrimitiveLabel({ children, additionalClassNames = "" }: React.PropsWithChildren<PrimitiveLabelProps>) {
  return (
    <div className={clsx("content-stretch flex h-[15px] items-center relative shrink-0", additionalClassNames)}>
      <p className="font-['Nunito:Medium',sans-serif] font-medium leading-[15px] relative shrink-0 text-[#090f13] text-[12px] text-nowrap">{children}</p>
    </div>
  );
}

function Wrapper11({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">{children}</div>
    </div>
  );
}

function Container3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-[398.667px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">{children}</div>
    </div>
  );
}
type Wrapper10Props = {
  additionalClassNames?: string;
};

function Wrapper10({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper10Props>) {
  return (
    <div className={clsx("bg-white place-self-stretch relative rounded-[8px] shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[rgba(35,61,77,0.13)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">{children}</div>
    </div>
  );
}

function Container2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow h-[44px] min-h-px min-w-px relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">{children}</div>
    </div>
  );
}
type Container1Props = {
  additionalClassNames?: string;
};

function Container1({ children, additionalClassNames = "" }: React.PropsWithChildren<Container1Props>) {
  return (
    <div className={clsx("absolute bg-[rgba(35,61,77,0.34)] left-0 rounded-[4px] size-[80px]", additionalClassNames)}>
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">{children}</div>
      <div aria-hidden="true" className="absolute border border-[rgba(35,61,77,0.13)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Wrapper9({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">{children}</div>
    </div>
  );
}
type Wrapper8Props = {
  additionalClassNames?: string;
};

function Wrapper8({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper8Props>) {
  return (
    <div className={clsx("h-[20px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">{children}</div>
    </div>
  );
}

function Wrapper7({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Nunito:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#090f13] text-[14px]">{children}</p>
    </div>
  );
}
type Wrapper6Props = {
  additionalClassNames?: string;
};

function Wrapper6({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper6Props>) {
  return (
    <div className={clsx("size-[9px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
        {children}
      </svg>
    </div>
  );
}
type Wrapper5Props = {
  additionalClassNames?: string;
};

function Wrapper5({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper5Props>) {
  return (
    <div className={clsx("basis-0 grow min-h-px min-w-px relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type Wrapper4Props = {
  additionalClassNames?: string;
};

function Wrapper4({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper4Props>) {
  return (
    <div className={clsx("size-[16px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[rgba(35,61,77,0.03)] h-[25.2px] relative rounded-[3.35544e+07px] shrink-0 w-[173.967px]">
      <div aria-hidden="true" className="absolute border border-[rgba(35,61,77,0.06)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[2.7px] py-px relative size-full">{children}</div>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex h-[20px] items-start overflow-clip relative shrink-0 w-[258.047px]">
      <p className="font-['Nunito:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#090f13] text-[14px] text-nowrap">{children}</p>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white opacity-50 relative rounded-[6px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(35,61,77,0.5)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[13px] py-[9px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type PrimitiveLabelText2Props = {
  text: string;
};

function PrimitiveLabelText2({ text }: PrimitiveLabelText2Props) {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="font-['Nunito:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#090f13] text-[14px] text-nowrap">{text}</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <Wrapper>
      <TaxonomyTreeSelectText text="Death Wish Coffee Co." />
      <Icon3 />
    </Wrapper>
  );
}
type TaxonomyTreeSelectTextProps = {
  text: string;
};

function TaxonomyTreeSelectText({ text }: TaxonomyTreeSelectTextProps) {
  return <Wrapper2>{text}</Wrapper2>;
}

function FieldConfidenceToggle() {
  return (
    <Wrapper3>
      <ButtonText1 text="Confident" />
      <ButtonText text="Not Confident" />
    </Wrapper3>
  );
}

function Icon3() {
  return (
    <Wrapper4 additionalClassNames="relative shrink-0">
      <g id="Icon" opacity="0.5">
        <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #090F13)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      </g>
    </Wrapper4>
  );
}
type ButtonText1Props = {
  text: string;
};

function ButtonText1({ text }: ButtonText1Props) {
  return (
    <div className="h-[19.8px] relative rounded-[3.35544e+07px] shrink-0 w-[74.025px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Wrapper6 additionalClassNames="absolute left-[7.2px] top-[5.4px]">
          <g clipPath="url(#clip0_58_4709)" id="Icon">
            <path d={svgPaths.p2fbaf1dc} id="Vector" stroke="var(--stroke-0, #233D4D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
            <path d={svgPaths.pea46d80} id="Vector_2" stroke="var(--stroke-0, #233D4D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
          </g>
          <defs>
            <clipPath id="clip0_58_4709">
              <rect fill="white" height="9" width="9" />
            </clipPath>
          </defs>
        </Wrapper6>
        <p className="absolute font-['Nunito:Regular',sans-serif] font-normal leading-[18px] left-[44.3px] text-[#233d4d] text-[12px] text-center text-nowrap top-[1.7px] translate-x-[-50%]">{text}</p>
      </div>
    </div>
  );
}
type ButtonTextProps = {
  text: string;
};

function ButtonText({ text }: ButtonTextProps) {
  return (
    <Wrapper5 additionalClassNames="h-[19.8px] rounded-[3.35544e+07px]">
      <Wrapper6 additionalClassNames="absolute left-[7.2px] top-[5.4px]">
        <g clipPath="url(#clip0_58_4704)" id="Icon">
          <path d={svgPaths.p352d0d00} id="Vector" stroke="var(--stroke-0, #233D4D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
          <path d="M4.5 3V4.5" id="Vector_2" stroke="var(--stroke-0, #233D4D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
          <path d="M4.5 6H4.50375" id="Vector_3" stroke="var(--stroke-0, #233D4D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
        </g>
        <defs>
          <clipPath id="clip0_58_4704">
            <rect fill="white" height="9" width="9" />
          </clipPath>
        </defs>
      </Wrapper6>
      <p className="absolute font-['Nunito:Regular',sans-serif] font-normal leading-[18px] left-[53.8px] text-[#233d4d] text-[12px] text-center text-nowrap top-[1.7px] translate-x-[-50%]">{text}</p>
    </Wrapper5>
  );
}
type Text2Props = {
  text: string;
  additionalClassNames?: string;
};

function Text2({ text, additionalClassNames = "" }: Text2Props) {
  return (
    <div className={clsx("bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative", additionalClassNames)}>
      <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#090f13] text-[14px] text-nowrap">{text}</p>
    </div>
  );
}
type PrimitiveLabelText1Props = {
  text: string;
  additionalClassNames?: string;
};

function PrimitiveLabelText1({ text, additionalClassNames = "" }: PrimitiveLabelText1Props) {
  return (
    <div className={clsx("h-[20px] relative shrink-0", additionalClassNames)}>
      <Text2 text={text} additionalClassNames="size-full" />
    </div>
  );
}

function Icon2() {
  return (
    <Wrapper1>
      <path d={svgPaths.p3de7e600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
    </Wrapper1>
  );
}

function PrimitiveButton1() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]">
      <div aria-hidden="true" className="absolute border border-[rgba(35,61,77,0.3)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}
type ContainerText4Props = {
  text: string;
};

function ContainerText4({ text }: ContainerText4Props) {
  return (
    <div className="bg-[rgba(43,127,255,0.1)] relative rounded-[3.35544e+07px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(43,127,255,0.2)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[6px] py-[3px] relative">
        <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[15px] relative shrink-0 text-[#2b7fff] text-[10px] w-[79px]">{text}</p>
      </div>
    </div>
  );
}
type PrimitiveButtonProps = {
  additionalClassNames?: string;
};

function PrimitiveButton({ additionalClassNames = "" }: PrimitiveButtonProps) {
  return (
    <div className={clsx("bg-[rgba(255,255,255,0)] relative rounded-[3.35544e+07px] shrink-0 size-[16px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[rgba(35,61,77,0.5)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}
type PrimitiveLabelTextProps = {
  text: string;
};

function PrimitiveLabelText({ text }: PrimitiveLabelTextProps) {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
      <p className="basis-0 font-['Nunito:Medium',sans-serif] font-medium grow leading-[1.2] min-h-px min-w-px relative shrink-0 text-[#090f13] text-[14px]">{text}</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[3px] size-[8px] top-[-4px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g clipPath="url(#clip0_58_4720)" id="Icon">
          <path d={svgPaths.p3e71aa30} fill="var(--fill-0, #FE7F2E)" id="Vector" stroke="var(--stroke-0, #FE7F2E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.666667" />
        </g>
        <defs>
          <clipPath id="clip0_58_4720">
            <rect fill="white" height="8" width="8" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
type ImageImageProps = {
  additionalClassNames?: string;
};

function ImageImage({ additionalClassNames = "" }: ImageImageProps) {
  return (
    <div className={clsx("absolute left-1/2 rounded-[3px] size-[78px] translate-x-[-50%]", additionalClassNames)}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[3px]">
        <img alt="" className="absolute left-[-1.28%] max-w-none size-[101.28%] top-0" src={imgImage1} />
      </div>
    </div>
  );
}
type ContainerText3Props = {
  text: string;
};

function ContainerText3({ text }: ContainerText3Props) {
  return (
    <div className="bg-[rgba(0,201,80,0.1)] relative rounded-[3.35544e+07px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(0,201,80,0.2)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[6px] py-[3px] relative">
        <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[15px] relative shrink-0 text-[#00c950] text-[10px] w-[79px]">{text}</p>
      </div>
    </div>
  );
}
type ContainerText2Props = {
  text: string;
  additionalClassNames?: string;
};

function ContainerText2({ text, additionalClassNames = "" }: ContainerText2Props) {
  return (
    <div className={clsx("h-[20px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Nunito:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#233d4d] text-[14px] text-nowrap">{text}</p>
      </div>
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[25px] w-[414px]">
      <p className="basis-0 font-['Nunito:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#090f13] text-[14px]">{text}</p>
    </div>
  );
}
type ContainerText1Props = {
  text: string;
};

function ContainerText1({ text }: ContainerText1Props) {
  return <Wrapper7>{text}</Wrapper7>;
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
      <p className="absolute font-['Nunito:Bold',sans-serif] font-bold leading-[15px] left-0 text-[#fe7f2e] text-[10px] text-nowrap top-[-1px]">{text}</p>
      <Icon />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[91.98px] size-[10px] top-[2.5px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_58_4733)" id="Icon">
          <path d="M6.25 1.25H8.75V3.75" id="Vector" stroke="var(--stroke-0, #FE7F2E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d="M4.16667 5.83333L8.75 1.25" id="Vector_2" stroke="var(--stroke-0, #FE7F2E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d={svgPaths.p215abe00} id="Vector_3" stroke="var(--stroke-0, #FE7F2E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
        <defs>
          <clipPath id="clip0_58_4733">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
type ContainerTextProps = {
  text: string;
};

function ContainerText({ text }: ContainerTextProps) {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Nunito:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#233d4d] text-[14px]">{text}</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[16px] relative shrink-0 w-[76.359px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]">
          <div aria-hidden="true" className="absolute border border-[rgba(35,61,77,0.13)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
        </div>
        <div className="basis-0 grow h-[16px] min-h-px min-w-px relative shrink-0">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
            <p className="font-['Nunito:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#233d4d] text-[12px] text-nowrap">{"Select All"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
type HeadingTextProps = {
  text: string;
  additionalClassNames?: string;
};

function HeadingText({ text, additionalClassNames = "" }: HeadingTextProps) {
  return (
    <div className={clsx("h-[24px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Nunito:SemiBold',sans-serif] font-semibold leading-[24px] left-0 text-[#090f13] text-[16px] text-nowrap top-0">{text}</p>
      </div>
    </div>
  );
}

export default function CatalogMaintenanceAdminSuggestion() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center px-[32px] py-0 relative size-full" data-name="Catalog Maintenance Admin - Suggestion">
      <div className="content-stretch flex flex-col gap-[10px] items-start pb-0 pt-[32px] px-0 relative shrink-0 w-full" data-name="Container">
        <div className="content-stretch flex flex-col gap-[4px] h-[60px] items-start relative shrink-0 w-[288.75px]" data-name="Header">
          <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="Heading 1">
            <p className="basis-0 font-['Nunito:Regular',sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[#090f13] text-[24px]">Suggest Modification</p>
          </div>
          <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
            <p className="absolute font-['Nunito:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#233d4d] text-[16px] text-nowrap top-0">Suggest modification and improvements</p>
          </div>
        </div>
        <div className="gap-[12px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_fit-content(100%))] relative shrink-0 w-[1400px]" data-name="Container">
          <Wrapper10 additionalClassNames="[grid-area:1_/_1]">
            <div className="content-stretch flex h-[37px] items-center justify-between pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Container">
              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(35,61,77,0.13)] border-solid inset-0 pointer-events-none" />
              <HeadingText text="Raw Data" additionalClassNames="w-[72.094px]" />
              <Container />
            </div>
            <div className="content-stretch flex flex-col gap-[16px] h-[704px] items-start relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex h-[104px] items-start relative shrink-0 w-full" data-name="Container">
                <Wrapper5 additionalClassNames="h-[104px]">
                  <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[414px]" data-name="Container">
                    <p className="basis-0 font-['Nunito:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#233d4d] text-[14px]">Image source</p>
                  </div>
                  <Container1 additionalClassNames="top-[24px]">
                    <div className="relative rounded-[3px] shrink-0 size-[78px]" data-name="ImageWithFallback">
                      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[3px] size-full" src={imgImageWithFallback} />
                    </div>
                  </Container1>
                  <div className="absolute h-[15px] left-[297px] top-[2px] w-[101.984px]" data-name="Link">
                    <p className="absolute font-['Nunito:Bold',sans-serif] font-bold leading-[15px] left-0 text-[#fe7f2e] text-[10px] text-nowrap top-[-1px]">Verify with Retailer</p>
                    <Icon />
                  </div>
                </Wrapper5>
              </div>
              <div className="content-stretch flex h-[44px] items-start relative shrink-0 w-full" data-name="Container">
                <Container2>
                  <ContainerText text="UPC" />
                  <ContainerText1 text="0081006334306" />
                </Container2>
              </div>
              <div className="content-stretch flex h-[44px] items-start relative shrink-0 w-full" data-name="Container">
                <Container2>
                  <ContainerText text="Description" />
                  <ContainerText1 text="Death Wish Coffee Co.® Medium Roast Ground Coffee" />
                </Container2>
              </div>
              <div className="content-stretch flex h-[44px] items-start relative shrink-0 w-full" data-name="Container">
                <Container2>
                  <ContainerText text="Taxonomy" />
                  <Wrapper7>{`Food & Beverage > Coffee > Whole Bean`}</Wrapper7>
                </Container2>
              </div>
              <div className="content-stretch flex h-[44px] items-start relative shrink-0 w-full" data-name="Container">
                <Container2>
                  <ContainerText text="Brand" />
                  <ContainerText1 text="Death Wish Coffee Co." />
                </Container2>
              </div>
              <div className="content-stretch flex h-[44px] items-start relative shrink-0 w-full" data-name="Container">
                <Container2>
                  <ContainerText text="Size" />
                  <ContainerText1 text="10" />
                </Container2>
              </div>
              <div className="content-stretch flex h-[44px] items-start relative shrink-0 w-full" data-name="Container">
                <Container2>
                  <ContainerText text="UOM" />
                  <ContainerText1 text="oz" />
                </Container2>
              </div>
              <div className="content-stretch flex h-[44px] items-start relative shrink-0 w-full" data-name="Container">
                <Container2>
                  <ContainerText text="Manufacturer" />
                  <ContainerText1 text="Death Wish Coffee Co." />
                </Container2>
              </div>
              <div className="content-stretch flex h-[44px] items-start relative shrink-0 w-full" data-name="Container">
                <Container2>
                  <ContainerText text="Organic" />
                  <ContainerText1 text="Yes" />
                </Container2>
              </div>
              <div className="content-stretch flex h-[44px] items-start relative shrink-0 w-full" data-name="Container">
                <Container2>
                  <ContainerText text="PL" />
                  <ContainerText1 text="No" />
                </Container2>
              </div>
            </div>
          </Wrapper10>
          <div className="[grid-area:1_/_2] bg-white relative rounded-[8px] shrink-0" data-name="AiSuggestedColumn">
            <div aria-hidden="true" className="absolute border border-[rgba(35,61,77,0.13)] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
              <div className="content-stretch flex h-[37px] items-center justify-between pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Container">
                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(35,61,77,0.13)] border-solid inset-0 pointer-events-none" />
                <HeadingText text="AI Suggested" additionalClassNames="w-[98.422px]" />
                <Container />
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
                <div className="content-stretch flex h-[105px] items-start relative shrink-0 w-full" data-name="Container">
                  <Wrapper5 additionalClassNames="h-[105px]">
                    <div className="absolute content-stretch flex gap-[8px] h-[21px] items-center left-0 top-0 w-[138.781px]" data-name="Container">
                      <ContainerText2 text="Image" additionalClassNames="w-[38.656px]" />
                      <ContainerText3 text="Confidence: 98%" />
                    </div>
                    <Container1 additionalClassNames="top-[25px]">
                      <div className="h-[78px] overflow-clip relative shrink-0 w-full" data-name="ImageWithFallback">
                        <ImageImage additionalClassNames="top-0" />
                      </div>
                    </Container1>
                  </Wrapper5>
                </div>
                <div className="content-stretch flex h-[45px] items-start relative shrink-0 w-full" data-name="Container">
                  <Wrapper5 additionalClassNames="h-[45px]">
                    <div className="absolute content-stretch flex gap-[8px] h-[21px] items-center left-0 top-0 w-[128.5px]" data-name="Container">
                      <ContainerText2 text="UPC" additionalClassNames="w-[28.375px]" />
                      <ContainerText3 text="Confidence: 99%" />
                    </div>
                    <Text1 text="8081006334306" />
                  </Wrapper5>
                </div>
                <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
                  <Wrapper11>
                    <div className="content-stretch flex gap-[140.516px] h-[21px] items-center relative shrink-0 w-full" data-name="Container">
                      <Wrapper9>
                        <ContainerText2 text="Description" additionalClassNames="w-[71.375px]" />
                        <div className="bg-[rgba(255,105,0,0.1)] relative rounded-[3.35544e+07px] shrink-0" data-name="Container">
                          <div aria-hidden="true" className="absolute border border-[rgba(255,105,0,0.2)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[6px] py-[3px] relative">
                            <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[15px] relative shrink-0 text-[#ff6900] text-[10px] w-[79px]">Confidence: 88%</p>
                          </div>
                        </div>
                      </Wrapper9>
                      <div className="h-[15px] relative shrink-0 w-[101.984px]" data-name="Link">
                        <Text text="Verify with Retailer" />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Primitive.div">
                      <div className="content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[4px] shrink-0 w-[398.667px]" data-name="AiSuggestedColumn">
                        <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start pb-px pt-[8px] px-px relative rounded-[3.35544e+07px] shrink-0 size-[16px]" data-name="Primitive.button">
                          <div aria-hidden="true" className="absolute border border-[#fe7f2e] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
                          <div className="h-0 relative shrink-0 w-full" data-name="Primitive.span">
                            <Icon1 />
                          </div>
                        </div>
                        <PrimitiveLabelText text="Death Wish Coffee Co.® Medium Roast Ground Coffee - Premium Quality" />
                      </div>
                      <div className="content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[4px] shrink-0 w-[398.667px]" data-name="AiSuggestedColumn">
                        <PrimitiveButton />
                        <PrimitiveLabelText text="Death Wish Coffee Co.® Roast Ground Coffee - Premium Quality, Certified Authentic" />
                      </div>
                      {[...Array(2).keys()].map((_, i) => (
                        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[4px] shrink-0 w-[398.667px]" data-name="AiSuggestedColumn">
                          <PrimitiveButton />
                          <PrimitiveLabelText text="Death Wish Coffee Co.® Medium Roast Ground Coffee - Premium Quality, Certified Authentic" />
                        </div>
                      ))}
                    </div>
                  </Wrapper11>
                </div>
                <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
                  <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative w-full">
                      <div className="content-stretch flex gap-[147.281px] h-[21px] items-center relative shrink-0 w-full" data-name="Container">
                        <Wrapper9>
                          <ContainerText2 text="Taxonomy" additionalClassNames="w-[64.609px]" />
                          <ContainerText4 text="Confidence: 92%" />
                        </Wrapper9>
                        <div className="h-[15px] relative shrink-0 w-[101.984px]" data-name="Link">
                          <Text text="Verify with Retailer" />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Primitive.div">
                        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[4px] shrink-0 w-[398.667px]" data-name="AiSuggestedColumn">
                          <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start pb-px pt-[8px] px-px relative rounded-[3.35544e+07px] shrink-0 size-[16px]" data-name="Primitive.button">
                            <div aria-hidden="true" className="absolute border border-[#fe7f2e] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
                            <div className="h-0 relative shrink-0 w-full" data-name="Primitive.span">
                              <Icon1 />
                            </div>
                          </div>
                          <PrimitiveLabel additionalClassNames="w-[342.219px]">{`Food & Beverage > Coffee > Whole Bean > Premium Collection`}</PrimitiveLabel>
                        </div>
                        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[4px] shrink-0 w-[398.667px]" data-name="AiSuggestedColumn">
                          <PrimitiveButton />
                          <PrimitiveLabel additionalClassNames="w-[331.828px]">{`Food & Beverage > Coffee > Whole Bean > Organic Selection`}</PrimitiveLabel>
                        </div>
                        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[4px] shrink-0 w-[398.667px]" data-name="AiSuggestedColumn">
                          <PrimitiveButton />
                          <PrimitiveLabel additionalClassNames="w-[238.844px]">{`Food & Beverage > Groceries > Whole Bean`}</PrimitiveLabel>
                        </div>
                        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[4px] shrink-0 w-[398.667px]" data-name="AiSuggestedColumn">
                          <PrimitiveButton />
                          <PrimitiveLabel additionalClassNames="w-[289.484px]">{`Private Label > Death Wish Coffee Co. > Whole Bean`}</PrimitiveLabel>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
                  <Wrapper11>
                    <div className="content-stretch flex gap-[173.938px] h-[21px] items-center relative shrink-0 w-full" data-name="Container">
                      <Wrapper9>
                        <ContainerText2 text="Brand" additionalClassNames="w-[37.953px]" />
                        <ContainerText3 text="Confidence: 97%" />
                      </Wrapper9>
                      <div className="h-[15px] relative shrink-0 w-[101.984px]" data-name="Link">
                        <Text text="Verify with Retailer" />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Primitive.div">
                      <div className="content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[4px] shrink-0 w-[398.667px]" data-name="AiSuggestedColumn">
                        <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start pb-px pt-[8px] px-px relative rounded-[3.35544e+07px] shrink-0 size-[16px]" data-name="Primitive.button">
                          <div aria-hidden="true" className="absolute border border-[#fe7f2e] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
                          <div className="h-0 relative shrink-0 w-full" data-name="Primitive.span">
                            <Icon1 />
                          </div>
                        </div>
                        <PrimitiveLabelText text="Death Wish Coffee Co." />
                      </div>
                      {[...Array(3).keys()].map((_, i) => (
                        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[4px] shrink-0 w-[398.667px]" data-name="AiSuggestedColumn">
                          <PrimitiveButton />
                          <PrimitiveLabelText text="Death Wish Coffee Co." />
                        </div>
                      ))}
                    </div>
                  </Wrapper11>
                </div>
                <div className="content-stretch flex h-[45px] items-start relative shrink-0 w-full" data-name="Container">
                  <Wrapper5 additionalClassNames="h-[45px]">
                    <div className="absolute content-stretch flex gap-[8px] h-[21px] items-center left-0 top-0 w-[125.781px]" data-name="Container">
                      <ContainerText2 text="Size" additionalClassNames="w-[25.656px]" />
                      <ContainerText3 text="Confidence: 96%" />
                    </div>
                    <Text1 text="10" />
                  </Wrapper5>
                </div>
                <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
                  <Container3>
                    <div className="content-stretch flex gap-[8px] h-[21px] items-center relative shrink-0 w-[176.938px]" data-name="Container">
                      <ContainerText2 text="UOM" additionalClassNames="w-[76.813px]" />
                      <ContainerText3 text="Confidence: 95%" />
                    </div>
                    <div className="content-stretch flex flex-col h-[132px] items-start relative shrink-0 w-full" data-name="Primitive.div">
                      <div className="content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[4px] shrink-0 w-[398.667px]" data-name="AiSuggestedColumn">
                        <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start pb-px pt-[8px] px-px relative rounded-[3.35544e+07px] shrink-0 size-[16px]" data-name="Primitive.button">
                          <div aria-hidden="true" className="absolute border border-[#fe7f2e] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
                          <div className="h-0 relative shrink-0 w-full" data-name="Primitive.span">
                            <Icon1 />
                          </div>
                        </div>
                        <PrimitiveLabelText text="oz" />
                      </div>
                      <div className="content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[4px] shrink-0 w-[398.667px]" data-name="AiSuggestedColumn">
                        <PrimitiveButton />
                        <PrimitiveLabelText text="oz" />
                      </div>
                      <div className="content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[4px] shrink-0 w-[398.667px]" data-name="AiSuggestedColumn">
                        <PrimitiveButton />
                        <PrimitiveLabelText text="gm" />
                      </div>
                      <div className="content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[4px] shrink-0 w-[398.667px]" data-name="AiSuggestedColumn">
                        <PrimitiveButton />
                        <PrimitiveLabelText text="lb" />
                      </div>
                    </div>
                  </Container3>
                </div>
                <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
                  <Container3>
                    <div className="content-stretch flex gap-[8px] h-[21px] items-center relative shrink-0 w-[183.969px]" data-name="Container">
                      <ContainerText2 text="Manufacturer" additionalClassNames="w-[83.844px]" />
                      <ContainerText4 text="Confidence: 94%" />
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Primitive.div">
                      <div className="content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[4px] shrink-0 w-[398.667px]" data-name="AiSuggestedColumn">
                        <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start pb-px pt-[8px] px-px relative rounded-[3.35544e+07px] shrink-0 size-[16px]" data-name="Primitive.button">
                          <div aria-hidden="true" className="absolute border border-[#fe7f2e] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
                          <div className="h-0 relative shrink-0 w-full" data-name="Primitive.span">
                            <Icon1 />
                          </div>
                        </div>
                        <PrimitiveLabelText text="Death Wish Coffee Co." />
                      </div>
                      {[...Array(3).keys()].map((_, i) => (
                        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[4px] shrink-0 w-[398.667px]" data-name="AiSuggestedColumn">
                          <PrimitiveButton />
                          <PrimitiveLabelText text="Death Wish Coffee Co." />
                        </div>
                      ))}
                    </div>
                  </Container3>
                </div>
                <div className="content-stretch flex h-[45px] items-start relative shrink-0 w-full" data-name="Container">
                  <Wrapper5 additionalClassNames="h-[45px]">
                    <div className="absolute content-stretch flex gap-[8px] h-[21px] items-center left-0 top-0 w-[149.094px]" data-name="Container">
                      <ContainerText2 text="Organic" additionalClassNames="w-[48.969px]" />
                      <ContainerText4 text="Confidence: 91%" />
                    </div>
                    <Text1 text="Yes" />
                  </Wrapper5>
                </div>
                <div className="content-stretch flex h-[45px] items-start relative shrink-0 w-full" data-name="Container">
                  <Wrapper5 additionalClassNames="h-[45px]">
                    <div className="absolute content-stretch flex gap-[8px] h-[21px] items-center left-0 top-0 w-[116.594px]" data-name="Container">
                      <ContainerText2 text="PL" additionalClassNames="w-[16.469px]" />
                      <ContainerText4 text="Confidence: 93%" />
                    </div>
                    <Text1 text="No" />
                  </Wrapper5>
                </div>
              </div>
            </div>
          </div>
          <Wrapper10 additionalClassNames="[grid-area:1_/_3]">
            <div className="h-[37px] relative shrink-0 w-full" data-name="Heading 2">
              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(35,61,77,0.13)] border-solid inset-0 pointer-events-none" />
              <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[-0.33px] top-0">
                <p className="font-['Nunito:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#090f13] text-[16px] text-nowrap">{`Catalog Data `}</p>
                <div className="bg-[#00a63e] content-stretch flex items-center px-[12px] py-px relative rounded-[3.35544e+07px] shrink-0" data-name="Button">
                  <p className="font-['Nunito:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-center text-nowrap text-white">Live</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
                <Container5 additionalClassNames="h-[28px] w-[442px]">
                  <Container4>
                    <PrimitiveButton1 />
                    <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#233d4d] text-[14px] text-nowrap">Image</p>
                  </Container4>
                  <Wrapper3>
                    <div className="relative rounded-[3.35544e+07px] shrink-0" data-name="Button">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2px] items-center px-[3px] py-0 relative">
                        <Wrapper6 additionalClassNames="relative shrink-0">
                          <g clipPath="url(#clip0_58_4713)" id="Icon">
                            <path d={svgPaths.p13b41080} id="Vector" stroke="var(--stroke-0, #233D4D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
                            <path d={svgPaths.pea46d80} id="Vector_2" stroke="var(--stroke-0, #233D4D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
                          </g>
                          <defs>
                            <clipPath id="clip0_58_4713">
                              <rect fill="white" height="9" width="9" />
                            </clipPath>
                          </defs>
                        </Wrapper6>
                        <p className="font-['Nunito:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#233d4d] text-[12px] text-center text-nowrap">Confident</p>
                      </div>
                    </div>
                    <div className="basis-0 grow min-h-px min-w-px relative rounded-[3.35544e+07px] shrink-0" data-name="Button">
                      <div className="flex flex-row items-center size-full">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[7px] py-0 relative w-full">
                          <Wrapper6 additionalClassNames="relative shrink-0">
                            <g clipPath="url(#clip0_58_4728)" id="Icon">
                              <path d={svgPaths.p352d0d00} id="Vector" stroke="var(--stroke-0, #233D4D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
                              <path d="M4.5 3V4.5" id="Vector_2" stroke="var(--stroke-0, #233D4D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
                              <path d="M4.5 6H4.50375" id="Vector_3" stroke="var(--stroke-0, #233D4D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
                            </g>
                            <defs>
                              <clipPath id="clip0_58_4728">
                                <rect fill="white" height="9" width="9" />
                              </clipPath>
                            </defs>
                          </Wrapper6>
                          <p className="font-['Nunito:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#233d4d] text-[12px] text-center text-nowrap">Not Confident</p>
                        </div>
                      </div>
                    </div>
                  </Wrapper3>
                </Container5>
                <div className="h-[80px] opacity-50 relative shrink-0 w-full" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative size-full">
                    <div className="bg-[rgba(35,61,77,0.34)] relative rounded-[4px] shrink-0 size-[80px]" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
                        <div className="relative shrink-0 size-[78px]" data-name="ImageWithFallback">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
                            <ImageImage additionalClassNames="top-1/2 translate-y-[-50%]" />
                          </div>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[rgba(35,61,77,0.13)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    </div>
                    <div className="h-[16px] opacity-50 relative rounded-[6px] shrink-0 w-[116.031px]" data-name="Button">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center justify-center relative size-full">
                        <Wrapper1>
                          <path d={svgPaths.p34aacb00} id="Vector" stroke="var(--stroke-0, #FE7F2E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                          <path d={svgPaths.p2ed38dc0} id="Vector_2" stroke="var(--stroke-0, #FE7F2E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                          <path d="M7 1.75V8.75" id="Vector_3" stroke="var(--stroke-0, #FE7F2E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                        </Wrapper1>
                        <div className="h-[16px] relative shrink-0 w-[76.031px]" data-name="SuggestModification">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
                            <p className="font-['Nunito:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#fe7f2e] text-[12px] text-center text-nowrap">Upload Image</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Container">
                <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-[620px]" data-name="Container">
                  <PrimitiveButton2 additionalClassNames="opacity-50">
                    <div className="content-stretch flex h-[14px] items-center justify-center relative shrink-0 w-full" data-name="Primitive.span">
                      <Icon2 />
                    </div>
                  </PrimitiveButton2>
                  <PrimitiveLabelText1 text="UPC" additionalClassNames="opacity-50 w-[28.922px]" />
                </div>
                <div className="bg-[rgba(35,61,77,0.17)] h-[36px] opacity-50 relative rounded-[6px] shrink-0 w-full" data-name="Input">
                  <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
                      <p className="font-['Nunito:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#233d4d] text-[14px] text-nowrap">0081006334306</p>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[rgba(35,61,77,0.5)] border-solid inset-0 pointer-events-none rounded-[6px]" />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
                <Container5 additionalClassNames="h-[28px] w-full">
                  <Container4>
                    <PrimitiveButton2>
                      <div className="content-stretch flex h-[14px] items-center justify-center relative shrink-0 w-full" data-name="Primitive.span">
                        <Icon2 />
                      </div>
                    </PrimitiveButton2>
                    <PrimitiveLabelText1 text="Description" additionalClassNames="w-[74.469px]" />
                  </Container4>
                  <Wrapper3>
                    <div className="bg-[#00a63e] relative rounded-[3.35544e+07px] shrink-0" data-name="Button">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2px] items-center px-[4px] py-px relative">
                        <Wrapper6 additionalClassNames="relative shrink-0">
                          <g clipPath="url(#clip0_58_4700)" id="Icon">
                            <path d={svgPaths.p2fbaf1dc} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
                            <path d={svgPaths.pea46d80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
                          </g>
                          <defs>
                            <clipPath id="clip0_58_4700">
                              <rect fill="white" height="9" width="9" />
                            </clipPath>
                          </defs>
                        </Wrapper6>
                        <p className="font-['Nunito:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-center text-nowrap text-white">Confident</p>
                      </div>
                    </div>
                    <ButtonText text="Not Confident" />
                  </Wrapper3>
                </Container5>
                <div className="bg-white h-[80px] relative rounded-[6px] shrink-0 w-full" data-name="Textarea">
                  <div className="overflow-clip rounded-[inherit] size-full">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[8px] relative size-full">
                      <p className="font-['Nunito:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#233d4d] text-[14px] text-nowrap">Death Wish Coffee Co.® Medium Roast Ground Coffee</p>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[rgba(35,61,77,0.5)] border-solid inset-0 pointer-events-none rounded-[6px]" />
                </div>
                <div className="h-[81px] relative shrink-0 w-full" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
                    <div className="h-[15px] relative shrink-0 w-full" data-name="Primitive.label">
                      <p className="absolute font-['Nunito:Bold',sans-serif] font-bold leading-[15px] left-0 text-[#fe7f2e] text-[10px] text-nowrap top-[-1px] tracking-[0.5px] uppercase">Reason for modification</p>
                      <div className="absolute content-stretch flex h-[15px] items-start left-[159.91px] top-0 w-[5.031px]" data-name="SuggestModification">
                        <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[15px] relative shrink-0 text-[#f8d7da] text-[10px] text-nowrap tracking-[0.5px] uppercase">*</p>
                      </div>
                    </div>
                    <div className="bg-[rgba(255,247,237,0.1)] h-[60px] relative rounded-[6px] shrink-0 w-full" data-name="Textarea">
                      <div className="overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex items-start px-[12px] py-[8px] relative size-full">
                          <p className="font-['Nunito:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#233d4d] text-[14px] text-nowrap">Provide a reason for changing description...</p>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[rgba(254,127,46,0.3)] border-solid inset-0 pointer-events-none rounded-[6px]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
                <Container5 additionalClassNames="h-[28px] w-full">
                  <Container4>
                    <PrimitiveButton1 />
                    <PrimitiveLabelText1 text="Taxonomy" additionalClassNames="w-[66.625px]" />
                  </Container4>
                  <Wrapper3>
                    <ButtonText1 text="Confident" />
                    <div className="bg-[#f54900] relative rounded-[3.35544e+07px] shrink-0" data-name="Button">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip px-[4px] py-px relative rounded-[inherit]">
                        <Wrapper6 additionalClassNames="relative shrink-0">
                          <g clipPath="url(#clip0_58_4695)" id="Icon">
                            <path d={svgPaths.p352d0d00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
                            <path d="M4.5 3V4.5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
                            <path d="M4.5 6H4.50375" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
                          </g>
                          <defs>
                            <clipPath id="clip0_58_4695">
                              <rect fill="white" height="9" width="9" />
                            </clipPath>
                          </defs>
                        </Wrapper6>
                        <p className="font-['Nunito:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-center text-nowrap text-white">Not Confident</p>
                      </div>
                    </div>
                  </Wrapper3>
                </Container5>
                <Wrapper>
                  <Wrapper2>{`Food & Beverage > Coffee > Whole Bean`}</Wrapper2>
                  <Icon3 />
                </Wrapper>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
                <Container5 additionalClassNames="h-[28px] w-full">
                  <Container4>
                    <PrimitiveButton1 />
                    <div className="h-[20px] relative shrink-0" data-name="Primitive.label">
                      <Text2 text="Brand" additionalClassNames="h-full" />
                    </div>
                  </Container4>
                  <FieldConfidenceToggle />
                </Container5>
                <Button />
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
                <Container5 additionalClassNames="h-[28px] w-full">
                  <Container4>
                    <PrimitiveButton1 />
                    <div className="h-[20px] relative shrink-0" data-name="Primitive.label">
                      <Text2 text="Size" additionalClassNames="h-full" />
                    </div>
                  </Container4>
                  <FieldConfidenceToggle />
                </Container5>
                <Wrapper>
                  <TaxonomyTreeSelectText text="10" />
                  <Icon3 />
                </Wrapper>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
                <Container5 additionalClassNames="h-[28px] w-full">
                  <Container4>
                    <PrimitiveButton1 />
                    <div className="h-[20px] relative shrink-0" data-name="Primitive.label">
                      <Text2 text="UOM" additionalClassNames="h-full" />
                    </div>
                  </Container4>
                  <FieldConfidenceToggle />
                </Container5>
                <Wrapper>
                  <TaxonomyTreeSelectText text="Oz" />
                  <Icon3 />
                </Wrapper>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
                <Container5 additionalClassNames="h-[28px] w-full">
                  <Container4>
                    <PrimitiveButton1 />
                    <PrimitiveLabelText1 text="Manufacturer" additionalClassNames="w-[87.375px]" />
                  </Container4>
                  <FieldConfidenceToggle />
                </Container5>
                <Button />
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
                <Container5 additionalClassNames="h-[24px] w-full">
                  <Container4>
                    <PrimitiveButton1 />
                    <div className="h-[20px] relative shrink-0" data-name="Primitive.label">
                      <Text2 text="Organic" additionalClassNames="h-full" />
                    </div>
                  </Container4>
                  <FieldConfidenceToggle />
                </Container5>
                <PrimitiveDiv>
                  <Wrapper8 additionalClassNames="w-[45.547px]">
                    <PrimitiveButton3>
                      <div className="h-0 relative shrink-0 w-full" data-name="Primitive.span">
                        <Icon1 />
                      </div>
                    </PrimitiveButton3>
                    <PrimitiveLabelText2 text="Yes" />
                  </Wrapper8>
                  <Wrapper8 additionalClassNames="w-[42.219px]">
                    <PrimitiveButton additionalClassNames="opacity-50" />
                    <PrimitiveLabelText2 text="No" />
                  </Wrapper8>
                </PrimitiveDiv>
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
                <Container5 additionalClassNames="h-[24px] w-full">
                  <Container4>
                    <PrimitiveButton1 />
                    <PrimitiveLabelText1 text="PL" additionalClassNames="w-[17px]" />
                  </Container4>
                  <FieldConfidenceToggle />
                </Container5>
                <PrimitiveDiv>
                  <Wrapper8 additionalClassNames="w-[45.547px]">
                    <PrimitiveButton additionalClassNames="opacity-50" />
                    <PrimitiveLabelText2 text="Yes" />
                  </Wrapper8>
                  <Wrapper8 additionalClassNames="w-[42.219px]">
                    <PrimitiveButton3>
                      <div className="h-0 relative shrink-0 w-full" data-name="Primitive.span">
                        <Icon1 />
                      </div>
                    </PrimitiveButton3>
                    <PrimitiveLabelText2 text="No" />
                  </Wrapper8>
                </PrimitiveDiv>
              </div>
            </div>
          </Wrapper10>
        </div>
        <div className="content-stretch flex gap-[12px] items-center justify-end pb-[16px] pt-[17px] px-0 relative shrink-0 w-full" data-name="Container">
          <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(35,61,77,0.13)] border-solid inset-0 pointer-events-none" />
          <div className="bg-white h-[36px] relative rounded-[6px] shrink-0 w-[88.594px]" data-name="Button">
            <div aria-hidden="true" className="absolute border border-[rgba(35,61,77,0.13)] border-solid inset-0 pointer-events-none rounded-[6px]" />
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <Wrapper4 additionalClassNames="absolute left-[13px] top-[10px]">
                <g id="Icon">
                  <path d={svgPaths.p203476e0} id="Vector" stroke="var(--stroke-0, #090F13)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M12.6667 8H3.33333" id="Vector_2" stroke="var(--stroke-0, #090F13)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </g>
              </Wrapper4>
              <p className="absolute font-['Nunito:Medium',sans-serif] font-medium leading-[20px] left-[60.5px] text-[#090f13] text-[14px] text-center text-nowrap top-[7px] translate-x-[-50%]">Back</p>
            </div>
          </div>
          <div className="bg-[#fe7f2e] h-[36px] opacity-50 relative rounded-[6px] shrink-0 w-[163.422px]" data-name="Button">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[24px] py-[8px] relative size-full">
              <p className="font-['Nunito:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-center text-nowrap text-white">Send for Approval</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}