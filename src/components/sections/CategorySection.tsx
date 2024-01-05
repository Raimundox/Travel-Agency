import React from "react";
import CatergoryCard from "../cards/CatergoryCard";

function CategorySection() {
  const features = [
    {
      id: 0,
      iconUrl: "/images/satellite.png",
      title: "Tempo calculado",
      description:
        "O tempo é valioso - otimize cada segundo com nossas ferramentas de cálculo precisas.",
      highlighted: false,
    },
    {
      id: 1,
      iconUrl: "/images/aircraft.png",
      title: "Melhores voos",
      description:
        "Descubra os melhores voos com nossa ferramenta especializada.",
      highlighted: true,
    },
    {
      id: 2,
      iconUrl: "/images/mic.png",
      title: "Eventos locais",
      description:
        "Explore eventos locais e mergulhe na essência da cultura de cada destino.",
      highlighted: false,
    },
    {
      id: 3,
      iconUrl: "/images/cog.png",
      title: "Costumização",
      description:
        "Personalize cada detalhe da sua viagem conosco. Da escolha do destino aos pequenos detalhes.",
      highlighted: false,
    },
  ];
  return (
    <section>
      <p className="text-lightGray text-[1.125rem] font-[600] text-center">
        Categoria
      </p>
      <p className="volkhov text-[3.125rem] text-title font-[700] text-center">
       Oferecemos o melhor serviço
      </p>
      <div className="flex flex-col gap-2 md:flex-row justify-between w-full mt-16">
        {features.map((feature) => (
          <CatergoryCard
            key={feature.id}
            iconUrl={feature.iconUrl}
            title={feature.title}
            description={feature.description}
            highlighted={feature.highlighted}
          />
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
