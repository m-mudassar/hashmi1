import React, { Dispatch, SetStateAction, SVGProps } from 'react'

interface Props {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  setTab: Dispatch<SetStateAction<string>>
  tab: string
}

function SidebarRow({ Icon, title, tab, setTab }: Props) {
  return (
    <div
      className={`flex cursor-pointer items-center space-x-2
    rounded-xl p-4 hover:bg-green-700 ${
      tab == title.toLowerCase() ? 'bg-green-700' : ''
    }`}
      onClick={() => {
        setTab(title.toLowerCase())
      }}
    >
      {Icon && <Icon className="h-6 w-8 text-white" />}
      <p className="hidden cursor-pointer font-medium sm:inline-flex">
        {title}
      </p>
    </div>
  )
}

export default SidebarRow
