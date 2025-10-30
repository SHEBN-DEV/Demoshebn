import { AiOutlineLike } from "react-icons/ai";
import { FaRegMessage } from "react-icons/fa6";
import { PiShareFat } from "react-icons/pi";

const TrendingCard = () => {

    const trending = [
        { id: 1, name: 'Trending 1', image: 'images/home/LogoRosa.png' },
       
    ];

    return(
        <div className="relative w-full bg-black rounded-xl p-6 shadow-gray-400 shadow-md">
            {/* Encabezado */}
            <div className="flex">
                <img src="images/home/LogoRosa.png" 
                    alt="LogoRosa" 
                    className="size-16 rounded-full mb-4 object-cover"
                    loading="lazy" 
                />
                <div>
                    <p className="text-xl font-bold pl-10">SHEBN</p>
                    <p className="text-base pl-10">20 min ago</p>
                </div>
            </div>

            {/* Cuerpo */}
            <div className="flex">
                <div className="w-2/3 flex flex-col justify-center gap-2">
                    <p className="text-xl font-bold">Bolivia Blockchain Week.</p>
                    <p>Bolivia Blockchain Week is coming up this October 24th and 25th. 
                    Women of Bolivia, it's time to be part of the blockchain revolution!</p>
                    <p className="font-bold">Free tickets</p> <p className="flex"> → http://boliviablockchainweek.la</p>
                </div>
                <div className="w-1/3 flex justify-center">
                    <img src="images/treding/LogoBolivia.png" alt="LogoBolivia" />
                </div>
            </div>

            {/* Interaccion */}
            <div className="flex gap-20">
                <div className="flex">
                    <AiOutlineLike /> <p className="pl-2">245</p>
                </div>
                <div className="flex">
                    <FaRegMessage /> <p className="pl-2">99</p>
                </div>
                <div className="flex">
                    <PiShareFat /> <p className="pl-2">222</p>
                </div>
            </div>

        </div>
    );
};

export default TrendingCard;