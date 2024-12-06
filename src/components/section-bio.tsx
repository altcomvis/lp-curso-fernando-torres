import FotoFernando from '../assets/fernando.webp'

export function SectionBio() {
  return (
    <div className="bg-zinc-200">
      <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="pt-56 md:pt-16">
          <img src={FotoFernando} alt="" />
        </div>
        <div className="flex flex-col justify-end pb-20 gap-5">
          <span className="font-roboto-condensed font-bold text-5xl">
            Com quem você <span className="text-blue-500">vai aprender</span>
          </span>
          <span className="font-roboto text-xl">
            <b>Fernando Torres</b> é editor-executivo do Valor. Trabalha desde
            abril de 2007 no Valor, onde foi por mais de dez anos repórter de
            S.A. e ajudou a criar o site Valor Investe, do qual foi o primeiro
            editor. É formado em jornalismo pela ECA-USP, tem MBA em Derivativos
            e Informações Econômico-financeiras pela FIA e é mestre em
            contabilidade FEA-USP. Antes do Valor, trabalhou cinco anos no DCI e
            um ano no Banco do Brasil.
          </span>
        </div>
      </div>
    </div>
  )
}
