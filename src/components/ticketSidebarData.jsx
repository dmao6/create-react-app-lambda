import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import {MdNoteAdd} from 'react-icons/md';
export const TicketSidebarData = [
    {
        title: 'managementConsole',
        path: '/managementConsole',
        icon: <MdNoteAdd />,
        className: 'nav-text'
    },
/*     {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <AiIcons.AiFillDashboard />,
        className: 'nav-text'
    }, */
    {
        title: 'Create New Ticket',
        path: '/NewTicket',
        icon: <FaIcons.FaNewspaper />,
        className: 'nav-text'
    },
    {
        title: 'List All Ticket',
        path: '/AllTicket',
        icon: <FaIcons.FaList />,
        className: 'nav-text'
    },
    // {
    //     title: 'Transfer Ticket',
    //     path: '/TransferTicket',
    //     icon: <IoIcons.IoMdSwap />,
    //     className: 'nav-text'
    // },
    // {
    //     title: 'Close a ticket',
    //     path: '/closeTicket',
    //     icon: <FaIcons.FaDoorClosed />,
    //     className: 'nav-text'
    // },
    // {
    //     title: 'Edit an existing ticket',
    //     path: '/edit',
    //     icon: <AiIcons.AiFillEdit />,
    //     className: 'nav-text'
    // },
    // {
    //     title: 'Request More Information',
    //     path: '/MoreInfoRequest',
    //     icon: <AiIcons.AiOutlineMore />,
    //     className: 'nav-text'
    // }
    /* ,
    {
        title: 'Back To Self-Service Portal',
        path: '/',
        icon: <AiIcons.AiFillEuroCircle />,
        className: 'nav-text'
    } */
]

