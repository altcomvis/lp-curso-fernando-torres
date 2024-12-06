import ReactGA from 'react-ga4'
import { Button } from './ui/button'
export function SectionCallToAction() {
  const handleButtonClick = () => {
    ReactGA.event({
      category: 'User',
      action: 'Click on Call-to-Action',
      label: 'Cadastre-se',
    })
  }
  return (
    <div className="bg-bg1 bg-cover bg-center bg-no-repeat py-24 flex flex-col items-center gap-6">
      <div className="w-10/12 flex flex-col items-center justify-center gap-6">
        <Button
          onClick={handleButtonClick}
          className="text-2xl font-roboto uppercase whitespace-normal h-auto"
          variant="outline"
        >
          Aproveite esta oportunidade por apenas R$ 147
        </Button>
        <span className="font-roboto text-3xl font-bold text-white">OU</span>
        <Button
          onClick={handleButtonClick}
          className="text-2xl font-roboto uppercase whitespace-normal h-auto"
          variant="outline"
        >
          abra uma conta na genial e invista no tesouro para ter acesso gratuito
        </Button>
      </div>
    </div>
  )
}
