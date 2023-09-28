import Image from "next/image";

const Services = () => {
  return (
    <section className="services">
      <div className="bg-fuchsia-200 max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] xl:pt-[70px] px-6 xl:px-0 relative h-[368px] flex items-center xl:items-start -z-10">
        <div className="container mx-auto">
          <div className="services__top flex items-start flex-col xl:flex-row xl:mb-[60px]">
            <h2 className="h2  flex-1 mb-4 xl:mb-0 text-center xl:text-left">
              Główne obszary badań
            </h2>

            <p className="flex-1 text-center xl:text-left max-w-2xl xl:max-w-none">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              delectus assumenda deserunt iste adipisci consequuntur, quaerat
              reprehenderit, autem, eveniet harum perferendis sunt minima hic
              quod ab eius doloremque laboriosam molestias.
            </p>
          </div>
        </div>
      </div>

      {/* GRID CONTAINER */}

      <div className="container mx-auto mt-8 xl:-mt-[144px]">
        <div className="grid xl:grid-cols-4 gap-5 px-8 xl:px-0">
          <div className="services__item bg-white p-[30px] rounded=[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center">
            <div className="mb-[15px]">
              <Image
                src="/icons/services/icon-1.svg"
                width={50}
                height={50}
                alt=""
              />
            </div>
            <h3 className="text-lg font-bold mb-[10px]">
              Wpływ czynników antropogenicznych na zmiany w ekosystemach
            </h3>
            <p className="font-light leading-normal max-w-[300px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>

          <div className="services__item bg-white p-[30px] rounded=[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center">
            <div className="mb-[15px]">
              <Image
                src="/icons/services/icon-2.svg"
                width={50}
                height={50}
                alt=""
              />
            </div>
            <h3 className="text-lg font-bold mb-[10px]">
              Przydatność materii organicznej z węgla brunatnego i torfu do
              zwiększania aktywności biologicznej ekosystemów na obszarach
              zdegradowanych chemicznie.
            </h3>
            <p className="font-light leading-normal max-w-[300px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>

          <div className="services__item bg-white p-[30px] rounded=[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center">
            <div className="mb-[15px]">
              <Image
                src="/icons/services/icon-1.svg"
                width={50}
                height={50}
                alt=""
              />
            </div>
            <h3 className="text-lg font-bold mb-[10px]">
              Rewitalizacja obszarów zdegradowanych jako ważny element
              zwiększania przestrzeni publicznej oraz minimalizacja skutków
              antropopresji.
            </h3>
            <p className="font-light leading-normal max-w-[300px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div className="services__item bg-white p-[30px] rounded=[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center">
            <div className="mb-[15px]">
              <Image
                src="/icons/services/icon-1.svg"
                width={50}
                height={50}
                alt=""
              />
            </div>
            <h3 className="text-lg font-bold mb-[10px]">
              Znaczenie aspektów ekologicznych i krajobrazowych istotnych w
              opracowaniach planistycznych.
            </h3>
            <p className="font-light leading-normal max-w-[300px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
