import svgPaths from "./svg-2rkbx225bd";
import clsx from "clsx";
type Container2Props = {
  additionalClassNames?: string;
};

function Container2({ children, additionalClassNames = "" }: React.PropsWithChildren<Container2Props>) {
  return (
    <div className={clsx("relative rounded-[6px] shrink-0 size-[40px]", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-full">{children}</div>
    </div>
  );
}
type Container1Props = {
  additionalClassNames?: string;
};

function Container1({ children, additionalClassNames = "" }: React.PropsWithChildren<Container1Props>) {
  return (
    <div className={clsx("bg-[rgba(255,255,255,0)] h-[162px] justify-self-stretch relative rounded-[8px] shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[rgba(35,61,77,0.13)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_2px_7px_0px_rgba(0,0,0,0.08)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start pb-px pt-[25px] px-[25px] relative size-full">{children}</div>
      </div>
    </div>
  );
}
type Icon2Vector1Props = {
  additionalClassNames?: string;
};

function Icon2Vector1({ additionalClassNames = "" }: Icon2Vector1Props) {
  return (
    <div className={clsx("absolute left-[54.17%] right-[12.5%]", additionalClassNames)}>
      <div className="absolute inset-[-1px_-12.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 2">
          <path d="M1 1H9" id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}
type Icon2VectorProps = {
  additionalClassNames?: string;
};

function Icon2Vector({ additionalClassNames = "" }: Icon2VectorProps) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-25%_-16.67%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 6">
          <path d="M1 3L3 5L7 1" id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}
type ContainerText1Props = {
  text: string;
};

function ContainerText1({ text }: ContainerText1Props) {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#233d4d] text-[14px]">{text}</p>
    </div>
  );
}
type ContainerTextProps = {
  text: string;
};

function ContainerText({ text }: ContainerTextProps) {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Arial:Bold',sans-serif] grow leading-[32px] min-h-px min-w-px not-italic relative shrink-0 text-[#090f13] text-[32px]">{text}</p>
    </div>
  );
}

export default function Container() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(5,_minmax(0px,_1fr))] grid-rows-[repeat(1,_fit-content(100%))] relative size-full" data-name="Container">
      <Container1 additionalClassNames="[grid-area:1_/_1]">
        <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full" data-name="Container">
          <Container2 additionalClassNames="bg-[rgba(43,127,255,0.2)]">
            <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
              <div className="absolute inset-[8.34%_12.5%]" data-name="Vector">
                <div className="absolute inset-[-5%_-5.56%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 21.9959">
                    <path d={svgPaths.p1b524c20} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-[8.33%] left-1/2 right-1/2 top-1/2" data-name="Vector">
                <div className="absolute inset-[-10%_-1px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 12">
                    <path d="M1 11V1" id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-1/2 left-[13.71%] right-[13.71%] top-[29.17%]" data-name="Vector">
                <div className="absolute inset-[-20%_-5.74%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.4203 7.00017">
                    <path d={svgPaths.p355b9480} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[17.79%_31.25%_60.75%_31.25%]" data-name="Vector">
                <div className="absolute inset-[-19.42%_-11.11%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0003 7.15034">
                    <path d={svgPaths.p125b5900} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </Container2>
        </div>
        <ContainerText text="12,845" />
        <ContainerText1 text="Total Products" />
      </Container1>
      <Container1 additionalClassNames="[grid-area:1_/_2]">
        <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full" data-name="Container">
          <Container2 additionalClassNames="bg-[rgba(240,177,0,0.2)]">
            <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
              <div className="absolute inset-[8.33%]" data-name="Vector">
                <div className="absolute inset-[-5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                    <path d={svgPaths.pb60700} id="Vector" stroke="var(--stroke-0, #F0B100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-1/2 left-1/2 right-1/2 top-[33.33%]" data-name="Vector">
                <div className="absolute inset-[-25%_-1px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 6">
                    <path d="M1 1V5" id="Vector" stroke="var(--stroke-0, #F0B100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-[33.33%] left-1/2 right-[49.96%] top-[66.67%]" data-name="Vector">
                <div className="absolute inset-[-1px_-9999.77%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.01 2">
                    <path d="M1 1H1.01" id="Vector" stroke="var(--stroke-0, #F0B100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </Container2>
          <div className="h-[16px] shrink-0 w-[29.141px]" data-name="Text" />
        </div>
        <ContainerText text="156" />
        <ContainerText1 text="Pending Review" />
      </Container1>
      <Container1 additionalClassNames="[grid-area:1_/_3]">
        <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full" data-name="Container">
          <Container2 additionalClassNames="bg-[rgba(0,201,80,0.2)]">
            <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
              <Icon2Vector additionalClassNames="inset-[62.5%_62.5%_20.83%_12.5%]" />
              <Icon2Vector additionalClassNames="inset-[20.83%_62.5%_62.5%_12.5%]" />
              <Icon2Vector1 additionalClassNames="bottom-3/4 top-1/4" />
              <Icon2Vector1 additionalClassNames="bottom-1/2 top-1/2" />
              <Icon2Vector1 additionalClassNames="bottom-1/4 top-3/4" />
            </div>
          </Container2>
        </div>
        <ContainerText text="42" />
        <ContainerText1 text="Approved Today" />
      </Container1>
      <Container1 additionalClassNames="[grid-area:1_/_4]">
        <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full" data-name="Container">
          <div className="bg-[rgba(254,127,46,0.2)] relative rounded-[6px] shrink-0 size-[40px]" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] size-full" />
          </div>
        </div>
        <ContainerText text="23" />
        <ContainerText1 text="Need Clarification" />
      </Container1>
      <Container1 additionalClassNames="[grid-area:1_/_5]">
        <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full" data-name="Container">
          <Container2 additionalClassNames="bg-[rgba(254,127,46,0.2)]">
            <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
              <div className="absolute inset-[29.17%_8.33%]" data-name="Vector">
                <div className="absolute inset-[-10%_-5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 12">
                    <path d="M21 1L12.5 9.5L7.5 4.5L1 11" id="Vector" stroke="var(--stroke-0, #FE7F2E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[29.17%_8.33%_45.83%_66.67%]" data-name="Vector">
                <div className="absolute inset-[-16.67%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                    <path d="M1 1H7V7" id="Vector" stroke="var(--stroke-0, #FE7F2E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </Container2>
        </div>
        <ContainerText text="98.2%" />
        <ContainerText1 text="Data Quality" />
      </Container1>
    </div>
  );
}