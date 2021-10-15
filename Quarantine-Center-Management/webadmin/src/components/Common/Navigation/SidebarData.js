import React from 'react'
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as HiIcons from 'react-icons/hi';

export const SidebarData = [
    {
        title: 'User management',
        path: '/dashboard',
        icon: <AiIcons.AiOutlineUser />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Dashboard',
                path: '/dashboard',
                icon: <RiIcons.RiDashboardLine />
            },
            {
                title: 'Details',
                path: '/finance/details',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Report',
                path: '/finance/report',
                icon: <HiIcons.HiDocumentReport />
            },

        ]
    },
    {
        title: 'Stock management',
        path: '/inventory',
        icon: <AiIcons.AiFillEnvironment />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Food',
                path: '/Inventory/food',
                icon: <RiIcons.RiDashboardLine />
            },
            {
                title: 'Medicine',
                path: '/Inventory/medall',
                icon: <IoIcons.IoIosPaper />
            },
        ]
    },
    {
        title: 'Ticketing system',
        path: '/ticketing',
        icon: <AiIcons.AiTwotoneRocket />,
    },
    {
        title: 'Food management',
        path: '/food',
        icon: <AiIcons.AiOutlineFolder />,
    },
    {
        title: 'Medical details',
        path: '/medical',
        icon: <AiIcons.AiFillMedicineBox />,
    },
    {
        title: 'Room management',
        path: '/room',
        icon: <AiIcons.AiOutlineChrome />,
    },
    {
        title: 'Staff management',
        path: '/staff',
        icon: <IoIcons.IoIosPerson />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'ANALIYTICS',
                path: '/staffAnalytic',
                icon: <IoIcons.IoMdPodium />
            },
            {
                title: 'ADD STAFF MEMBER',
                path: '/addStaffMember',
                icon: <IoIcons.IoMdPersonAdd />
            },
            {
                title: 'ALL STAFF',
                path: '/allStaffMembers',
                icon: <IoIcons.IoMdPeople />
            },
            {
                title: 'ADD SALARY',
                path: '/addSalary',
                icon: <IoIcons.IoMdWallet />
            },
            {
                title: 'ADD QUARANTINE',
                path: '/addQuaratineStaff',
                icon: <IoIcons.IoIosSad />
            },
            {
                title: 'ADD TASKS',
                path: '/addTask',
                icon: <IoIcons.IoIosListBox />
            },
            {
                title: 'EMP LOGIN',
                path: '/staffLogin',
                icon: <IoIcons.IoIosListBox />
            },

        ]
    },
    {
        title: 'Finance Managment',
        path: '/finance',
        icon: <AiIcons.AiFillCreditCard />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Dashboard',
                path: '/finance/dashboard',
                icon: <RiIcons.RiDashboardLine />
            },
            {
                title: 'Details',
                path: '/finance/details',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Report',
                path: '/finance/report',
                icon: <HiIcons.HiDocumentReport />
            },
        ],
    },
    // {
    //     title: 'Reports',
    //     path: '/reports',
    //     icon: <AiIcons.AiFillFileMarkdown />,
    //     iconClosed: <RiIcons.RiArrowDownSFill />,
    //     iconOpened: <RiIcons.RiArrowUpSFill />,
    //     subNav: [
    //         {
    //             title: 'Reports1',
    //             path: '/reports/reports1',
    //             icon: <IoIcons.IoIosPaper />
    //         },
    //         {
    //             title: 'Reports2',
    //             path: '/reports/reports2',
    //             icon: <IoIcons.IoIosPaper />
    //         },
    //     ]
    // },
    // {
    //     title: 'Products',
    //     path: '/products',
    //     icon: <FaIcons.FaCartPlus />, 
    // },
    // {
    //     title: 'Services',
    //     path: '/services',
    //     icon: <FaIcons.FaCartPlus />, 
    // },
    // {
    //     title: 'News',
    //     path: '/news',
    //     icon: <FaIcons.FaCartPlus />, 
    // }

];