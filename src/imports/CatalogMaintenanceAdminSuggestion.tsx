import svgPaths from "./svg-onps8hv89b";
import clsx from "clsx";
import imgImageWithFallback from "figma:asset/ddaaa4f279cecc2bacc05c47d5a02f58ee775c6f.png";
type IconProps = {
  additionalClassNames?: string;
};

function Icon({ children, additionalClassNames = "" }: React.PropsWithChildren<IconProps>) {
  return (
    <div className={clsx("absolute size-[16px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}
type Container1Props = {
  additionalClassNames?: string;
};

function Container1({ children, additionalClassNames = "" }: React.PropsWithChildren<Container1Props>) {
  return (
    <div className={clsx("bg-white place-self-stretch relative rounded-[8px] shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[rgba(35,61,77,0.13)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-px pt-[17px] px-[17px] relative size-full">{children}</div>
    </div>
  );
}

function Container({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow h-[44px] min-h-px min-w-px relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">{children}</div>
    </div>
  );
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div className={clsx("basis-0 grow min-h-px min-w-px relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Nunito:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#090f13] text-[14px]">{children}</p>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("h-[16px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">{children}</div>
    </div>
  );
}

function ProductDetail1() {
  return (
    <Wrapper additionalClassNames="w-[42.219px]">
      <PrimitiveButton1 />
      <PrimitiveLabelText text="No" />
    </Wrapper>
  );
}

function ProductDetail() {
  return (
    <Wrapper additionalClassNames="w-[45.547px]">
      <PrimitiveButton1 />
      <PrimitiveLabelText text="Yes" />
    </Wrapper>
  );
}
type PrimitiveLabelTextProps = {
  text: string;
};

function PrimitiveLabelText({ text }: PrimitiveLabelTextProps) {
  return (
    <div className="basis-0 grow h-[14px] min-h-px min-w-px relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="font-['Nunito:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#090f13] text-[14px] text-nowrap">{text}</p>
      </div>
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[3.35544e+07px] shrink-0 size-[16px]">
      <div aria-hidden="true" className="absolute border border-[rgba(35,61,77,0.5)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}
type InputTextProps = {
  text: string;
};

function InputText({ text }: InputTextProps) {
  return (
    <div className="bg-white h-[36px] relative rounded-[6px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Nunito:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#233d4d] text-[14px] text-nowrap">{text}</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(35,61,77,0.5)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}
type ContainerText2Props = {
  text: string;
};

function ContainerText2({ text }: ContainerText2Props) {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Nunito:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#233d4d] text-[14px]">{text}</p>
    </div>
  );
}
type ContainerText1Props = {
  text: string;
};

function ContainerText1({ text }: ContainerText1Props) {
  return <Wrapper1>{text}</Wrapper1>;
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

function PrimitiveButton() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]">
      <div aria-hidden="true" className="absolute border border-[rgba(35,61,77,0.13)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

export default function CatalogMaintenanceAdminSuggestion() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pb-0 pl-[32px] pr-[47px] pt-[32px] relative size-full" data-name="Catalog Maintenance Admin -  Suggestion">
      <div className="content-stretch flex flex-col gap-[24px] h-[1058px] items-start relative shrink-0 w-full" data-name="Container">
        <div className="content-stretch flex h-[64px] items-start justify-between relative shrink-0 w-full" data-name="Container">
          <div className="h-[64px] relative shrink-0 w-[291.609px]" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
              <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="Heading 1">
                <p className="basis-0 font-['Nunito:Regular',sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[#090f13] text-[24px]">Suggest Modification</p>
              </div>
              <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="absolute font-['Nunito:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#233d4d] text-[16px] text-nowrap top-0">Suggest modification and improvements</p>
              </div>
            </div>
          </div>
          <div className="bg-white h-[36px] relative rounded-[3.35544e+07px] shrink-0 w-[162.938px]" data-name="Button">
            <div aria-hidden="true" className="absolute border border-[#155dfc] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[25px] py-[9px] relative size-full">
              <p className="font-['Nunito:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#155dfc] text-[14px] text-center text-nowrap">Need Clarification</p>
            </div>
          </div>
        </div>
        <div className="gap-[8px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[877px] relative shrink-0 w-full" data-name="Container">
          <Container1 additionalClassNames="[grid-area:1_/_1]">
            <div className="content-stretch flex h-[37px] items-center justify-between pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Container">
              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(35,61,77,0.13)] border-solid inset-0 pointer-events-none" />
              <div className="h-[24px] relative shrink-0 w-[71.094px]" data-name="Heading 2">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="absolute font-['Nunito:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#090f13] text-[16px] text-nowrap top-0">Catalog Data</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] h-[704px] items-start relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex gap-[12px] h-[104px] items-start relative shrink-0 w-full" data-name="Container">
                <PrimitiveButton />
                <Wrapper2 additionalClassNames="h-[104px]">
                  <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[388px]" data-name="Container">
                    <p className="basis-0 font-['Nunito:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#233d4d] text-[14px]">Image</p>
                  </div>
                  <div className="absolute left-0 rounded-[3px] size-[78px] top-[24px]" data-name="ImageWithFallback">
                    <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[3px] size-full" src={imgImageWithFallback} />
                  </div>
                </Wrapper2>
              </div>
              <div className="content-stretch flex gap-[12px] h-[44px] items-start relative shrink-0 w-full" data-name="Container">
                <PrimitiveButton />
                <Container>
                  <ContainerText text="UPC" />
                  <ContainerText1 text="0081006334306" />
                </Container>
              </div>
              <div className="content-stretch flex gap-[12px] h-[44px] items-start relative shrink-0 w-full" data-name="Container">
                <PrimitiveButton />
                <Container>
                  <ContainerText text="SKU Metrics" />
                  <ContainerText1 text="45 SKUs" />
                </Container>
              </div>
              <div className="content-stretch flex gap-[12px] h-[44px] items-start relative shrink-0 w-full" data-name="Container">
                <PrimitiveButton />
                <Container>
                  <ContainerText text="Description" />
                  <ContainerText1 text="Death Wish Coffee Co.® Medium Roast Ground Coffee" />
                </Container>
              </div>
              <div className="content-stretch flex gap-[12px] h-[44px] items-start relative shrink-0 w-full" data-name="Container">
                <PrimitiveButton />
                <Container>
                  <ContainerText text="Source" />
                  <ContainerText1 text="Vendor Upload" />
                </Container>
              </div>
              <div className="content-stretch flex gap-[12px] h-[44px] items-start relative shrink-0 w-full" data-name="Container">
                <PrimitiveButton />
                <Container>
                  <ContainerText text="Taxonomy" />
                  <Wrapper1>{`Food & Beverage > Coffee > Whole Bean`}</Wrapper1>
                </Container>
              </div>
              <div className="content-stretch flex gap-[12px] h-[44px] items-start relative shrink-0 w-full" data-name="Container">
                <PrimitiveButton />
                <Container>
                  <ContainerText text="Brand" />
                  <ContainerText1 text="Death Wish Coffee Co." />
                </Container>
              </div>
              <div className="content-stretch flex gap-[12px] h-[44px] items-start relative shrink-0 w-full" data-name="Container">
                <PrimitiveButton />
                <Container>
                  <ContainerText text="Size" />
                  <ContainerText1 text="10 oz" />
                </Container>
              </div>
              <div className="content-stretch flex gap-[12px] h-[44px] items-start relative shrink-0 w-full" data-name="Container">
                <PrimitiveButton />
                <Container>
                  <ContainerText text="Manufacturer" />
                  <ContainerText1 text="Death Wish Coffee Co." />
                </Container>
              </div>
              <div className="content-stretch flex gap-[12px] h-[44px] items-start relative shrink-0 w-full" data-name="Container">
                <PrimitiveButton />
                <Container>
                  <ContainerText text="Organic" />
                  <ContainerText1 text="Yes" />
                </Container>
              </div>
              <div className="content-stretch flex gap-[12px] h-[44px] items-start relative shrink-0 w-full" data-name="Container">
                <PrimitiveButton />
                <Container>
                  <ContainerText text="PL" />
                  <ContainerText1 text="No" />
                </Container>
              </div>
            </div>
          </Container1>
          <Container1 additionalClassNames="[grid-area:1_/_2]">
            <div className="h-[37px] relative shrink-0 w-full" data-name="Heading 2">
              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(35,61,77,0.13)] border-solid inset-0 pointer-events-none" />
              <p className="absolute font-['Nunito:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#090f13] text-[16px] text-nowrap top-0">Suggested Modification</p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] h-[790px] items-start relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex flex-col gap-[4px] h-[104px] items-start relative shrink-0 w-full" data-name="Container">
                <ContainerText2 text="Image" />
                <div className="content-stretch flex gap-[12px] h-[80px] items-start relative shrink-0 w-full" data-name="Container">
                  <div className="bg-[rgba(35,61,77,0.34)] relative rounded-[4px] shrink-0 size-[80px]" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
                      <p className="font-['Nunito:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#233d4d] text-[12px] text-nowrap">No image</p>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[rgba(35,61,77,0.13)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  </div>
                  <Wrapper2 additionalClassNames="h-[24px]">
                    <div className="absolute left-[-1057px] size-0 top-[-214px]" data-name="File Upload" />
                    <div className="absolute h-[16px] left-0 top-[3px] w-[95.484px]" data-name="Container">
                      <div className="absolute left-0 size-[12px] top-[2px]" data-name="Icon">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                          <g id="Icon">
                            <path d={svgPaths.p2752e200} id="Vector" stroke="var(--stroke-0, #FE7F2E)" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8.5 4L6 1.5L3.5 4" id="Vector_2" stroke="var(--stroke-0, #FE7F2E)" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 1.5V7.5" id="Vector_3" stroke="var(--stroke-0, #FE7F2E)" strokeLinecap="round" strokeLinejoin="round" />
                          </g>
                        </svg>
                      </div>
                      <p className="absolute font-['Nunito:Regular',sans-serif] font-normal leading-[16px] left-[20px] text-[#fe7f2e] text-[12px] text-nowrap top-0">Upload Image</p>
                    </div>
                  </Wrapper2>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[4px] h-[60px] items-start relative shrink-0 w-full" data-name="Container">
                <ContainerText2 text="UPC" />
                <InputText text="Enter upc" />
              </div>
              <div className="content-stretch flex flex-col gap-[4px] h-[60px] items-start relative shrink-0 w-full" data-name="Container">
                <ContainerText2 text="SKU Metrics" />
                <InputText text="Enter sku metrics" />
              </div>
              <div className="content-stretch flex flex-col gap-[4px] h-[104px] items-start relative shrink-0 w-full" data-name="Container">
                <ContainerText2 text="Description" />
                <div className="bg-white h-[80px] relative rounded-[6px] shrink-0 w-full" data-name="Textarea">
                  <div className="overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex items-start px-[12px] py-[8px] relative size-full">
                      <p className="font-['Nunito:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#233d4d] text-[14px] text-nowrap">Enter description</p>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[rgba(35,61,77,0.5)] border-solid inset-0 pointer-events-none rounded-[6px]" />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[4px] h-[60px] items-start relative shrink-0 w-full" data-name="Container">
                <ContainerText2 text="Source" />
                <InputText text="Enter source" />
              </div>
              <div className="content-stretch flex flex-col gap-[4px] h-[62px] items-start relative shrink-0 w-full" data-name="Container">
                <ContainerText2 text="Taxonomy" />
                <div className="bg-white h-[38px] relative rounded-[6px] shrink-0 w-full" data-name="Button">
                  <div aria-hidden="true" className="absolute border border-[rgba(35,61,77,0.13)] border-solid inset-0 pointer-events-none rounded-[6px]" />
                  <div className="absolute content-stretch flex h-[20px] items-start left-[13px] overflow-clip top-[9px] w-[113.609px]" data-name="TaxonomyTreeSelect">
                    <p className="font-['Nunito:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#233d4d] text-[14px] text-nowrap">Select taxonomy...</p>
                  </div>
                  <Icon additionalClassNames="left-[387px] top-[11px]">
                    <g id="Icon" opacity="0.5">
                      <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #233D4D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </g>
                  </Icon>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[4px] h-[60px] items-start relative shrink-0 w-full" data-name="Container">
                <ContainerText2 text="Brand" />
                <InputText text="Death Wish Coffee Co." />
              </div>
              <div className="content-stretch flex flex-col gap-[4px] h-[60px] items-start relative shrink-0 w-full" data-name="Container">
                <ContainerText2 text="Size" />
                <InputText text="Enter size" />
              </div>
              <div className="content-stretch flex flex-col gap-[4px] h-[60px] items-start relative shrink-0 w-full" data-name="Container">
                <ContainerText2 text="Manufacturer" />
                <InputText text="Enter manufacturer" />
              </div>
              <div className="content-stretch flex flex-col gap-[4px] h-[40px] items-start relative shrink-0 w-full" data-name="Container">
                <ContainerText2 text="Organic" />
                <div className="content-stretch flex gap-[16px] h-[16px] items-start relative shrink-0 w-full" data-name="Primitive.div">
                  <ProductDetail />
                  <ProductDetail1 />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[4px] h-[40px] items-start relative shrink-0 w-full" data-name="Container">
                <ContainerText2 text="PL" />
                <div className="content-stretch flex gap-[16px] h-[16px] items-start relative shrink-0 w-full" data-name="Primitive.div">
                  <ProductDetail />
                  <ProductDetail1 />
                </div>
              </div>
            </div>
          </Container1>
        </div>
        <div className="content-stretch flex gap-[12px] h-[61px] items-start justify-end pb-0 pt-[25px] px-0 relative shrink-0 w-full" data-name="Container">
          <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(35,61,77,0.13)] border-solid inset-0 pointer-events-none" />
          <div className="bg-white h-[36px] relative rounded-[6px] shrink-0 w-[80.594px]" data-name="Button">
            <div aria-hidden="true" className="absolute border border-[rgba(35,61,77,0.13)] border-solid inset-0 pointer-events-none rounded-[6px]" />
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <Icon additionalClassNames="left-[13px] top-[10px]">
                <g id="Icon">
                  <path d={svgPaths.p203476e0} id="Vector" stroke="var(--stroke-0, #090F13)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M12.6667 8H3.33333" id="Vector_2" stroke="var(--stroke-0, #090F13)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </g>
              </Icon>
              <p className="absolute font-['Nunito:Medium',sans-serif] font-medium leading-[20px] left-[52.5px] text-[#090f13] text-[14px] text-center text-nowrap top-[7px] translate-x-[-50%]">Back</p>
            </div>
          </div>
          <div className="bg-[#fe7f2e] h-[36px] relative rounded-[6px] shrink-0 w-[147.422px]" data-name="Button">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16px] py-[8px] relative size-full">
              <p className="font-['Nunito:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-center text-nowrap text-white">Send for Approval</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}