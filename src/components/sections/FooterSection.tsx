import React from "react";

function FooterSection() {
  return (
    <section>
      <div className="flex flex-col lg:flex-row justify-between gap-8 ">
        <div>
          <p>
            <img src="/images/logo-bottom.png" alt="footer logo" />
          </p>
          <p className="text-lightGray mt-[1.19rem]">
          Reserve sua viagem em minutos e tenha controle total por muito mais tempo.
          </p>
        </div>
        <div className="flex gap-8 flex-grow justify-between">
          <div className="flex flex-col gap-4">
            <p className="text-lightBlack font-[700] text-[1.3125rem]">
              Empresa
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-lightGray text-[1.125rem] font-[500]">About</p>
              <p className="text-lightGray text-[1.125rem] font-[500]">
              Carreiras
              </p>
              <p className="text-lightGray text-[1.125rem] font-[500]">
                Mobile
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-lightBlack font-[700] text-[1.3125rem]">
              Contato
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-lightGray text-[1.125rem] font-[500]">
                Ajuda
              </p>
              <p className="text-lightGray text-[1.125rem] font-[500]">Press</p>
              <p className="text-lightGray text-[1.125rem] font-[500]">
              Afiliados
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-lightBlack font-[700] text-[1.3125rem]">More</p>
            <div className="flex flex-col gap-2">
              <p className="text-lightGray text-[1.125rem] font-[500]">
                Airlinefees
              </p>
              <p className="text-lightGray text-[1.125rem] font-[500]">
              Taxas aéreas
              </p>
              <p className="text-lightGray text-[1.125rem] font-[500]">
               Dicas
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <div className="flex gap-4 items-center">
            <img src="/images/facebook-icon.png" alt="social icon" />
            <img src="/images/instagram-icon.png" alt="social icon" />
            <img src="/images/x-icon.png" alt="social icon" />
          </div>
          <p className="text-lightGray font-[500] text-[1.25rem]">
          Conheça nosso aplicativo
          </p>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="bg-lightBlack rounded-extraLarge px-[1.06rem] py-[0.58rem] w-[11rem]">
              <div className="flex gap-4 items-center">
                <div>
                  <img
                    src="/images/google-play-icon.png"
                    alt="google play icon"
                  />
                </div>

                <div>
                  <p className="uppercase font-[700] text-white text-[0.7rem]">
                    get it on
                  </p>
                  <p className="uppercase font text-white text-[0.7rem]">
                    Google play
                  </p>
                </div>
              </div>
              <div></div>
            </div>
            <div className="bg-lightBlack rounded-extraLarge px-[1.06rem] py-[0.58rem] w-[14rem]">
              <div className="flex gap-4 items-center">
                <div>
                  <img src="/images/app-icon.png" alt="google play icon" />
                </div>

                <div>
                  <p className="uppercase font-[700] text-white text-[0.7rem]">
                    Available on the
                  </p>
                  <p className="uppercase font text-white text-[0.7rem]">
                    Apple store
                  </p>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <p className="my-[5.25rem] text-lightGray text-[0.875rem] font-[600] flex justify-center">
       Todos os direitos reservados@jadoo.co
      </p>
    </section>
  );
}

export default FooterSection;
