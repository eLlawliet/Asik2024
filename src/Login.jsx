function Login() {
    return (
        <section className="flex flex-col lg:flex-row">
            <div className=" flex basis-1/2">
                <img src="./assets/Side Image.png" className="flex object-cover w-full lg:h-full h-56" alt="Ini gambar Hp"></img>
            </div>
            <div className="p-8 flex flex-col gap-5 justify-center lg:basis-1/2 px-40">
                <div className="flex flex-col gap-1">
                    <h1 className="text-3xl font-medium">Log in to Exclusive</h1>
                    <p>Enter your details below</p>
                </div>

                <div className="flex flex-col gap-4">
                    <input type="text" placeholder="Email or Phone Number"></input>
                    <input type="password" placeholder="Password"></input>
                </div>

                        <div className="flex flex-col gap-4 lg:flex-row justify-between">
                            <button className="bg-red-600 px-6 py-2 text-neutral-50">Log in</button>
                            <button className="text-red-600 py-2">Forget password?</button>
                        </div>
                </div>
        </section>
    )
}
export default Login