const Header = () => {
    return (
        <header className="h-20 bg-blue-900 w-full flex justify-between fixed">
            <div className="my-auto ml-12 float-start flex space-x-5">
                <img
                    src="/hockey.png"
                    className="w-16 aspect-square rounded-full m-auto"
                />
                <h1 className="font-bold text-white text-3xl m-auto">
                    FIVE HOCKEY
                </h1>
            </div>
            <ul className="my-auto mr-12 float-end flex space-x-5 list-none">
                <li>Home</li>
                <li>Tentang</li>
                <li>Kegiatan</li>
                <li>Daftar</li>
            </ul>
        </header>
    );
};

export default Header;
