import Image from 'next/image'

import Logo from '../../public/Logo.svg'

export function Header() {
    return (
        <div className='h-16 w-full bg-red-500 flex items-center justify-start'>
            <div className='h-full w-40 bg-yellow-500 flex items-center justify-around'>
                <Image alt='Logo' src={Logo} />
                <p>Devfinance</p>
            </div>
        </div>
    )
}
