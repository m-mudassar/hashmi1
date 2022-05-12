import React, { Dispatch, SetStateAction, SVGProps } from 'react'

interface Props {
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    setTab: Dispatch<SetStateAction<string>>;
    tab: string;
}

function SidebarRow({ Icon, title, tab, setTab }: Props) {
    return (
        <div
            className={`flex items-center space-x-2 p-4
    hover:bg-indigo-700 rounded-xl cursor-pointer ${tab == title.toLowerCase()
                    ? 'bg-indigo-700'
                    : ''
                }`
            } onClick={() => { setTab(title.toLowerCase()) }}>
            {Icon && (
                <Icon className="h-6 w-8 text-white" />
            )}
            <p className='hidden cursor-pointer sm:inline-flex font-medium'>{title}</p>
        </div>
    )
}

export default SidebarRow