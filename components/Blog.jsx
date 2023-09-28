import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <section className="blog">
      <div className="container mx-auto flex flex-col justify-center">
        <h2 className="blog__title h2 mb-[50px] text-center xl:text-left">
          Główne obszary badań
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 xl:gap-y-0 items-start mb-[50px] mx-auto">
          {/* post 1 */}
          <div className="blog__post max-w-[420px] shadow-custom2 rounded-[10px] overflow-hidden cursor-pointer group">
            <div className="relative overflow-hidden">
              <Image
                className="group-hover:scale-110 transition-all duration-500"
                src="/img/blog/soil-1.jpg"
                width={400}
                height={400}
                alt=""
              />

              <div className="bg-accent absolute bottom-0 left-0 text-white text-base tracking-[2.24px] font-medium uppercase py-[6px] px-[18px]">
                Ochrona środowiska
              </div>
            </div>

            <div className="px-5 py-6">
              <h4 className="h4 mb-[10px]">
                Wpływ czynników antropogenicznych na zmiany w ekosystemach
              </h4>

              <p className="font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                harum quod necessitatibus. Expedita culpa a animi unde, fuga
                alias natus quaerat totam quisquam delectus quidem est sed
                voluptatum aut eveniet?
              </p>

              <Link href="" className="italic underline text-[#4c5354]">
                Dowiedz się więcej
              </Link>
            </div>
          </div>

          {/* post 2 */}
          <div className="blog__post max-w-[420px] shadow-custom2 rounded-[10px] overflow-hidden cursor-pointer group">
            <div className="relative overflow-hidden">
              <Image
                className="group-hover:scale-110 transition-all duration-500 max-h-[400px]"
                src="/img/blog/green-1.jpg"
                width={400}
                height={400}
                alt=""
              />

              <div className="bg-accent absolute bottom-0 left-0 text-white text-base tracking-[2.24px] font-medium uppercase py-[6px] px-[18px]">
                Ochrona środowiska
              </div>
            </div>

            <div className="px-5 py-6">
              <h4 className="h4 mb-[10px]">
                Znaczenie aspektów ekologicznych i krajobrazowych istotnych w
                opracowaniach planistycznych.
              </h4>

              <p className="font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                harum quod necessitatibus. Expedita culpa a animi unde, fuga
                alias natus quaerat totam quisquam delectus quidem est sed
                voluptatum aut eveniet?
              </p>

              <Link href="" className="italic underline text-[#4c5354]">
                Dowiedz się węcej
              </Link>
            </div>
          </div>

          {/* post 3 */}

          <div className="blog__post max-w-[420px] shadow-custom2 rounded-[10px] overflow-hidden cursor-pointer group">
            <div className="relative overflow-hidden">
              <Image
                className="group-hover:scale-110 transition-all duration-500"
                src="/img/blog/soil-2.jpg"
                width={400}
                height={400}
                alt=""
              />

              <div className="bg-accent absolute bottom-0 left-0 text-white text-base tracking-[2.24px] font-medium uppercase py-[6px] px-[18px]">
                Ochrona środowiska
              </div>
            </div>

            <div className="px-5 py-6">
              <h4 className="h4 mb-[10px]">
                Rewitalizacja obszarów zdegradowanych jako ważny element
                zwiększania przestrzeni publicznej oraz minimalizacja skutków
                antropopresji.
              </h4>

              <p className="font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                harum quod necessitatibus.
              </p>

              <Link href="" className="italic underline text-[#4c5354]">
                Dowiedz się więcej
              </Link>
            </div>
          </div>

          {/* post 4 */}

          <div className="blog__post max-w-[420px] shadow-custom2 rounded-[10px] overflow-hidden cursor-pointer group">
            <div className="relative overflow-hidden">
              <Image
                className="group-hover:scale-110 transition-all duration-500"
                src="/img/blog/soil-3.jpg"
                width={400}
                height={400}
                alt=""
              />

              <div className="bg-accent absolute bottom-0 left-0 text-white text-base tracking-[2.24px] font-medium uppercase py-[6px] px-[18px]">
                Ochrona środowiska
              </div>
            </div>

            <div className="px-5 py-6">
              <h4 className="h4 mb-[10px]">
                Przydatność materii organicznej z węgla brunatnego i torfu do
                zwiększania aktywności biologicznej ekosystemów na obszarach
                zdegradowanych chemicznie.
              </h4>

              <p className="font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                harum quod necessitatibus.
              </p>

              <Link href="" className="italic underline text-[#4c5354]">
                Dowiedz się więcej
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
