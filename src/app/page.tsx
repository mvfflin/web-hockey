export default function Home() {
    return (
        <main className="w-full h-full">
            <section
                id="home"
                className="bg-gradient-to-tr from-yellow-600 to-yellow-200 h-screen flex"
            >
                <img
                    src="/docs/hockey1.jpg"
                    className="w-1/2 h-full object-cover"
                />
                <div className="m-auto justify-center text-center items-center">
                    <img
                        src="/hockey.png"
                        className="w-52 my-2 mx-auto rounded-full border-2 border-white"
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
            <section
                className="h-screen flex bg-blue-900 px-12 md:px-32"
                id="about"
            >
                <div className="m-auto">
                    <h1 className="text-4xl font-helveticabold text-yellow-500 font-extrabold">
                        Apa sih itu hockey?
                    </h1>
                    <hr className="border-1 border-yellow-700 my-2" />
                    <h1 className="text-xl font-poppins text-yellow-500 font-bold">
                        Hockey adalah suatu permainan bola kecil yang
                        menggunakan stick khusus sebagai alat bermainnya. Hockey
                        memiliki dua jenis, yaitu hockey es/ice hockey dan
                        hockey bola. <br />
                        <br />
                        Hockey di SMAN 5 adalah jenis hockey bola, karena tidak
                        mungkin kita bermain ice hockey tanpa ada es. Bola yang
                        digunakan adalah semacam bola golf
                    </h1>
                    <br />
                    <br />
                    <br />
                    <br />
                    <h1 className="text-4xl font-helveticabold text-yellow-500 font-extrabold">
                        Kenapa harus join hockey?
                    </h1>
                    <hr className="border-1 border-yellow-700 my-2" />
                    <h1 className="text-xl font-poppins text-yellow-500 font-bold">
                        Sebab dimana lagi kamu bisa bermain olahraga yang unik
                        satu ini, dan jarang sekali ada sekolah di Bekasi yang
                        mengadakan ekskul hockey ini, jadi ini adalah kesempatan
                        kalian untuk mencoba olahraga ini dan memperoleh ilmu
                        baru yang jarang dijumpai disekitar kita.
                    </h1>
                </div>
            </section>
        </main>
    );
}
