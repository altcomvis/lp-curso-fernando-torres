import { AlarmClock } from 'lucide-react'
import Foto2 from '../assets/foto2.webp'
export function SectionCourseContent() {
  return (
    <>
      <div className="w-10/12 mx-auto flex items-center gap-4 justify-center py-16">
        <AlarmClock strokeWidth={2} className=" size-10" />
        <span className="text-3xl font-bold font-roboto">Duração: 1h10</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-black ">
        <div className="text-white flex flex-col gap-6 md:px-28 py-16 w-10/12 md:w-auto mx-auto relative">
          <span className="font-roboto-condensed text-4xl font-bold z-20 w-7/12 md:w-auto">
            CONTEÚDO DO CURSO
          </span>
          <div className="flex flex-col gap-2 z-20">
            <span className="font-roboto-condensed text-2xl font-bold">
              Módulo 1
            </span>
            <hr className="border-blue-500" />
            <ul className="list-disc text-lg font-roboto pl-4">
              <li>Mito da poupança mais segura</li>
              <li>Quanto você perde na poupança</li>
              <li>Opções para reserva de emergência</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 z-20">
            <span className="font-roboto-condensed text-2xl font-bold">
              Módulo 2
            </span>
            <hr className="border-blue-500" />
            <ul className="list-disc text-lg font-roboto pl-4">
              <li>Tesouro Direto - visão tradicional</li>
              <li>Tesouro Direto - em gráficos de longo prazo</li>
              <li>Carteiras de renda fixa - mix de títulos</li>
              <li>Maximizando relação risco e retorno no Tesouro</li>
              <li>ETFs de títulos públicos</li>
            </ul>
          </div>
        </div>
        <div className="absolute md:static w-9/12 md:w-auto right-0">
          <img src={Foto2} alt="Foto2" />
        </div>
      </div>
    </>
  )
}
