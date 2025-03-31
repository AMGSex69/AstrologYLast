"use client"

import type { NextPage } from "next"
import { useState, useCallback } from "react"
import Karma from "./karma"
import PortalPopup from "./portal-popup"
import ExpressConsultation1 from "./express-consultation1"
import AstrologicalForecast from "./astrological-forecast"

const translations = {
  en: {
    title: "My Services",
    karma: "KARMA",
    karmicHoroscope: "Karmic Horoscope",
    learnMore: "Learn More",
  },
  ru: {
    title: "Мои услуги",
    karma: "KARMA",
    karmicHoroscope: "Кармический гороскоп",
    learnMore: "Узнать подробнее",
  },
  zh: {
    title: "我的服务",
    karma: "业力",
    karmicHoroscope: "业力星盘",
    learnMore: "了解更多",
  },
}

type Language = keyof typeof translations

export type ServicesSectionType = {
  className?: string
  lang?: Language
}

const ServicesSection: NextPage<ServicesSectionType> = ({ className = "", lang = "ru" }) => {
  const [isKarmaOpen, setKarmaOpen] = useState(false)
  const t = translations[lang]

  const openKarma = useCallback(() => {
    setKarmaOpen(true)
  }, [])

  const closeKarma = useCallback(() => {
    setKarmaOpen(false)
  }, [])

  return (
    <>
      <section
        className={`self-stretch bg-beige-100 flex flex-col items-start justify-start py-10 px-40 gap-10 text-left text-23xl text-dimgray-100 font-playfair-display mq750:gap-5 mq750:pl-20 mq750:pr-20 mq750:box-border mq1050:pt-5 mq1050:pb-5 mq1050:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1225:pt-[26px] mq1225:pb-[26px] mq1225:box-border ${className}`}
        data-scroll-to="servicesSection"
      >
        <h1 className="m-0 w-[262px] relative text-inherit tracking-[0.05em] font-normal font-[inherit] inline-block mq750:text-15xl mq450:text-6xl">
          {t.title}
        </h1>
        <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-x-6 gap-y-[22.7px] min-h-[1882px] text-center text-xl text-black">
          <ExpressConsultation1
            image="/image@2x.png"
            prop={lang === "ru" ? "Астрологическая" : lang === "en" ? "Astrological" : "占星"}
            prop1={lang === "ru" ? "консультация" : lang === "en" ? "consultation" : "咨询"}
            prop2="от 3 000₽ | 35$"
            lang={lang}
          />
          <ExpressConsultation1
            image="/image-1@2x.png"
            propAlignSelf="stretch"
            propOverflow="hidden"
            propWidth="unset"
            prop={lang === "ru" ? "Бизнес-консультация." : lang === "en" ? "Business consultation." : "商业咨询。"}
            prop1={lang === "ru" ? "Деньги" : lang === "en" ? "Money" : "金钱"}
            prop2="5 000₽ | 55$"
            lang={lang}
          />
          <AstrologicalForecast
            image="/image-2@2x.png"
            prop={
              lang === "ru"
                ? "Астрологический прогноз на 1 год. Соляр"
                : lang === "en"
                  ? "Astrological forecast for 1 year. Solar Return"
                  : "一年占星预测。太阳回归"
            }
            prop1="10 000₽ | 110$"
            lang={lang}
          />
          <div className="h-[442px] w-[262px] rounded-xl bg-oldlace overflow-hidden shrink-0 flex flex-col items-center justify-start pt-0 px-0 pb-[26px] box-border gap-[26px] text-mini text-darksalmon font-ibm-plex-sans">
            <div className="self-stretch flex-1 flex flex-row items-center justify-center pt-[84.5px] px-5 pb-[84px] bg-[url('/imagetext@3x.png')] bg-cover bg-no-repeat bg-[top]">
              <div className="relative font-semibold inline-block min-w-[53px]">{t.karma}</div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-0 px-3 gap-[13px] text-xl text-black font-playfair-display">
              <div className="self-stretch relative font-semibold mq450:text-base">
                <p className="m-0">{t.karmicHoroscope}</p>
              </div>
              <div className="self-stretch relative font-ibm-plex-sans text-dimgray-100 mq450:text-base">
                5 000₽ | 55$
              </div>
            </div>
            <button
              className="cursor-pointer [border:none] p-[15px] bg-beige-100 rounded-31xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-tan"
              onClick={openKarma}
            >
              <div className="relative text-mini font-ibm-plex-sans text-black text-left inline-block min-w-[128px]">
                {t.learnMore}
              </div>
            </button>
          </div>
          <AstrologicalForecast
            image="/image-3@2x.png"
            propAlignSelf="stretch"
            propOverflow="hidden"
            propWidth="unset"
            prop={lang === "ru" ? "Гороскоп совместимости" : lang === "en" ? "Compatibility Horoscope" : "兼容性星盘"}
            prop1="8 000₽ | 90$"
            lang={lang}
          />
          <ExpressConsultation1
            image="/image-4@2x.png"
            propAlignSelf="stretch"
            propOverflow="hidden"
            propWidth="unset"
            prop={lang === "ru" ? "Детская " : lang === "en" ? "Child " : "儿童"}
            prop1={lang === "ru" ? "астрология" : lang === "en" ? "astrology" : "占星术"}
            prop2="5 000₽ | 55$"
            lang={lang}
          />
          <ExpressConsultation1
            image="/image-5@2x.png"
            propAlignSelf="stretch"
            propOverflow="hidden"
            propWidth="unset"
            prop={lang === "ru" ? "Профориентация." : lang === "en" ? "Career guidance." : "职业指导。"}
            prop1={lang === "ru" ? "Выбор профессии" : lang === "en" ? "Career choice" : "职业选择"}
            prop2="5 000₽ | 55$"
            lang={lang}
          />
          <AstrologicalForecast
            image="/image-6@2x.png"
            propAlignSelf="stretch"
            propOverflow="hidden"
            propWidth="unset"
            prop={
              lang === "ru"
                ? "Гороскоп переезда и иммиграции"
                : lang === "en"
                  ? "Relocation and Immigration Horoscope"
                  : "搬迁和移民星盘"
            }
            prop1="8 000₽ | 90$"
            lang={lang}
          />
          <ExpressConsultation1
            image="/image-7@2x.png"
            propAlignSelf="stretch"
            propOverflow="hidden"
            propWidth="unset"
            prop={lang === "ru" ? "Подбор " : lang === "en" ? "Selection of " : "选择"}
            prop1={lang === "ru" ? "важной даты" : lang === "en" ? "important date" : "重要日期"}
            prop2="5 000₽ | 55$"
            lang={lang}
          />
          <AstrologicalForecast
            image="/image-8@2x.png"
            propAlignSelf="stretch"
            propOverflow="hidden"
            propWidth="unset"
            prop={lang === "ru" ? "Медицинская астрология" : lang === "en" ? "Medical Astrology" : "医学占星术"}
            prop1="10 000₽ | 110$"
            lang={lang}
          />
          <AstrologicalForecast
            image="/image-9@2x.png"
            propAlignSelf="stretch"
            propOverflow="hidden"
            propWidth="unset"
            prop={
              lang === "ru"
                ? "Геммоастрология. Волшебная сила камней"
                : lang === "en"
                  ? "Gemstone Astrology. Magical power of stones"
                  : "宝石占星术。石头的魔力"
            }
            prop1="10 000₽ | 110$"
            lang={lang}
          />
          <ExpressConsultation1
            image="/image-10@2x.png"
            propAlignSelf="stretch"
            propOverflow="hidden"
            propWidth="unset"
            prop={lang === "ru" ? "Ректификация." : lang === "en" ? "Rectification." : "校正。"}
            prop1={lang === "ru" ? "Точное время рождения" : lang === "en" ? "Exact birth time" : "精确出生时间"}
            prop2="от 3 000₽ | 35$"
            lang={lang}
          />
          <ExpressConsultation1
            image="/image-11@2x.png"
            propAlignSelf="unset"
            propOverflow="unset"
            propWidth="282px"
            prop={lang === "ru" ? "Натальная " : lang === "en" ? "Natal " : "本命"}
            prop1={lang === "ru" ? "карта" : lang === "en" ? "chart" : "星盘"}
            prop2="от 8 000₽ | 90$"
            lang={lang}
          />
          <AstrologicalForecast
            image="/image-12@2x.png"
            propAlignSelf="unset"
            propOverflow="unset"
            propWidth="269px"
            prop={lang === "ru" ? "Коррекционная астрология" : lang === "en" ? "Corrective Astrology" : "矫正占星术"}
            prop1="от 8 000₽ | 90$"
            lang={lang}
          />
          <ExpressConsultation1
            image="/image-13@2x.png"
            propAlignSelf="unset"
            propOverflow="unset"
            propWidth="269px"
            prop={lang === "ru" ? "Годовое" : lang === "en" ? "Annual" : "年度"}
            prop1={lang === "ru" ? "сопровождение" : lang === "en" ? "support" : "支持"}
            prop2="от 40 000₽ | 440$"
            lang={lang}
          />
          <AstrologicalForecast
            image="/image-14@2x.png"
            propAlignSelf="unset"
            propOverflow="unset"
            propWidth="269px"
            prop={
              lang === "ru"
                ? "Астрологический календарь / ежедневник"
                : lang === "en"
                  ? "Astrological calendar / planner"
                  : "占星日历 / 规划器"
            }
            prop1="от 1 250₽ | 15$"
            lang={lang}
          />
        </div>
      </section>
      {isKarmaOpen && (
        <PortalPopup overlayColor="rgba(113, 113, 113, 0.3)" placement="Centered" onOutsideClick={closeKarma}>
          <Karma onClose={closeKarma} lang={lang} />
        </PortalPopup>
      )}
    </>
  )
}

export default ServicesSection

