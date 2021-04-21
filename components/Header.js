import Image from 'next/image'
import HeaderItem from './HeaderItem'
import {HomeIcon, BadgeCheckIcon, CollectionIcon, LightningBoltIcon, SearchIcon, UserIcon} from '@heroicons/react/outline'

function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title="HOME" Icon={HomeIcon} />
                <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
                <HeaderItem title="VIRIFIED" Icon={BadgeCheckIcon} />
                <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
                <HeaderItem title="SEARCH" Icon={SearchIcon} />
                <HeaderItem title="ACCOUNT" Icon={UserIcon} />
            
            </div>
            <Image
            className="object-contain"
            src="https://logos.textgiraffe.com/logos/logo-name/Nana-designstyle-popstar-m.png"
             width={300} 
             height={200} />
        </header>
    )
}

export default Header
