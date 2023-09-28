import Image from "next/image";

import { FaCircle, FaChevronRight, FaLeaf } from "react-icons/fa";

const TimelineFunctions = () => {
  return (
    <section id="aboutme" className="services mb-20 ">
      <div className="container bg-white mx-auto w-full h-full">
        {/* FUNKCJE NA UCZELNI I NA WYDZIALE */}
        <div className="relative wrap overflow-hidden p-0 md:p-10 h-full">
          <div className="mb-8 flex items-center justify-between mx-auto">
            <h1 className="text-[13px] md:text-xl font-bold mb-8 text-center">
              Funkcje pełnione na Wydziale Geodezji i Kartografii
            </h1>
            <h1 className="text-[13px] md:text-xl font-bold mb-8 text-center">
              Funkcje pełnione na Uczelni
            </h1>
          </div>
          <div
            className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
            style={{ left: "50%" }}
          ></div>

          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-fi px-2 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-[10px] md:text-lg text-white">
                2020 - 2024
              </h1>
            </div>
            <div className="order-1 bg-fuchsia-300 rounded-lg shadow-xl w-5/12 px-2 md:px-6 py-4">
              <h3 className="mb-3 font-normal text-gray-800 text-[11px] md:text-lg">
                Członek Komisji Senackiej ds. Historii i Tradycji
              </h3>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-fi px-2 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-[10px] md:text-lg text-white">
                2020 - 2021
              </h1>
            </div>
            <div className="order-1 bg-fuchsia-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-normal text-gray-800 text-[11px] md:text-lg">
                Kierownik Zakładu Gospodarki Przestrzennej i Nauk o Środowisku
                Przyrodniczym
              </h3>
            </div>
          </div>

          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-fi px-2 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-[10px] md:text-lg text-white">
                2012 - 2020
              </h1>
            </div>
            <div className="order-1 bg-fuchsia-300 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-normal text-gray-800 text-[11px] md:text-lg">
                Dziekan Wydziału Geodezji i Kartografii Politechniki
                Warszawskiej
              </h3>
              <h3 className="mb-3 font-normal text-gray-800 text-[11px] md:text-lg">
                Członek Komisji Senackiej ds. Mienia i Finansów
              </h3>
              <h3 className="mb-3 font-normal text-gray-800 text-[11px] md:text-lg">
                Członek Komisji Senackiej ds. Organizacji Uczelni
              </h3>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-fi px-2 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-[10px] md:text-lg text-white">
                2009 - 2020
              </h1>
            </div>
            <div className="order-1 bg-fuchsia-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-normal text-gray-800 text-[11px] md:text-lg">
                Kierownik Katedry Gospodarki Przestrzennej i Nauk o Środowisku
                Przyrodniczym
              </h3>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-fi px-2 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-[10px] md:text-lg text-white">
                2005 - 2009
              </h1>
            </div>
            <div className="order-1 bg-fuchsia-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-normal text-gray-800 text-[11px] md:text-lg">
                Kierownik Zakładu Gleboznawstwa i Ochrony Gruntów
              </h3>
            </div>
          </div>

          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-fi px-2 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-[10px] md:text-lg text-white">
                2005 - 2008
              </h1>
            </div>
            <div className="order-1 bg-fuchsia-300 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-normal text-gray-800 text-[11px] md:text-lg">
                Przewodnicząca Uczelnianej Komisji Wyborczej Politechniki
                Warszawskiej
              </h3>
              <h3 className="mb-3 font-normal text-gray-800 text-[11px] md:text-lg">
                Członek Komisji Senackiej ds. Kształcenia
              </h3>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-fi px-2 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-[10px] md:text-lg text-white">
                2004 - 2012
              </h1>
            </div>
            <div className="order-1 bg-fuchsia-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-normal text-gray-800 text-[11px] md:text-lg">
                Przewodnicząca Rady Programowo-Naukowej ds. Kierunku studiów
                "Gospodarka Przestrzenna"
              </h3>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-fi px-2 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-[10px] md:text-lg text-white">
                2003 - 2012
              </h1>
            </div>
            <div className="order-1 bg-fuchsia-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-normal text-gray-800 text-[11px] md:text-lg">
                Pełnomocnik Dziekana ds. kierunku studiów "Gospodarka
                Przestrzenna"
              </h3>
            </div>
          </div>

          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-fi px-2 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-[10px] md:text-lg text-white">
                1999 - 2002
              </h1>
            </div>
            <div className="order-1 bg-fuchsia-300 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-normal text-gray-800 text-[11px] md:text-lg">
                Członek Komisji Senackiej ds. Współpracy z Zagranicą
              </h3>
              <h3 className="mb-3 font-normal text-gray-800 text-[11px] md:text-lg">
                Członek Komisji Senackiej ds. Kształcenia
              </h3>
            </div>
          </div>

          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-fi px-2 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-[10px] md:text-lg text-white">
                1999 - 2002
              </h1>
            </div>
            <div className="order-1 bg-fuchsia-300 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-normal text-gray-800 text-[11px] md:text-lg">
                Członek Komisji Senackiej ds. Współpracy z Zagranicą
              </h3>
              <h3 className="mb-3 font-normal text-gray-800 text-[11px] md:text-lg">
                Członek Komisji Senackiej ds. Kształcenia
              </h3>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-fi px-2 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-[10px] md:text-lg text-white">
                1997 - 2005
              </h1>
            </div>
            <div className="order-1 bg-fuchsia-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-normal text-gray-800 text-[11px] md:text-lg">
                Pełnomocnik Dziekana ds. Programów międzynarodowych
              </h3>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-fi px-2 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-[10px] md:text-lg text-white">
                1996 - 1999
              </h1>
            </div>
            <div className="order-1 bg-fuchsia-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-normal text-gray-800 text-[11px] md:text-lg">
                Przewodnicząca Wydziałowej Komisji Rekrutacyjnej
              </h3>
              <h3 className="mb-3 font-normal text-gray-800 text-[11px] md:text-lg">
                Pełnomocnik Dziekana ds. Ustawicznego kształcenia w lata{" "}
                <span className="font-bold">1996 - 1997</span>
              </h3>
              <h3 className="mb-3 font-normal text-gray-800 text-[11px] md:text-lg">
                Członek Komisji Wydziałowej ds. Struktury Wydziału{" "}
                <span className="font-bold">1996 - 1999 oraz 2006</span>
              </h3>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-fi px-2 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-[10px] md:text-lg text-white">
                1992 - 1995
              </h1>
            </div>
            <div className="order-1 bg-fuchsia-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-normal text-gray-800 text-[11px] md:text-lg">
                Sekretarz Wydziałowej Komisji Rekrutacyjnej
              </h3>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-fi px-2 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-[10px] md:text-lg text-white">
                1980 - 2002
              </h1>
            </div>
            <div className="order-1 bg-fuchsia-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-normal text-gray-800 text-[11px] md:text-lg">
                Kierownik Laboratorium Analiz Chemicznych w Zakładzie
                Gleboznawstwa i Ochrony Gruntów
              </h3>
              <h3 className="mb-3 font-normal text-gray-800 text-[11px] md:text-lg">
                Kierownik studenckich praktyk w latach{" "}
                <span className="font-bold">1987, 1989, 1994</span>
              </h3>
            </div>
          </div>
        </div>

        {/* FUNKCJE POZA UCZELNIA */}
        <div className="relative mt-20 wrap overflow-hidden p-0 md:p-10 h-full">
          <div className="mb-8 flex items-center justify-between mx-auto">
            <h1 className="text-xl font-bold mb-8 text-center">
              Funkcje pełnione poza Uczelnią
            </h1>
          </div>
          <div
            className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
            style={{ left: "50%" }}
          ></div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-fi px-2 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-[10px] md:text-lg text-white">
                2017 - 2018
              </h1>
            </div>
            <div className="order-1 bg-fuchsia-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-normal text-gray-800 text-[11px] md:text-lg">
                Przewodnicząca Rady Naukowej Instytutu Geodezji i Kartografii
              </h3>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-fi px-2 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-[10px] md:text-lg text-white">
                2016 - 2017
              </h1>
            </div>
            <div className="order-1 bg-fuchsia-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-normal text-gray-800 text-[11px] md:text-lg">
                Wiceprzewodnicząca Rady Naukowej Instytutu Geodezji i
                Kartografii
              </h3>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-fi px-2 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-[10px] md:text-lg text-white">
                2016
              </h1>
            </div>
            <div className="order-1 bg-fuchsia-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-normal text-gray-800 text-[11px] md:text-lg">
                Członek Rady Naukowej Instytutu Geodezji i Kartografii powołana
                decyzją Ministra Infrastruktury i Budownictwa.
              </h3>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-fi px-2 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-[10px] md:text-lg text-white">
                2016 - 2022
              </h1>
            </div>
            <div className="order-1 bg-fuchsia-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-normal text-gray-800 text-[11px] md:text-lg">
                Członek Państwowej Rady Geodezyjno-Kartograficznej powołana
                decyzją Prezesa Głównego Urzędu Geodezji i Kartografii.
              </h3>
              <h3 className="mb-3 font-normal text-gray-800 text-[11px] md:text-lg">
                Członek Wojewódzkiej Komisji Urbanistyczno-Architektonicznej,
                powołana decyzją Marszałka Województwa Mazowieckiego.
              </h3>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-fi px-2 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-[10px] md:text-lg text-white">
                2015 - 2023
              </h1>
            </div>
            <div className="order-1 bg-fuchsia-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-normal text-gray-800 text-[11px] md:text-lg">
                Członek zespołu zadaniowego ds. kształcenia kadr z zakresu
                gospodarki przestrzennej przy Komitecie Zagospodarowania
                Przestrzennego PAN
              </h3>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-fi px-2 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-[10px] md:text-lg text-white">
                2014 - 2020
              </h1>
            </div>
            <div className="order-1 bg-fuchsia-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-normal text-gray-800 text-[11px] md:text-lg">
                Przewodnicząca Rady Konsultacyjnej Klastra GeoPoli.
              </h3>
              <h3 className="mb-3 font-normal text-gray-800 text-[11px] md:text-lg">
                Członek Klastra GeoPoli reprezentująca Wydział Geodezji i
                Kartografii Politechniki Warszawskiej.
              </h3>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-fi px-2 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-[10px] md:text-lg text-white">
                2015 - 2023
              </h1>
            </div>
            <div className="order-1 bg-fuchsia-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-normal text-gray-800 text-[11px] md:text-lg">
                Członek zespołu zadaniowego ds. kształcenia kadr z zakresu
                gospodarki przestrzennej przy Komitecie Zagospodarowania
                Przestrzennego PAN
              </h3>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-fi px-2 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-[10px] md:text-lg text-white">
                2015
              </h1>
            </div>
            <div className="order-1 bg-fuchsia-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-normal text-gray-800 text-[11px] md:text-lg">
                V-ce przewodnicząca Unii Szkół Kształcących na kierunku studiów
                „gospodarka przestrzenna”
              </h3>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-fi px-2 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-[10px] md:text-lg text-white">
                2012 - 2020
              </h1>
            </div>
            <div className="order-1 bg-fuchsia-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-normal text-gray-800 text-[11px] md:text-lg">
                Przewodnicząca Konwentów Dziekanów Wydziałów Geodezyjnych
              </h3>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-fi px-2 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-[10px] md:text-lg text-white">
                2006
              </h1>
            </div>
            <div className="order-1 bg-fuchsia-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-normal text-gray-800 text-[11px] md:text-lg">
                Przewodnicząca Panelu Ekspertów w Urzędzie Marszałkowskim do
                oceny projektów w ramach Działania 3.3. tj. Zdegradowane Obszary
                Miejskie, Poprzemysłowe i Powojskowe, powołana decyzją Marszałka
                Województwa Mazowieckiego w 2006 roku;
              </h3>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-fi px-2 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-[10px] md:text-lg text-white">
                2004
              </h1>
            </div>
            <div className="order-1 bg-fuchsia-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-normal text-gray-800 text-[11px] md:text-lg">
                Członek Zespołu Sterującego ds. Programu Rządowego dla Terenów
                Poprzemysłowych, powołana decyzją Ministra Środowiska nr 19 z
                dnia 30 listopada 2004;
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineFunctions;
