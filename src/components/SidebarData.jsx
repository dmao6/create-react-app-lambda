import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        className: 'nav-text'
    },
    {
        title: 'Report Issue',
        path: '/reportIssue',
        icon: <AiIcons.AiFillPlusCircle />,
        className: 'nav-text'
    },
    {
        title: 'Request Service',
        path: '/requestService',
        icon: <FaIcons.FaLaptop />,
        className: 'nav-text'
    },
    {
        title: 'Troubleshooting Articles',
        path: '/articles',
        icon: <FaIcons.FaBookOpen />,
        className: 'nav-text'
    },
    {
        title: 'Install Software',
        path: '/install',
        icon: <FaIcons.FaDownload />,
        className: 'nav-text'
    },
    {
        title: 'Contact Information',
        path: '/contact',
        icon: <AiIcons.AiFillContacts />,
        className: 'nav-text'
    },
    {
        title: 'FAQ',
        path: '/faq',
        icon: <AiIcons.AiFillQuestionCircle />,
        className: 'nav-text'
    },
/*     {
        title: 'To Ticket System',
        path: '/dashboard',
        icon: <AiIcons.AiFillFile />,
        className: 'nav-text'
    },  */
    {
        title: 'Login', 
        path: '/login', 
        icon: <AiIcons.AiOutlineLogin />,
        className: 'nav-text'
    }
]

