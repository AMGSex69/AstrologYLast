import type { NextPage } from "next"

export type ProductsType = {
  className?: string
}

const Products: NextPage<ProductsType> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-center justify-start gap-[15.3px] min-w-[293px] text-left text-base text-black font-ibm-plex-sans ${className}`}
    >
      <a className="[text-decoration:none] w-44 relative text-xl font-semibold font-playfair-display text-[inherit] text-center inline-block mq450:text-base">
        <p className="m-0">{`Астрологический `}</p>
        <p className="m-0">ежедневник</p>
      </a>
      <img
        className="self-stretch h-[271px] relative rounded-lg max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src="/rectangle-56-1@2x.png"
      />
      <div className="self-stretch relative text-dimgray-300 whitespace-pre-wrap">
        Астрологический ежедневник из натуральной кожи, ручная работа, формат А5, премиальный датированный дизайн
        внутри.
      </div>
      <div className="self-stretch h-[296px] relative text-dimgray-300 inline-block">
        <p className="[margin-block-start:0] [margin-block-end:4px]">
          <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
          <span>Восход/заход солнца;</span>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:4px]">
          <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
          <span>Аспекты луны;</span>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:4px]">
          <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
          <span>Экадаши;</span>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:4px]">
          <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
          <span>Начало поста/выход из поста;</span>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:4px]">
          <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
          <span>Луна без курса;</span>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:4px]">
          <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
          <span>Ретро планеты;</span>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:4px]">
          <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
          <span>Лунные дни;</span>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:4px]">
          <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
          <span>Ингрессии;</span>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:4px]">
          <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
          <span>Затмения;</span>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:4px]">
          <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
          <span>Заметки;</span>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:4px]">
          <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
          <span>Новолуния и полнолуния;</span>
        </p>
        <p className="m-0">
          <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
          <span>Фазы луны.</span>
        </p>
      </div>
      <div className="self-stretch flex flex-col items-center justify-end pt-[17px] px-0 pb-0 text-mini">
        <div className="self-stretch rounded-31xl bg-beige-100 overflow-hidden flex flex-row items-center justify-center py-[15px] px-5 gap-3 whitespace-nowrap">
          <div className="h-5 w-[83px] relative uppercase font-medium inline-block">купить на</div>
          <img className="h-6 w-6 relative rounded object-cover" alt="" src="/image-16@2x.png" />
        </div>
      </div>
    </div>
  )
}

export default Products

