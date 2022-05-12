import React, { useState } from 'react'
import SidebarRow from './SidebarRow'

import {
    BeakerIcon,
    BookOpenIcon,
    CollectionIcon,
    FolderDownloadIcon,
    ClipboardIcon,
    UserGroupIcon,
    QuestionMarkCircleIcon,
    CodeIcon,
    ViewBoardsIcon
} from '@heroicons/react/solid'
import AddMadicine from './AddMadicine';
import Orders from './Orders';


function Dashboard() {
    const [tab, setTab] = useState('addMadicine')
    console.log(tab);
    return (
        <div className='flex flex-row'>
            <div className='flex flex-col h-screen bottom-0 p-2 max-w-[200px]
       text-white bg-indigo-600 xl:min-w-[300px] overflow-scroll no-scrollbar'>
                <SidebarRow Icon={CollectionIcon} title="AddMadicine" tab={tab} setTab={setTab} />
                <SidebarRow Icon={BookOpenIcon} title="ShowOrders" tab={tab} setTab={setTab} />
                {/* <SidebarRow Icon={ViewBoardsIcon} title="Recommended Books" tab={tab} setTab={setTab} />
                <SidebarRow Icon={FolderDownloadIcon} title="Downloads" tab={tab} setTab={setTab} />
                <SidebarRow Icon={CodeIcon} title="Softwares" tab={tab} setTab={setTab} />
                <SidebarRow Icon={BeakerIcon} title="Assaignments" tab={tab} setTab={setTab} />
                <SidebarRow Icon={UserGroupIcon} title="GDB" tab={tab} setTab={setTab} />
                <SidebarRow Icon={ClipboardIcon} title="Midterm Past Papers" tab={tab} setTab={setTab} />
                <SidebarRow Icon={ClipboardIcon} title="Finalterm Past Papers" tab={tab} setTab={setTab} /> */}
            </div>

            <div>
                {
                    renderComponent(tab)
                }
            </div>
        </div>
    )
}

export default Dashboard

function renderComponent(tab: string) {
    switch (tab) {
        case 'addmadicine':
            return <AddMadicine />
            break;

        case 'showorders':
            return <Orders />
            break;
        default:
            break;
    }
}