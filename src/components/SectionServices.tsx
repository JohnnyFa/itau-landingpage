import Image from "next/image";
import { Container } from "./Container";

import PhoneIcon from "@/assets/icon-phone.svg";
import SolutionsIcon from "@/assets/icon-solutions.svg";
import OptionsIcon from "@/assets/icon-options.svg";
import CardIcon from "@/assets/icon-card.svg";
import ImagePhone from "@/assets/phone.png";

import { ItemServices } from "./ItemServices";

export function SectionServices() {
  return (
    <section className="w-full h-[965px]">
      <Container>
        <div className="flex-1 max-w-[594px] pt-32">
          <span className="block text-primary-orange text-sm font-bold uppercase mb-9">
            Servicos exclusivos
          </span>
          <h2 className="text-primary-gray text-6xl text-[56px] font-bold leading-tight mb-6">
            Gerencie suas financas sem sair de casa
          </h2>
          <p className="text-lg max-w-[554px] mb-16 text-second-gray">
            Veja como pode cuidar das suas financas pelo app Itau de forma
            segura. rapida e o melhor, no conforto da sua casa.
          </p>
          <ul className="flex flex-col items-start gap-9">
            <ItemServices
              name="Icon phone"
              icon={PhoneIcon}
              paragraph="Acompanhar sua conta, fazer transferencias e pagamentos onde
                estiver"
                hasBorder={true}
            />
            <ItemServices
              name="Icon solutions"
              icon={SolutionsIcon}
              paragraph="Solucoes de emprestimos e renegociacao para organizar suas financas"
              hasBorder={true}
            />
            <ItemServices
              name="Icon options"
              icon={OptionsIcon}
              paragraph="Diversas opcoes de investimentos, de acordo com o seu perfil de investidor"
              hasBorder={true}
            />
            <ItemServices
              name="Icon card"
              icon={CardIcon}
              paragraph="Acompanhe a fatura do seu cartao de credito e faca compras online com seu cartao virtual."
              hasBorder={false}
            />
          </ul>
        </div>
        <div className="flex items-start pt-32 pr-14">
          <Image src={ImagePhone} alt="Phone"/>
        </div>
      </Container>
    </section>
  );
}
