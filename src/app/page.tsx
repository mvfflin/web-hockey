import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full">
      <section
        id="home"
        className="bg-gradient-to-tr from-yellow-600 to-yellow-200 h-screen flex"
      >
        <div
          //   alt="hockey-docs"
          //   width={9999}
          //   height={9999}
          //   src="/docs/hockey1.jpg"
          //   style={{ backgroundImage: `url(/docs/hockey1.jpg)` }}
          className="hcky !w-1/2 !h-full bg-center bg-cover bg-no-repeat hidden lg:flex"
        ></div>
        <div className="m-auto justify-center text-center items-center">
          <Image
            alt="hockey-logo"
            width={600}
            height={600}
            src="/hockey.png"
            className="!w-52 my-2 mx-auto rounded-full border-2 border-white"
          />
          <h1 className="text-5xl font-extrabold text-blue-900 font-helveticabold">
            FIVE HOCKEY
          </h1>
          <h2 className="text-2xl font-semibold text-blue-800 font-helvetica">
            Eksktrakulikuler paling keren di SMAN 5
          </h2>
          <button className="px-5 py-2 mt-3 text-xl font-poppins rounded-md bg-blue-800 hover:ring-1 hover:ring-white active:ring-2 active:ring-blue-600 transition-all hover:scale-110 active:scale-110 hover:rotate-3">
            Tentang Hockey
          </button>
        </div>
      </section>
      <section className="h-auto flex bg-yellow-500 p-12 md:p-32" id="about">
        <div className="m-auto">
          <h1 className="text-4xl font-helveticabold text-blue-900 font-extrabold">
            Apa sih itu hockey?
          </h1>
          <hr className="border-1 border-blue-700 my-2" />
          <h1 className="text-xl font-poppins text-blue-900 font-bold">
            Hockey adalah suatu permainan bola kecil yang menggunakan stick
            khusus sebagai alat bermainnya. Hockey memiliki dua jenis, yaitu
            hockey es/ice hockey dan hockey bola. <br />
            <br />
            Hockey di SMAN 5 adalah jenis hockey bola, karena tidak mungkin kita
            bermain ice hockey tanpa ada es. Bola yang digunakan adalah semacam
            bola golf
          </h1>
          <br />
          <br />
          <br />
          <br />
          <h1 className="text-4xl font-helveticabold text-blue-900 font-extrabold">
            Kenapa harus join hockey?
          </h1>
          <hr className="border-1 border-yellow-700 my-2" />
          <h1 className="text-xl font-poppins text-blue-900 font-bold">
            Sebab dimana lagi kamu bisa bermain olahraga yang unik satu ini, dan
            jarang sekali ada sekolah di Bekasi yang mengadakan ekskul hockey
            ini, jadi ini adalah kesempatan kalian untuk mencoba olahraga ini
            dan memperoleh ilmu baru yang jarang dijumpai disekitar kita.
          </h1>
        </div>
      </section>
      <section className="h-auto flex py-28">
        <div className="m-auto text-center">
          <h1 className="text-4xl text-zinc-900 font-poppins font-bold">
            Tertarik untuk join hockey?
          </h1>
          <h2 className="text-xl text-zinc-900 font-poppins">
            Ayo daftar sekarang, dengan cara join whatsapp agar tahu informasi
            ekskul berikutnya
          </h2>
          <button className="px-5 py-2 bg-green-500 text-white font-poppins rounded-full my-2">
            <span className="font-icon">n</span>
            &nbsp;&nbsp;&nbsp;Whatsapp
          </button>
        </div>
      </section>
    </main>
  );
}
