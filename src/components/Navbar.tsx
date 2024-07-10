import { useRouter } from 'next/navigation'

export default function Navbar() {

    const router = useRouter()

    const redirectTokensPage = () => {
      router.push('/tokens')
    }

    return (
        <div className="w-full h-20 flex flex-row">
            <div className="w-1/3 h-full flex flex-row items-center justify-center">
                <h1 className="text-xl">underground</h1>
            </div>

            <div className="w-1/3 h-full flex flex-row items-center justify-center"></div>

            <div className="w-1/3 h-full flex flex-row items-center justify-center">
                <div className="flex flex-row items-center">
                    <img src="/icons/token.png" alt="Token icon" className="w-6 h-6 mr-1" />
                    <p className="text-lg">100</p>
                </div>
                <div>
                    <button type="button" onClick={redirectTokensPage} className="w-10 h-10 text-2xl border-2 border-black rounded-xl ml-3">+</button>
                </div>
            </div>
        </div>
    );
}
