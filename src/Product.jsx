import Card from "./components/Card"

function Product() {
    const data = [
        {
            image:"./assets/Frame 609.png",
            name:"Gucci Duffle Bag",
            price:"$1160"
        },
        {
            image:"./assets/Frame 610.png",
            name:"RGB Liquid CPU Cooler",
            price:"$1960"
        },
        {
            image:"./assets/Frame 608.png",
            name:"GP11 Shooter USB Gamepad",
            price:"$550"
        },
        {
            image:"./assets/Frame 607.png",
            name:"Quilted Satin Jacket",
            price:"$750"
        },
        
    ] 
    return (
        <section className="flex flex-col w-fit mx-auto p-8">
            <div className="flex flex-row justify-between items-center py-3">
                <p className="text-xl">Wishlist (4)</p>
                <button className="border w-fit border-neutral-900 py-2 px-4 rounded-md">Move All To Bag</button>
            </div>

            <div className="flex flex-col lg:flex-row gap-4">
                {data.map((item, index) =>(
                        <Card
                        key={index}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                        />
                ))}
                {/* <Card image="./assets/Frame 609.png" name="Gucci Duffle Bag" price="$1160"/>
                <Card image="./assets/Frame 610.png" name="RGB Liquid CPU Cooler" price="$1960"/>
                <Card image="./assets/Frame 608.png" name="GP11 Shooter USB Gamepad" price="$550"/>
                <Card image="./assets/Frame 607.png" name="Quilted Satin Jacket" price="$750"/> */}
            </div>
            <div className="flex flex-row justify-between items-center py-3">
                <div className="flex flex-row justify-between items-center py-3 gap-3">
                    <div className="bg-rose-600 text-rose-600 w-3 rounded-sm">t</div>
                    <p className="text-xl">Just For You</p>
                </div>
                <button className="border w-fit border-neutral-900 py-2 px-4 rounded-md">See All</button>
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
                {data.map((item, index) =>(
                        <Card
                        key={index}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                        />
                ))}
                {/* <Card image="./assets/Frame 609.png" name="Gucci Duffle Bag" price="$1160"/>
                <Card image="./assets/Frame 610.png" name="RGB Liquid CPU Cooler" price="$1960"/>
                <Card image="./assets/Frame 608.png" name="GP11 Shooter USB Gamepad" price="$550"/>
                <Card image="./assets/Frame 607.png" name="Quilted Satin Jacket" price="$750"/> */}
            </div>
        </section>
    )
}
export default Product