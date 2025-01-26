import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-amarillo px-6 lg:px-20">
      {/* Primera sección */}
      <section className="flex flex-col lg:flex-row items-center justify-center min-h-screen space-y-6 lg:space-y-0 lg:space-x-10">
        {/* Imagen */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/assets/img/ney.jpg"
            alt="Sobre Ney Martínez"
            width={700}
            height={700}
            className="rounded-md object-cover mt-10 mb-10 shadow-lg max-w-[90%] h-auto sm:max-w-[70%] md:max-w-[60%] lg:max-w-full"
            priority
          />
        </div>
        {/* Texto */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <p className="text-lg md:text-xl font-medium text-verdes">
            Soy Ingeniero Industrial, cuadrada y cuantitativa, “una hoja de Excel con patas”; creo firmemente que todo es medible, de forma cuantitativa y cualitativa. “Lo que no se mide, no se mejora”.
            <br />
            <br />
            A mis 31 años pasaba esa crisis existencial en la que me preguntaba ¿Cómo y dónde quería estar en 10 años? ¿Cuál era mi propósito de vida?... ¿Te lo has preguntado? Buscando respuestas decidí estudiar coaching y empecé a formarme como Coach Organizacional, Coach Ejecutivo, Coach de hábitos y Coach de vida. En los siguientes 4 años no paré de estudiar, y al intentar ejercer me di cuenta de que una sesión de coaching no se puede plasmar en una hoja de Excel, así que decidí abrir un “Word”, una hoja en blanco con la cual acompaño a las organizaciones y a las personas a plasmar sus metas y la ruta para alcanzarlas.
            <br />
            <br />
            En 2018 me uní a un equipo para formarme en oratoria y, a través de programas personalizados, acompañar a otros a desarrollar su habilidad. Como mentora y coach de oratoria, al igual que un PowerPoint, acompaño a las personas a darle animación, color y transición a su comunicación.
          </p>
        </div>
      </section>

      {/* Segunda sección */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen space-y-6 lg:space-y-0 lg:space-x-10">
        {/* Texto */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <h6 className="text-3xl md:text-5xl lg:text-6xl text-rojo italic font-serif">
            "Hacer que las cosas sucedan"
          </h6>
          <p className="text-lg md:text-xl font-medium text-amarillo bg-verdes rounded-md p-4 shadow-md">
            Muchas veces escuché a una líder decir esto mientras desarrollaba mi carrera profesional como Ingeniero Industrial en una empresa internacional en Venezuela. Durante esos 12 años aprendí a definir estrategias, trazar planes, definir metodologías para hacer seguimiento, definir indicadores, medirlos, hacer seguimiento y desafiarlos, todo alineado a un objetivo común.
            <br />
            <br />
            Mientras cursaba la carrera en la universidad hice mi primer mapa de sueños. Un mapa muy convencional donde la cúspide del éxito después de tener una carrera, casa, auto y viajar un poco era tener una familia con 2 hijos, perritos, gato y jardín incluido.
            <br />
            <br />
            Fue mi primera ruta, no necesariamente de logro, porque luego de casarme llegó el divorcio sin formar la soñada familia. Era 2018 y Venezuela padecía una crisis política, social y económica que obligaba a muchos a emigrar.
            <br />
            <br />
            Emigrar no estaba en mi tablero de sueños, no era una ruta alternativa, pero fue el camino que tuve que tomar.
            <br />
            <br />
            Allí entendí que ser líder no tiene que ver con tener personas a cargo o tener un cargo, ser líder es <strong>&quot;Hacer que las cosas sucedan&quot;</strong>, y eso incluye nuestra propia vida.
          </p>
        </div>
        {/* Imagen */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/assets/img/ney1.jpg"
            alt="Sobre Ney Martínez"
            width={500}
            height={500}
            className="rounded-md object-cover mt-10 mb-10 shadow-lg max-w-[90%] h-auto sm:max-w-[70%] md:max-w-[60%] lg:max-w-full"
            priority
          />
        </div>
      </section>

      {/* Tercera sección */}
      <section className="flex flex-col lg:flex-row items-center justify-center min-h-screen space-y-6 lg:space-y-0 lg:space-x-10">
        {/* Imagen */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/assets/img/ney2.jpg"
            alt="Sobre Ney Martínez"
            width={700}
            height={700}
            className="rounded-md object-cover shadow-lg max-w-[90%] h-auto sm:max-w-[70%] md:max-w-[60%] lg:max-w-full mt-10 mb-10"
            priority
          />
        </div>
        {/* Texto */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <p className="text-lg md:text-xl font-medium text-amarillo bg-verdes rounded-md p-4 shadow-md">
            Empecé escribiendo la vida que quería construir en un lienzo de papel y post-it, definiendo todo eso que durante 12 años viví en la empresa que me formó como profesional, agregando mis aportes como Coach de Vida, Coach de Hábitos y metodologías clave como OKRs, plan estratégico y libro de vida. De allí nace mi método “RUTA AL LOGRO”.
            <br />
            <br />
            Un método donde convierto la organización, disciplina y compromiso en herramientas de crecimiento. Tengo el superpoder de convertir el conocimiento complejo en información clara y útil, y desde allí te acompaño a definir tu propia ruta y evolucionar en ella a tu ritmo, pero de forma contundente para que puedas plasmar tus proyectos, tus metas y tu propósito en algo que vives y comunicas para agregar Valor, Inspiración y Propósito.
          </p>
        </div>
      </section>
    </div>
  );
}
