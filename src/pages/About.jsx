// imagenes
import Nosotros from "../img/about.jpg";

export const About = () => {
  return (
    <section className="text-justify max-w-[1100px] mx-auto mt-[120px] sm:mt-10 py-12 px-5">
      <div className="flex flex-col justify-center gap-3">
        <h2 className="text-3xl mb-3 font-bold text-primary uppercase">
          Nosotros
        </h2>
        <div className="flex items-center justify-center gap-5">
          <p className="text-primary">
          Shopify es una tienda de ropa en línea que ofrece prendas y accesorios de moda para hombres y mujeres de todas las edades. Se enfocan en ofrecer productos de alta calidad a precios asequibles y están comprometidos con brindar una buena experiencia de compra.
            <br />
            Gracias por visitar nuestra tienda en línea. Te invitamos a explorar nuestros productos y, si tienes alguna pregunta, no dudes en contactarnos. ¡Esperamos que disfrutes tu experiencia de compra con nosotros!
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
