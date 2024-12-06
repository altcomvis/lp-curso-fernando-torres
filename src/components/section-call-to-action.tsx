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
      <span className="text-white text-2xl font-roboto">
        Aproveite esta oportunidade
      </span>
      <Button
        onClick={handleButtonClick}
        className="text-2xl p-8 font-roboto"
        variant="outline"
      >
        POR APENAS R$ 147
      </Button>
    </div>
  )
}
