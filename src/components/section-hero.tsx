import Foto1 from '../assets/foto1.webp'
export function SectionHero() {
  return (
    <div className="bg-blue-500 h-[42rem] md:h-[32rem] pb-12">
      <div className="w-10/12 md:w-9/12 mx-auto grid md:grid-cols-2 grid-cols-1 gap-12">
        <div className="pt-12 md:py-24">
          <div className="static md:absolute z-30 flex flex-col gap-6">
            <div className="flex flex-col leading-none font-roboto-condensed  font-regular text-3xl md:text-7xl">
              <span>ADEUS À POUPANÇA E</span>
              <span className=" italic">SEGREDOS DO TESOURO</span>
            </div>
            <div className="md:w-5/12">
              <span className="text-white text-xl md:text-2xl font-roboto">
                Acabe com o mito da poupança, saiba quais as melhores
                alternativas para sua reserva de emergência, aprenda coisas que
                você ainda não conhece sobre Tesouro Direto, e descubra os
                segredos de investir em títulos públicos.
              </span>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={Foto1} alt="" className="static md:absolute" />
        </div>
      </div>
    </div>
  )
}
