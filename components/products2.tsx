import type { NextPage } from "next"

export type Products2Type = {
  className?: string
}

const Products2: NextPage<Products2Type> = ({ className = "" }) => {
  return (
    <div
      className={`h-[840px] flex-1 flex flex-col items-center justify-start gap-[15px] min-w-[293px] text-left text-base text-black font-ibm-plex-sans ${className}`}
    >
      <a className="[text-decoration:none] w-[108px] relative text-xl font-semibold font-playfair-display text-[inherit] text-center inline-block mq450:text-base">
        <p className="m-0">{`Календарь `}</p>
        <p className="m-0">Экадаши</p>
      </a>
      <img
        className="self-stretch flex-1 relative rounded-lg max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/rectangle-561@2x.png"
      />
      <div className="self-stretch relative text-dimgray-300">
        Настенный лунный календарь планер, перекидной на 12 листов, на стену, формат А3, плотная бумага 170г/м2, крупная
        календарная сетка, поля для записей, благоприятные и неблагоприятные лунные дни.
      </div>
      <div className="self-stretch h-[271px] relative text-dimgray-300 inline-block">
        <p className="[margin-block-start:0] [margin-block-end:4px]">
          <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
          <span>Восход/заход солнца;</span>
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
      <div className="self-stretch rounded-31xl bg-beige-100 overflow-hidden flex flex-row items-center justify-center py-[15px] px-5 gap-3 whitespace-nowrap text-mini">
        <div className="h-5 w-[83px] relative uppercase font-medium inline-block">купить на</div>
        <img className="h-6 w-6 relative rounded object-cover" alt="" src="/image-16@2x.png" />
      </div>
    </div>
  )
}

export default Products2

