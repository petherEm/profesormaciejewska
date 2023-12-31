"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import SliderX from "./SliderX";

const AboutMe = () => {
  return (
    <section id="aboutme" className="services mb-20 ">
      <div className="bg-orange-100 shadow-xl max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] xl:pt-[70px] px-6 xl:px-0 relative h-auto flex items-center xl:items-start -z-10">
        <div className="container mx-auto">
          <div className="services__top flex flex-col xl:mb-[60px]">
            {/* About Me */}
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mt-4"
            >
              <h2 className="h2 flex-[30%] mb-4 xl:mb-0 text-left xl:text-left">
                O mnie
              </h2>

              <div className="mt-4">
                <p className="flex-[70%] text-left xl:text-left max-w-2xl xl:max-w-none">
                  Jestem Profesorem doktorem habilitowanym w dziedzinie nauk
                  rolniczych specjalizującym się w ochronie i kształtowaniu
                  środowiska przyrodniczego. Tytuł profesora uzyskałam w roku
                  2000. W 2016 roku, dzięki mojemu bogatemu dorobkowi naukowemu,
                  Centralna Komisja ds. Stopni i Tytułów przyznała mi
                  uprawnienia profesorskie do nadawania stopni naukowych i
                  tytułów w dziedzinie nauk inżynieryjno-technicznych.
                  <br />
                  Moja przygoda z nauką rozpoczęła się na Uniwersytecie
                  Warszawskim, na Wydziale Chemii. W 1985 roku zdobyłam tytuł
                  Doktora w zakresie gleboznawstwa. Kolejne lata poświęciłam na
                  rozwijanie swojej kariery naukowej, co zaowocowało uzyskaniem
                  w 1994 roku stopnia doktora habilitowanego w dziedzinie nauk
                  rolniczych, koncentrując się na ochronie i kształtowaniu
                  środowiska. Moja działalność naukowa zaowocowała licznymi
                  publikacjami. Jestem autorką lub współautorką ponad 200 prac,
                  w tym 85 oryginalnych artykułów naukowych opublikowanych w
                  renomowanych czasopismach krajowych i zagranicznych. Moje
                  dorobek obejmuje również 4 książki autorskie, 13 redagowanych
                  monografii, 29 rozdziałów w pracach zbiorowych oraz 36
                  publikacji w materiałach konferencyjnych. Brałam aktywny
                  udział w ponad sześćdziesięciu konferencjach międzynarodowych,
                  prezentując moje badania.
                </p>
                <br />
                <p className="flex-[70%] text-left xl:text-left max-w-2xl xl:max-w-none">
                  Miałam przyjemność zdobywać doświadczenie naukowe w
                  prestiżowych uczelniach za granicą, takich jak Michigan State
                  University w Stanach Zjednoczonych, Sorbone University we
                  Francji oraz Kazachski Uniwersytet Agrotechniczny w Astanie.
                  Moje zainteresowania naukowe skupiają się wokół projektów
                  dotyczących rekultywacji i zagospodarowania obszarów
                  zdegradowanych, głównie na terenach postindustrialnych i
                  pogórniczych. Współpracowałam przy wielu projektach
                  naukowo-badawczych, w tym tych finansowanych przez
                  Ministerstwo Nauki oraz podmioty gospodarcze. Wiele z moich
                  badań znalazło zastosowanie w praktyce, w tym w Kopalni Węgla
                  Brunatnego „Konin”. Z dumą mogę stwierdzić, że moja praca
                  naukowa przyczyniła się do postępu w dziedzinie ochrony i
                  kształtowania środowiska, zarówno w kraju, jak i za granicą.
                </p>
                <br />
              </div>
            </motion.div>

            {/* Specialization */}
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mt-8 mb-8 w-[80%]"
            >
              {/* SLIDER X */}
              <div>{/* <SliderX /> */}</div>
              <h2 className="h2 flex-[30%] mb-4 xl:mb-0 text-left xl:text-left">
                Główne specjalizacje
              </h2>

              <div className="mt-4">
                <ul>
                  <li className="flex items-center gap-x-4 mb-4">
                    <div className="w-[40xp]">
                      <svg
                        width="26"
                        height="25"
                        viewBox="0 0 26 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.6"
                          d="M9.41404 17.8247L8.39163 17.219C5.4697 15.5452 3.77228 12.339 4.03063 8.98157C4.03063 9.19473 4.00641 9.41767 4.00641 9.63572V11.0894L4.08393 24.875L12.806 19.7968L9.65147 17.9603L9.41404 17.8247Z"
                          fill="#a632d7"
                        />
                        <path
                          opacity="0.2"
                          d="M21.5909 9.60178C21.6173 12.744 19.9514 15.6576 17.2299 17.2288L16.1978 17.8247L15.9604 17.9604L12.806 19.7969L21.528 24.875L21.5716 11.1233V9.60184L21.5909 9.60178ZM21.5716 9.4613C21.5716 9.48555 21.5716 9.50974 21.5716 9.52916C21.5716 9.54852 21.5716 9.48555 21.5716 9.4613ZM21.5716 9.15121C21.5716 9.18993 21.5716 9.23354 21.5716 9.27233C21.5716 9.23354 21.5716 9.19482 21.5716 9.15121ZM21.5716 9.03491C21.5716 9.03491 21.5716 9.06881 21.5716 9.08817C21.5716 9.1076 21.5716 9.05427 21.5716 9.03491Z"
                          fill="#a632d7"
                        />
                        <path
                          d="M16.1978 17.8248L17.2202 17.219C20.1421 15.5453 21.8396 12.339 21.5812 8.98164C21.5812 8.74905 21.5376 8.49705 21.5037 8.28388V8.22573C21.4714 8.0028 21.4278 7.78475 21.3729 7.57158V7.52309C21.3201 7.29376 21.2555 7.06734 21.1791 6.84475C21.0125 6.37981 20.805 5.93063 20.5588 5.50251L20.4764 5.35229C20.3941 5.20693 20.3069 5.05672 20.2148 4.91619C20.1227 4.77568 20.1276 4.77568 20.0791 4.70784C19.9677 4.53825 19.8465 4.37349 19.7205 4.22328L19.4928 3.95193L19.2796 3.70965C19.1924 3.61759 19.11 3.52552 19.0179 3.4383C18.9259 3.35108 18.8241 3.25417 18.7224 3.16211L18.3832 2.86653C18.2572 2.76477 18.1312 2.66302 18.0004 2.57095L17.792 2.42074C17.5982 2.28991 17.3947 2.15908 17.1863 2.03794L16.9973 1.93618C16.8908 1.87804 16.7841 1.81504 16.6727 1.76174L16.382 1.62606L16.1978 1.52431L15.8199 1.3741L15.6842 1.32564L15.2481 1.18512H15.1657C15.0106 1.13667 14.8556 1.0979 14.6812 1.06398H14.6085C14.4534 1.03006 14.2984 1.00099 14.1239 0.976763H14.027L13.5909 0.923462H13.4213C13.3002 0.923462 13.179 0.923462 13.0628 0.923462H12.5298C12.4086 0.923462 12.2924 0.923462 12.1712 0.923462H12.0016L11.5655 0.976763H11.4686C11.3087 1.00099 11.1536 1.03006 10.9841 1.06398H10.9113C10.7514 1.0979 10.5964 1.13667 10.4268 1.18512H10.3444L9.90834 1.32564L9.77264 1.3741L9.39468 1.52431L9.18148 1.61638L8.8859 1.75205L8.56609 1.92649L8.37712 2.02825C8.16875 2.14938 7.96525 2.28021 7.77142 2.41104L7.56306 2.56126C7.43223 2.65332 7.30625 2.75508 7.18027 2.85684L6.84107 3.15241C6.73932 3.24448 6.63756 3.33655 6.5455 3.42861L6.28384 3.69996L6.07063 3.94224C5.99795 4.02946 5.91558 4.12153 5.84289 4.21359C5.77021 4.30566 5.59577 4.53824 5.48432 4.69814C5.43587 4.76598 5.39226 4.83382 5.34865 4.90651C5.30504 4.97919 5.16936 5.19724 5.08699 5.34261L5.00461 5.49282C4.77266 5.92713 4.5797 6.38116 4.42799 6.84958C4.35159 7.07216 4.28689 7.29858 4.23417 7.52791V7.57152C4.18087 7.78957 4.13726 8.00762 4.10334 8.23056V8.28871C4.06942 8.52129 4.04035 8.77324 4.02581 8.98647C3.76745 12.3439 5.46488 15.5501 8.38681 17.2239L9.41406 17.8248L9.6515 17.9604L12.806 19.7969L15.9604 17.9604L16.1978 17.8248Z"
                          fill="#a632d7"
                        />
                        <path
                          d="M13.1112 5.76905L14.1482 7.86234C14.1666 7.9088 14.2098 7.94078 14.2596 7.94468L16.571 8.27902C16.6531 8.29112 16.7098 8.3674 16.6978 8.44951C16.6929 8.48242 16.6773 8.51277 16.6534 8.53585L14.9817 10.164C14.9444 10.1964 14.9276 10.2465 14.938 10.2948L15.3305 12.5964C15.344 12.6783 15.2887 12.7556 15.2068 12.7691C15.1764 12.7742 15.1451 12.7697 15.1173 12.7563L13.0483 11.6661H12.9126L10.8678 12.7563C10.7929 12.7922 10.7032 12.7607 10.6673 12.6859C10.654 12.6581 10.6496 12.6269 10.6546 12.5964L11.047 10.2948C11.0574 10.2465 11.0407 10.1964 11.0034 10.164L9.33172 8.53585C9.27197 8.47829 9.27017 8.38322 9.32772 8.32344C9.3508 8.29949 9.38118 8.28385 9.41409 8.27902L11.7254 7.94468C11.7753 7.94078 11.8185 7.9088 11.8368 7.86234L12.869 5.76905C12.918 5.70214 13.0121 5.68767 13.0789 5.73673C13.0913 5.74579 13.1022 5.75668 13.1112 5.76905Z"
                          fill="#a632d7"
                        />
                      </svg>
                    </div>

                    <p>
                      Inżynieria środowiska glebowego, gleboznawstwo,
                      rekultywacja i zagospodarowanie obszarów zdegradowanych.
                    </p>
                  </li>
                  <li className="flex items-center gap-x-4 mb-4">
                    <div className="w-[40xp]">
                      <svg
                        width="26"
                        height="25"
                        viewBox="0 0 26 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.6"
                          d="M9.41404 17.8247L8.39163 17.219C5.4697 15.5452 3.77228 12.339 4.03063 8.98157C4.03063 9.19473 4.00641 9.41767 4.00641 9.63572V11.0894L4.08393 24.875L12.806 19.7968L9.65147 17.9603L9.41404 17.8247Z"
                          fill="#a632d7"
                        />
                        <path
                          opacity="0.2"
                          d="M21.5909 9.60178C21.6173 12.744 19.9514 15.6576 17.2299 17.2288L16.1978 17.8247L15.9604 17.9604L12.806 19.7969L21.528 24.875L21.5716 11.1233V9.60184L21.5909 9.60178ZM21.5716 9.4613C21.5716 9.48555 21.5716 9.50974 21.5716 9.52916C21.5716 9.54852 21.5716 9.48555 21.5716 9.4613ZM21.5716 9.15121C21.5716 9.18993 21.5716 9.23354 21.5716 9.27233C21.5716 9.23354 21.5716 9.19482 21.5716 9.15121ZM21.5716 9.03491C21.5716 9.03491 21.5716 9.06881 21.5716 9.08817C21.5716 9.1076 21.5716 9.05427 21.5716 9.03491Z"
                          fill="#a632d7"
                        />
                        <path
                          d="M16.1978 17.8248L17.2202 17.219C20.1421 15.5453 21.8396 12.339 21.5812 8.98164C21.5812 8.74905 21.5376 8.49705 21.5037 8.28388V8.22573C21.4714 8.0028 21.4278 7.78475 21.3729 7.57158V7.52309C21.3201 7.29376 21.2555 7.06734 21.1791 6.84475C21.0125 6.37981 20.805 5.93063 20.5588 5.50251L20.4764 5.35229C20.3941 5.20693 20.3069 5.05672 20.2148 4.91619C20.1227 4.77568 20.1276 4.77568 20.0791 4.70784C19.9677 4.53825 19.8465 4.37349 19.7205 4.22328L19.4928 3.95193L19.2796 3.70965C19.1924 3.61759 19.11 3.52552 19.0179 3.4383C18.9259 3.35108 18.8241 3.25417 18.7224 3.16211L18.3832 2.86653C18.2572 2.76477 18.1312 2.66302 18.0004 2.57095L17.792 2.42074C17.5982 2.28991 17.3947 2.15908 17.1863 2.03794L16.9973 1.93618C16.8908 1.87804 16.7841 1.81504 16.6727 1.76174L16.382 1.62606L16.1978 1.52431L15.8199 1.3741L15.6842 1.32564L15.2481 1.18512H15.1657C15.0106 1.13667 14.8556 1.0979 14.6812 1.06398H14.6085C14.4534 1.03006 14.2984 1.00099 14.1239 0.976763H14.027L13.5909 0.923462H13.4213C13.3002 0.923462 13.179 0.923462 13.0628 0.923462H12.5298C12.4086 0.923462 12.2924 0.923462 12.1712 0.923462H12.0016L11.5655 0.976763H11.4686C11.3087 1.00099 11.1536 1.03006 10.9841 1.06398H10.9113C10.7514 1.0979 10.5964 1.13667 10.4268 1.18512H10.3444L9.90834 1.32564L9.77264 1.3741L9.39468 1.52431L9.18148 1.61638L8.8859 1.75205L8.56609 1.92649L8.37712 2.02825C8.16875 2.14938 7.96525 2.28021 7.77142 2.41104L7.56306 2.56126C7.43223 2.65332 7.30625 2.75508 7.18027 2.85684L6.84107 3.15241C6.73932 3.24448 6.63756 3.33655 6.5455 3.42861L6.28384 3.69996L6.07063 3.94224C5.99795 4.02946 5.91558 4.12153 5.84289 4.21359C5.77021 4.30566 5.59577 4.53824 5.48432 4.69814C5.43587 4.76598 5.39226 4.83382 5.34865 4.90651C5.30504 4.97919 5.16936 5.19724 5.08699 5.34261L5.00461 5.49282C4.77266 5.92713 4.5797 6.38116 4.42799 6.84958C4.35159 7.07216 4.28689 7.29858 4.23417 7.52791V7.57152C4.18087 7.78957 4.13726 8.00762 4.10334 8.23056V8.28871C4.06942 8.52129 4.04035 8.77324 4.02581 8.98647C3.76745 12.3439 5.46488 15.5501 8.38681 17.2239L9.41406 17.8248L9.6515 17.9604L12.806 19.7969L15.9604 17.9604L16.1978 17.8248Z"
                          fill="#a632d7"
                        />
                        <path
                          d="M13.1112 5.76905L14.1482 7.86234C14.1666 7.9088 14.2098 7.94078 14.2596 7.94468L16.571 8.27902C16.6531 8.29112 16.7098 8.3674 16.6978 8.44951C16.6929 8.48242 16.6773 8.51277 16.6534 8.53585L14.9817 10.164C14.9444 10.1964 14.9276 10.2465 14.938 10.2948L15.3305 12.5964C15.344 12.6783 15.2887 12.7556 15.2068 12.7691C15.1764 12.7742 15.1451 12.7697 15.1173 12.7563L13.0483 11.6661H12.9126L10.8678 12.7563C10.7929 12.7922 10.7032 12.7607 10.6673 12.6859C10.654 12.6581 10.6496 12.6269 10.6546 12.5964L11.047 10.2948C11.0574 10.2465 11.0407 10.1964 11.0034 10.164L9.33172 8.53585C9.27197 8.47829 9.27017 8.38322 9.32772 8.32344C9.3508 8.29949 9.38118 8.28385 9.41409 8.27902L11.7254 7.94468C11.7753 7.94078 11.8185 7.9088 11.8368 7.86234L12.869 5.76905C12.918 5.70214 13.0121 5.68767 13.0789 5.73673C13.0913 5.74579 13.1022 5.75668 13.1112 5.76905Z"
                          fill="#a632d7"
                        />
                      </svg>
                    </div>
                    <p>
                      Rewitalizacja terenów zurbanizowanych, poprzemysłowych i
                      powojskowych.
                    </p>
                  </li>
                  <li className="flex items-center gap-x-4">
                    <div className="w-[40xp]">
                      <svg
                        width="26"
                        height="25"
                        viewBox="0 0 26 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.6"
                          d="M9.41404 17.8247L8.39163 17.219C5.4697 15.5452 3.77228 12.339 4.03063 8.98157C4.03063 9.19473 4.00641 9.41767 4.00641 9.63572V11.0894L4.08393 24.875L12.806 19.7968L9.65147 17.9603L9.41404 17.8247Z"
                          fill="#a632d7"
                        />
                        <path
                          opacity="0.2"
                          d="M21.5909 9.60178C21.6173 12.744 19.9514 15.6576 17.2299 17.2288L16.1978 17.8247L15.9604 17.9604L12.806 19.7969L21.528 24.875L21.5716 11.1233V9.60184L21.5909 9.60178ZM21.5716 9.4613C21.5716 9.48555 21.5716 9.50974 21.5716 9.52916C21.5716 9.54852 21.5716 9.48555 21.5716 9.4613ZM21.5716 9.15121C21.5716 9.18993 21.5716 9.23354 21.5716 9.27233C21.5716 9.23354 21.5716 9.19482 21.5716 9.15121ZM21.5716 9.03491C21.5716 9.03491 21.5716 9.06881 21.5716 9.08817C21.5716 9.1076 21.5716 9.05427 21.5716 9.03491Z"
                          fill="#a632d7"
                        />
                        <path
                          d="M16.1978 17.8248L17.2202 17.219C20.1421 15.5453 21.8396 12.339 21.5812 8.98164C21.5812 8.74905 21.5376 8.49705 21.5037 8.28388V8.22573C21.4714 8.0028 21.4278 7.78475 21.3729 7.57158V7.52309C21.3201 7.29376 21.2555 7.06734 21.1791 6.84475C21.0125 6.37981 20.805 5.93063 20.5588 5.50251L20.4764 5.35229C20.3941 5.20693 20.3069 5.05672 20.2148 4.91619C20.1227 4.77568 20.1276 4.77568 20.0791 4.70784C19.9677 4.53825 19.8465 4.37349 19.7205 4.22328L19.4928 3.95193L19.2796 3.70965C19.1924 3.61759 19.11 3.52552 19.0179 3.4383C18.9259 3.35108 18.8241 3.25417 18.7224 3.16211L18.3832 2.86653C18.2572 2.76477 18.1312 2.66302 18.0004 2.57095L17.792 2.42074C17.5982 2.28991 17.3947 2.15908 17.1863 2.03794L16.9973 1.93618C16.8908 1.87804 16.7841 1.81504 16.6727 1.76174L16.382 1.62606L16.1978 1.52431L15.8199 1.3741L15.6842 1.32564L15.2481 1.18512H15.1657C15.0106 1.13667 14.8556 1.0979 14.6812 1.06398H14.6085C14.4534 1.03006 14.2984 1.00099 14.1239 0.976763H14.027L13.5909 0.923462H13.4213C13.3002 0.923462 13.179 0.923462 13.0628 0.923462H12.5298C12.4086 0.923462 12.2924 0.923462 12.1712 0.923462H12.0016L11.5655 0.976763H11.4686C11.3087 1.00099 11.1536 1.03006 10.9841 1.06398H10.9113C10.7514 1.0979 10.5964 1.13667 10.4268 1.18512H10.3444L9.90834 1.32564L9.77264 1.3741L9.39468 1.52431L9.18148 1.61638L8.8859 1.75205L8.56609 1.92649L8.37712 2.02825C8.16875 2.14938 7.96525 2.28021 7.77142 2.41104L7.56306 2.56126C7.43223 2.65332 7.30625 2.75508 7.18027 2.85684L6.84107 3.15241C6.73932 3.24448 6.63756 3.33655 6.5455 3.42861L6.28384 3.69996L6.07063 3.94224C5.99795 4.02946 5.91558 4.12153 5.84289 4.21359C5.77021 4.30566 5.59577 4.53824 5.48432 4.69814C5.43587 4.76598 5.39226 4.83382 5.34865 4.90651C5.30504 4.97919 5.16936 5.19724 5.08699 5.34261L5.00461 5.49282C4.77266 5.92713 4.5797 6.38116 4.42799 6.84958C4.35159 7.07216 4.28689 7.29858 4.23417 7.52791V7.57152C4.18087 7.78957 4.13726 8.00762 4.10334 8.23056V8.28871C4.06942 8.52129 4.04035 8.77324 4.02581 8.98647C3.76745 12.3439 5.46488 15.5501 8.38681 17.2239L9.41406 17.8248L9.6515 17.9604L12.806 19.7969L15.9604 17.9604L16.1978 17.8248Z"
                          fill="#a632d7"
                        />
                        <path
                          d="M13.1112 5.76905L14.1482 7.86234C14.1666 7.9088 14.2098 7.94078 14.2596 7.94468L16.571 8.27902C16.6531 8.29112 16.7098 8.3674 16.6978 8.44951C16.6929 8.48242 16.6773 8.51277 16.6534 8.53585L14.9817 10.164C14.9444 10.1964 14.9276 10.2465 14.938 10.2948L15.3305 12.5964C15.344 12.6783 15.2887 12.7556 15.2068 12.7691C15.1764 12.7742 15.1451 12.7697 15.1173 12.7563L13.0483 11.6661H12.9126L10.8678 12.7563C10.7929 12.7922 10.7032 12.7607 10.6673 12.6859C10.654 12.6581 10.6496 12.6269 10.6546 12.5964L11.047 10.2948C11.0574 10.2465 11.0407 10.1964 11.0034 10.164L9.33172 8.53585C9.27197 8.47829 9.27017 8.38322 9.32772 8.32344C9.3508 8.29949 9.38118 8.28385 9.41409 8.27902L11.7254 7.94468C11.7753 7.94078 11.8185 7.9088 11.8368 7.86234L12.869 5.76905C12.918 5.70214 13.0121 5.68767 13.0789 5.73673C13.0913 5.74579 13.1022 5.75668 13.1112 5.76905Z"
                          fill="#a632d7"
                        />
                      </svg>
                    </div>
                    <p>
                      Od roku 1985 prowadzę badania nad wykorzystaniem materii
                      organicznej z węgla brunatnego, torfu, kompostów, osadów
                      ściekowych, odpadów poprodukcyjnych do agromelioracji gleb
                      piaszczystych oraz do rekultywacji gleb zdegradowanych i
                      zanieczyszczonych chemicznie głównie metalami ciężkimi.
                    </p>
                  </li>
                </ul>
                <p className="flex-[70%] text-center xl:text-left max-w-2xl xl:max-w-none"></p>
                <br />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* GRID CONTAINER */}
    </section>
  );
};

export default AboutMe;
