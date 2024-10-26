/* eslint-disable react/prop-types */
export default function Card({image="./assets/Frame 609.png", name="ini product", price="000"}){

    return(<div className="flex flex-col gap-2.5">
        <div className="flex flex-col">
            <figure className="bg-neutral-200 flex justify-center items-center w-[270px] h-[250px] rounded-t-lg">
                <img src={image} alt={name}></img>
            </figure>
            <button className="bg-neutral-900 py-4 px-6 text-white flex justify-center items-center gap-1 rounded-b-lg"><img src="./assets/Cart1.png" alt="Keranjang"></img>
                Add to cart
            </button>
        </div>
        <div className="flex flex-col">
            <p className="font-semibold">{name}</p>
            <div className="flex flex-row gap-2">
                <p className="text-rose-600">{price}</p>
            </div>
        </div>
    </div>);
}