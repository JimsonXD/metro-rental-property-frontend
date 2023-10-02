import WestpacAwards from "../../../assets/WestpacAwards.png";
import ReaAwards from "../../../assets/ReaAwards.png";
import QueenCityLaw from "../../../assets/QueenCityLaw.png";

export default function Awards() {
  return (
          <div className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-center text-2xl font-semibold leading-8 text-[50px]">
                Awards
              </h2>
              <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                <img
                  src={QueenCityLaw}
                  alt="Transistor"
                  width={500}
                  height={48}
                />
                <img
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
                  alt="Reform"
                  width={158}
                  height={48}
                />
                <img src={WestpacAwards} alt="Tuple" width={1000} height={48} />
                <img
                  className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                  src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
                  alt="SavvyCal"
                  width={158}
                  height={48}
                />
                <img src={ReaAwards} alt="Statamic" width={600} height={48} />
              </div>
            </div>
          </div>
  )
}
