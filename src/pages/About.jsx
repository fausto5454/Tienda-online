// imagenes
import Nosotros from "../img/about.png";

export const About = () => {
  return (
    <section className="text-justify max-w-[1100px] mx-auto mt-[120px] sm:mt-10 py-12 px-5">
      <div className="flex flex-col justify-center gap-3">
        <h2 className="text-3xl mb-3 font-bold text-primary uppercase">
          Nosotros
        </h2>
        <div className="flex items-center justify-center gap-5">
          <p className="text-primary">
          <b>Free<span className="text-red-500">Market</span></b> es una tienda especializada en moda, ofreciendo una amplia selección de ropa y accesorios para hombres y mujeres de todas las edades. Nos dedicamos a proporcionar productos de alta calidad a precios accesibles, con el firme compromiso de ofrecer una excelente experiencia de compra.
            <br />
            Gracias por visitar nuestra tienda en línea. Te invitamos a explorar nuestra colección y, si tienes alguna consulta, no dudes en ponerte en contacto con nosotros. ¡Esperamos que disfrutes al máximo tu experiencia de compra con <b>Free<span className="text-red-500">Market</span></b>!
          </p>
          <img
            className="hidden lg:block lg:w-[450px] rounded-lg"
            src={Nosotros}
            alt="Imagen nosotros"
          />
        </div>
      </div>
      {/* mision y vision */}
      <div className="flex items-center justify-center gap-10 my-10">
        <div>
          <h3 className="text-3xl mb-3 font-bold text-primary uppercase">
            Misión
          </h3>
          <p className="text-primary">
          Nuestro objetivo es ofrecer ropa elegante y cómoda a precios accesibles, al mismo tiempo que fomentamos la sostenibilidad en la moda. Nos dedicamos a brindar productos de alta calidad y un servicio al cliente sobresaliente para todos nuestros compradores.
          </p>
        </div>
        <div>
          <h3 className="text-3xl mb-3 font-bold text-primary uppercase">
            Visión
          </h3>
          <p className="text-primary">
          Nuestra aspiración es ser líderes en la moda sostenible, proporcionando productos de alta calidad y promoviendo prácticas éticas y ambientalmente responsables en toda la industria de la moda.
          </p>
        </div>
      </div>
    </section>
  );
};
