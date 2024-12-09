import { Button } from './ui/button'
export function SectionCallToAction() {
  const handlePrice = () => {
    window.open('https://chk.eduzz.com/G92V3DJZ9E', '_blank')
  }
  const handleAccount = () => {
    window.open(
      'https://lp.genialinvestimentos.com.br/tesouro-direto-globo/?gcode=GI-MKT-EGLOBO-GTD01-LP_CURSO-CADASTRO-PAID-LP-X',
      '_blank'
    )
  }
  return (
    <div className="bg-bg1 bg-cover bg-center bg-no-repeat py-24 flex flex-col items-center gap-6">
      <div className="w-10/12 flex flex-col items-center justify-center gap-6">
        <Button
          onClick={handlePrice}
          className="text-2xl font-roboto uppercase whitespace-normal h-auto"
          variant="outline"
        >
          Aproveite esta oportunidade por apenas R$ 147
        </Button>
        <span className="font-roboto text-3xl font-bold text-white">OU</span>
        <Button
          onClick={handleAccount}
          className="text-2xl font-roboto uppercase whitespace-normal h-auto"
          variant="outline"
        >
          abra uma conta na genial e invista no tesouro para ter acesso gratuito
        </Button>
      </div>
    </div>
  )
}
