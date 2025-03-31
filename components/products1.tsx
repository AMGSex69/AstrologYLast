import type { NextPage } from "next"

export type Products1Type = {
  className?: string
}

const Products1: NextPage<Products1Type> = ({ className = "" }) => {
  return (
    <div
      className={`h-[837px] flex-1 flex flex-col items-center justify-start pt-0 px-0 pb-0 box-border gap-[15px] min-w-[293px] text-left text-base text-black font-ibm-plex-sans ${className}`}
    >
      <div className="relative text-xl font-semibold font-playfair-display text-center mq450:text-base">
        <p className="m-0">{`Астрологические `}</p>
        <p className="m-0">календари планеры</p>
      </div>
      <img
        className="self-stretch flex-1 relative rounded-lg max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt=""
        src="/rectangle-56@2x.png"
      />
      <div className="self-stretch relative text-dimgray-300">
        Настенный лунный календарь планер, перекидной на 12 листов, на стену, формат А3, плотная бумага 170г/м2, крупная
        календарная сетка, поля для записей, благоприятные и неблагоприятные лунные дни.
      </div>
      <div className="self-stretch h-[271px] relative text-dimgray-300 inline-block">
        <p className="[margin-block-start:0] [margin-block-end:4px]">
          <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
          <span>Аспекты луны;</span>
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
          <span>Экадаши;</span>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:4px]">
          <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
          <span>Заметки;</span>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:4px]">
          <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
          <span>Новолуния;</span>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:4px]">
          <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
          <span>Полнолуния;</span>
        </p>
        <p className="m-0">
          <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
          <span>Фазы луны.</span>
        </p>
      </div>
      <div className="self-stretch rounded-31xl bg-beige-100 overflow-hidden flex flex-row items-center justify-center py-[15px] px-5 gap-3 whitespace-nowrap text-mini">
        <div className="h-5 w-[83px] relative uppercase font-medium inline-block">купить на</div>
        <img className="h-6 w-6 relative rounded object-cover" alt="" src="/image-16@2x.png" />
      </div>
    </div>
  )
}

export default Products1

