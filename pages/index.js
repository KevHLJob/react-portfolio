import Head from "next/head";
import Button from "@material-ui/core/Button";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import {
  SiJavascript,
  SiJava,
  SiTailwindcss,
  SiMicrosoftsqlserver,
  SiMysql,
} from "react-icons/si";
import { FaVuejs, FaHtml5, FaCss3 } from "react-icons/fa";
import Image from "next/image";
import Data from "../public/data.svg";
import Imgnft from "../public/Imgnft.png";
import Imgdo from "../public/Imgdo.png";
import Imgcripto from "../public/imgcripto.png";
import Imgcovid from "../public/Imgcovid.png";
import Imgneg from "../public/Imgnegocio.png";
import Imgcod from "../public/Imgcod.png";

import { useState } from "react";

export default function Home() {
  const [darkMode, setdarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portfolio KevDev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-8 md:px-20 lg:px-40 dark:bg-sky-900">
        <section className="min-h-screen">
          {/* Nav of introduction */}
          <nav className="py-10 mb-15 flex justify-between">
            <h1 className="text-3xl hover:text-sky-700 dark:text-blue-50">
              KevDev
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setdarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-blue-50 hover:text-cyan-600 "
                />
              </li>
            </ul>
          </nav>
          {/* Name, profesion, About me */}
          <div className="text-center p-10">
            <h2 className="text-2xl py2 text-sky-700 font-medium md:text-6xl dark:text-sky-200">
              Kevin López Meza
            </h2>
            <h3 className="text-2xl py-1 md:text-3xl dark:text-blue-50">
              Frontend Developer.
            </h3>
            <p className="text-md py-5 leading-6 text-gray-700 md:text-xl max-w-lg mx-auto dark:text-blue-50">
              Hola bienvenido a mi portfolio, Welcome to my portfolio.
            </p>
          </div>

          {/* if add more icons, gap-16 */}
          <div className="text-6xl relative mx-auto flex justify-center py-2 w-10 h-10 hover:text-cyan-600 dark:text-blue-50">
            <a href="https://www.linkedin.com/in/kevin-l%C3%B3pez-meza-5b3a3a213?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BjgrPuYn7ToymsO27yQJEWQ%3D%3D">
              <AiFillLinkedin />
            </a>
          </div>
          <div>
            <a href="https://github.com/kevHLJob">
              <AiFillGithub
                className="top-10 text-6xl relative mx-auto flex justify-center py-2 w-13 h-13 hover:text-cyan-600 dark:text-blue-50"
                href="https://github.com/kevHLJob"
              />
            </a>
          </div>
        </section>
        {/* Sección de tecnologías que manejo */}
        <section>
          <div>
            <h3 className="text-3xl text-center dark:text-blue-50">
              {" "}
              Acerca de mi perfil
            </h3>
            <p className="text-md py-2 leading-8 text-gray-700 dark:text-blue-50 text-justify">
              Soy un Ingeniero en Sistemas Informáticos, académicamente me
              inicié en el mundo de la tecnología hace 5 años, en el cual
              desarrollé gran colaboración de trabajo en equipo con mis
              compañeros de la universidad, crecimiento en tecnologías como:
              Java, C# con proyectos basados en los requerimientos académicos
              evaluaciones, vinculado a sistemas de gestión de bases de datos
              como SQL Server y Mysql, obteniendo un crecimiento paulatino en el
              desarrollo de software, dispuesto a seguir aprendiendo y aportando
              mi visión, trabajo e ideas. Actualmente he desarrollado pequeños
              proyectos web personales, para ampliar conocimientos en desarrollo
              web.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={Imgnft} width={200} height={120} alt="Programación" />
              <h2 className="italic font-bold">NFT Website demo</h2>
              <p className="py-2 text-justify">
                Idea enfocada en un activo digital encriptado, basado en la
                tendencia del mercado, se trata de un tipo especial de token
                criptográfico que representa algo único.
              </p>
              <Button
                variant="contained"
                color="primary"
                href="https://kevnftpage.netlify.app/"
              >
                Ver Página
              </Button>

              <div className="py-2">
                <p>HTML</p>
                <p>CSS</p>
                <p>Javascript</p>
              </div>

              <div className="grid grid-cols-3 divide-x my-3">
                <FaHtml5 className="text-4xl hover:text-cyan-600" />
                <FaCss3 className="text-4xl hover:text-cyan-600" />
                <SiJavascript className="text-4xl hover:text-cyan-600" />
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={Imgdo} width={200} height={120} alt="Programación" />
              <h2 className="italic font-bold">To-do-list App</h2>
              <p className="py-2 text-justify">
                Diseñado para organizar las tareas del día a día y con esto
                administrar el tiempo adecuadamente es un una app demostrativa,
                puede ordenar las tareas finalizadas.
              </p>
              <Button
                variant="contained"
                color="primary"
                href="https://worklist-777.netlify.app/"
              >
                Ver Página
              </Button>

              <div className="py-2">
                <p>HTML</p>
                <p>CSS</p>
                <p>Javascript</p>
              </div>

              <div className="grid grid-cols-3 divide-x my-3">
                <FaHtml5 className="text-4xl hover:text-cyan-600" />
                <FaCss3 className="text-4xl hover:text-cyan-600" />
                <SiJavascript className="text-4xl hover:text-cyan-600" />
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                src={Imgcripto}
                width={200}
                height={120}
                alt="Programación"
              />
              <h3 className="italic font-bold">CryptoKev</h3>
              <p className="py-2 text-justify">
                Dedicada a la muestra de los precios de las criptomonedas,
                cuenta con 100 criptomonedas, información obtenida de coingecko.
              </p>
              <Button
                variant="contained"
                color="primary"
                href="https://criptoapp77.netlify.app/"
              >
                Ver Página
              </Button>

              <div className="py-2">
                <p>HTML</p>
                <p>CSS</p>
                <p>Vue.js</p>
              </div>

              <div className="grid grid-cols-3 divide-x my-3">
                <FaHtml5 className="text-4xl hover:text-cyan-600" />
                <FaCss3 className="text-4xl hover:text-cyan-600" />
                <FaVuejs className="text-4xl hover:text-cyan-600" />
              </div>
            </div>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                src={Imgcovid}
                width={200}
                height={120}
                alt="Programación"
              />
              <h3 className="italic font-bold">Covid App</h3>
              <p className="py-2 text-justify">
                Diseñada para consultar el total de casos y muertes por
                COVID-19, enfocada en informar a la población.
              </p>
              <Button
                variant="contained"
                color="primary"
                href="https://covid-api-777.netlify.app/"
              >
                Ver Página
              </Button>

              <div className="py-2">
                <p>HTML</p>
                <p>CSS</p>
                <p>Vue.js</p>
              </div>

              <div className="grid grid-cols-3 divide-x my-3">
                <FaHtml5 className="text-4xl hover:text-cyan-600" />
                <FaCss3 className="text-4xl hover:text-cyan-600" />
                <FaVuejs className="text-4xl hover:text-cyan-600" />
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={Imgneg} width={200} height={120} alt="Programación" />
              <h3 className="italic font-bold">Website de Servicios</h3>
              <p className="py-2 text-justify">
                Desarrollado como un website para mostrar los servicios
                profesionales de un perfil en especifico.
              </p>
              <Button
                variant="contained"
                color="primary"
                href="https://wsd-service.netlify.app/"
              >
                Ver Página
              </Button>

              <div className="py-2">
                <p>HTML</p>
                <p>CSS</p>
                <p>Javascript</p>
              </div>
              <div className="grid grid-cols-3 divide-x my-3">
                <FaHtml5 className="text-4xl hover:text-cyan-600" />
                <FaCss3 className="text-4xl hover:text-cyan-600" />
                <SiJavascript className="text-4xl hover:text-cyan-600" />
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={Imgcod} width={200} height={120} alt="Programación" />
              <h3 className="italic font-bold">
                Codificador prueba AluraLATAM
              </h3>
              <p className="py-2 text-justify">
                Dedicado a codificar letras para una prueba del programa
                internacional Alura Latam.
              </p>
              <Button
                variant="contained"
                color="primary"
                href="https://alura-test-encriptador.netlify.app/"
              >
                Ver Página
              </Button>

              <div className="py-2">
                <p>HTML</p>
                <p>CSS</p>
                <p>Javascript</p>
              </div>

              <div className="grid grid-cols-3 divide-x my-3">
                <FaHtml5 className="text-4xl hover:text-cyan-600" />
                <FaCss3 className="text-4xl hover:text-cyan-600" />
                <SiJavascript className="text-4xl hover:text-cyan-600" />
              </div>
            </div>
          </div>
        </section>
        {/* end Portfolio de proyectos */}

        <section>
          <div>
            <h3 className="text-center text-4xl dark:text-slate-50">
              Tecnologías
            </h3>
            <div className="grid grid-cols-4 gap-4 place-items-center h-56 ...">
              <div>
                <FaHtml5 className="text-6xl dark:text-stone-50" />
              </div>
              <div>
                <SiJavascript className="text-6xl dark:text-stone-50" />
              </div>
              <div>
                <SiJava className="text-6xl dark:text-stone-50" />
              </div>
              <div>
                <SiTailwindcss className="text-6xl dark:text-stone-50" />
              </div>
              <div>
                <FaVuejs className="text-6xl dark:text-stone-50" />
              </div>
              <div>
                <FaCss3 className="text-6xl dark:text-stone-50" />
              </div>
              <div>
                <SiMicrosoftsqlserver className="text-6xl dark:text-stone-50" />
              </div>
              <div>
                <SiMysql className="text-6xl dark:text-stone-50" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
