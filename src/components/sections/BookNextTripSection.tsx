import React from "react";
import TripStepCard from "../cards/TripStepCard";

function BookNextTripSection() {
  const steps = [
    {
      id: 0,
      iconUrl: "/images/destination-icon.png",
      title: "Escolha o destino",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
    },
    {
      id: 1,
      iconUrl: "/images/payment-icon.png",
      title: "Faça o pagamento",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
    },
    {
      id: 2,
      iconUrl: "/images/airport-icon.png",
      title: "Chegue ao aeroporto na data selecionada",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
    },
  ];
  return (
    <section className="flex justify-between flex-col md:flex-row items-center mt-[-10rem]">
      <div>
        <p className="text-lightGray text-[1.125rem] font-[600] text-left">
        Fácil e rápido
        </p>
        <p className="volkhov text-[3.125rem] text-title font-[700] text-left">
          Reserve sua viagem em 3 etapas
        </p>

        <div className="flex flex-col gap-[3rem] mt-[1.94rem]">
          {steps.map((step) => (
            <TripStepCard
              key={step.id}
              title={step.title}
              description={step.description}
              iconUrl={step.iconUrl}
            />
          ))}
        </div>
      </div>
      <div>
        <img src="/images/next-trip.png" alt="card with a girl on a wall" />
      </div>
    </section>
  );
}

export default BookNextTripSection;
