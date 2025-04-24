import twitter from '@/assets/svg/twitch.svg';
import instagram from '@/assets/svg/instagram.svg';
import github from '@/assets/svg/github.svg?url';
import infoJobs from '@/assets/sponsors/Infojobs.svg';

export default function Footer() {
  return (
    <footer
      className="w-full h-[400px] bg-[url('/images/footer.webp')] bg-cover bg-bottom flex flex-col justify-center items-center text-black text-sm"
    >
      {/* Redes sociales */}
      <div className="flex gap-6 mb-6">
        <a href="#" className="hover:scale-110 transition">
          <img src={twitter} alt="Twitter" className="w-6 h-6" />
        </a>
        <a href="#" className="hover:scale-110 transition">
          <img src={instagram} alt="Instagram" className="w-6 h-6" />
        </a>
        <a href="#" className="hover:scale-110 transition">
          <img src={github} alt="GitHub" className="w-6 h-6" />
        </a>
      </div>

      {/* Texto patrocinio */}
      <p className="uppercase text-xs tracking-wide">Web patrocinada por</p>
      <a href="#" className="hover:scale-110 transition"><img src={infoJobs} className='w-auto h-1/2' /></a>

      {/* Copyright */}
      <p className="text-xs font-semibold tracking-wide text-center leading-5">
        © 2025 La Velada del Año. <br />
        Todos los derechos reservados.
      </p>
    </footer>
  );
}
