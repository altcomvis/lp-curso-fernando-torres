import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function SectionFaq() {
  return (
    <div className="bg-bg1 bg-cover bg-center bg-no-repeat py-16 md:py-24 flex flex-col  gap-6">
      <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-2">
          <span className="font-roboto-condensed text-4xl font-bold text-white">
            FAQ
          </span>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Qual o formato do curso?</AccordionTrigger>
              <AccordionContent>
                Trata-se de um curso 100% on-line e você poderá assistir quando
                e onde quiser pelo período de 180 dias após a confirmação da
                inscrição.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Tempo do curso</AccordionTrigger>
              <AccordionContent>
                O curso tem cerca de 1 hora e 10 minutos de aulas gravadas na
                plataforma.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Como faço para ter acesso ao curso após a compra?
              </AccordionTrigger>
              <AccordionContent>
                Após a aprovação do pagamento você receberá as credenciais de
                acesso no seu e-mail em poucos minutos.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Se eu não gostar, posso cancelar?
              </AccordionTrigger>
              <AccordionContent>
                Sim. Você tem 7 dias para desistir do curso e receber reembolso
                do valor pago.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Ainda tem dúvidas?</AccordionTrigger>
              <AccordionContent>
                Envie seu questionamento para o e-mail cursos@valor.com.br que
                responderemos em até 48 horas.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                O curso funciona para investidores iniciantes?
              </AccordionTrigger>
              <AccordionContent>
                Sim. Ele foi pensado principalmente para pessoas que estão
                começando a diversificar seus investimentos e que querem ter
                mais segurança para investir.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}
