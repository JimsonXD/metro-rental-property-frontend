export default function Flexboxes() {
  return (
    <section className="mb-12 mt-16">
      <p className="text-center pb-12 font-bold text-3xl">
        Helping Clients To Achieve Harmony Through Our Expertise And Skills
      </p>



      <div className="w-full flex gap-8 pb-2 justify-center">
        <div className="relative w-1/5 rounded overflow-hidden shadow-lg cursor-pointer">
          <img
            src={
              "https://i.pinimg.com/564x/7d/15/54/7d155459baca00e66295309e273ac067.jpg"
            }
            alt=""
            className="w-full h-full rounded transform transition-transform hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 text-black font-bold text-lg text-center hover:opacity-50 transition-opacity duration-300">
            PROPERTY <br /> MANAGEMENT
          </div>
        </div>
        <div className="relative w-1/5 rounded overflow-hidden shadow-lg cursor-pointer">
          <img
            src={
              "https://i.pinimg.com/564x/1d/20/a9/1d20a9a6f1d49d6e440d33c3610474b5.jpg"
            }
            alt=""
            className="w-full h-full rounded"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 text-black font-bold text-lg text-center hover:opacity-50 transition-opacity duration-300">
            BODY CORPORATE
            <br /> ADMINISTRATION
          </div>
        </div>
        <div className="relative w-1/5 rounded overflow-hidden shadow-lg cursor-pointer">
          <img
            src={
              "https://i.pinimg.com/564x/a9/68/b5/a968b53062e2c092115e708185c6f2aa.jpg"
            }
            alt=""
            className="w-full h-full rounded"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 text-black font-bold text-lg text-center hover:opacity-50 transition-opacity duration-300">
            BUILDING <br />
            MANAGEMENT
          </div>
        </div>
        <div className="relative w-1/5 rounded overflow-hidden shadow-lg cursor-pointer">
          <img
            src={
              "https://i.pinimg.com/564x/89/10/62/891062303d2906ea0d0a1516c220f3b9.jpg"
            }
            alt=""
            className="w-full h-full rounded"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 text-black font-bold text-lg text-center hover:opacity-50 transition-opacity duration-300">
            DECLUTTERING
            <br /> MANAGEMENT
          </div>
        </div>
      </div>
      <div className="w-full flex gap-8 pt-4 justify-center">
        <div className="relative w-1/5 rounded overflow-hidden shadow-lg cursor-pointer">
          <img
            src={
              "https://i.pinimg.com/564x/a5/ab/80/a5ab80411f8ed3b8985f6ddaed91d9d3.jpg"
            }
            alt=""
            className="w-full h-full rounded"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 text-black font-bold text-lg text-center hover:opacity-50 transition-opacity duration-300">
            FREE PROPERTY
            <br /> APPRAISALS
          </div>
        </div>
        <div className="relative w-1/5 rounded overflow-hidden shadow-lg cursor-pointer">
          <img
            src={
              "https://i.pinimg.com/564x/26/55/da/2655dab3d68661db67679a3000fd2849.jpg"
            }
            alt=""
            className="w-full h-full rounded"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 text-black font-bold text-lg text-center hover:opacity-50 transition-opacity duration-300">
            RENOVATION
            <br /> PROPERTY
            <br /> MANAGEMENT
          </div>
        </div>
        <div className="relative w-1/5 rounded overflow-hidden shadow-lg cursor-pointer">
          <img
            src={
              "https://i.pinimg.com/564x/42/51/f6/4251f6b86c9be7c19d48d03641cfd998.jpg"
            }
            alt=""
            className="w-full h-full rounded"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 text-black font-bold text-lg text-center hover:opacity-50 transition-opacity duration-300">
            INVESTMENT
            <br /> PROPERTIES
          </div>
        </div>
        <div className="relative w-1/5 rounded overflow-hidden shadow-lg cursor-pointer">
          <img
            src={
              "https://i.pinimg.com/564x/a7/c2/6b/a7c26bfaefb817db2e1d5844290fe8f2.jpg"
            }
            alt=""
            className="w-full h-full rounded"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 text-black font-bold text-lg text-center hover:opacity-50 transition-opacity duration-300">
            RENTAL
            <br /> PROPERTIES
          </div>
        </div>
      </div>




      <div className="flex justify-center py-12 gap-6 text-white">
        <button className="bg-red100 py-3 hover:bg-red300 px-12 rounded uppercase">
          Property Owners
        </button>
        <button className="bg-red100 py-3 hover:bg-red300 px-12 rounded uppercase">
          Rental Listings
        </button>
      </div>
    </section>
  );
}
