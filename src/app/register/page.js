import Image from 'next/image';

export default function RegisterPage() {
    return (
        <div>
            <section className="mt-12 ">
                <h1 className="text-center text-primary text-4xl mb-8 mt-6">
                    Registrar-se
                </h1>
                <form className="block max-w-xs mx-auto mt-4">
                    <input
                        type="email"
                        placeholder="email"
                        className="w-full mb-2 p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="password"
                        placeholder="senha"
                        className="w-full mb-2 p-2 border border-gray-300 rounded"
                    />
                    <button
                        type="submit"
                        className="w-full mb-2 p-2 text-sm bg-primary text-white rounded"
                    >
                        Registrar
                    </button>
                    <div className="my-2 text-center text-gray-500">
                        <button
                            className="flex justify-center items-center gap-2 p-2 border text-sm border-gray-300 rounded bg-black text-white"
                        >
                            Login com suas Redes Sociais
                        </button>
                    </div>
                    <div className="my-2 text-center text-gray-500">
                        <button
                            className="flex justify-center items-center gap-2 p-2 border text-sm border-gray-300 rounded"
                        >
                            <Image
                                src="/google.png"
                                alt="Registro/Login com conta Google"
                                width={24}
                                height={24}
                            />
                            Registro/Login com conta Google
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
}
