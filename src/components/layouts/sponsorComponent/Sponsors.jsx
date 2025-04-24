import revolut from '@/assets/sponsors/revolut.svg';
import alsa from '@/assets/sponsors/alsa.svg';
import spotify from '@/assets/sponsors/spotify.svg';
import vicio from '@/assets/sponsors/vicio.svg';
import cocacola from '@/assets/sponsors/cocacola.svg';
import infojobs from '@/assets/sponsors/infojobs.svg';
import grefusa from '@/assets/sponsors/grefusa.svg';
import nothing from '@/assets/sponsors/nothing.svg';
import cerave from '@/assets/sponsors/cerave.svg';
import mahou from '@/assets/sponsors/mahou.svg';
import maxibon from '@/assets/sponsors/maxibon.svg';

const sponsorData = [
  [revolut],
  [alsa, spotify, vicio, cocacola, infojobs],
  [grefusa, nothing, cerave, mahou, maxibon]
];

export default function Sponsors() {
    return (
      <div className="py-10 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-8">PATROCINADORES DEL EVENTO</h2>
        <div className="space-y-8">
          {sponsorData.map((row, i) => (
            <div
              key={i}
              className="flex flex-wrap justify-center gap-x-6 gap-y-4"
            >
              {row.map((logo, idx) => (
                <div key={idx} 
                className="w-1/12 sm:w-1/6 md:w-1/12 h-16 flex items-center justify-center px-2">
                  <img
                    src={logo}
                    alt="Sponsor logo"
                    className="w-full h-1/2 object-contain grayscale hover:grayscale-0 transition duration-300"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
  
