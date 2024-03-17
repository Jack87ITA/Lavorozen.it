import React, { useEffect, useState } from 'react'
import { Menu } from 'antd'
// Icons
import {
    AiOutlineHome,
    AiOutlineLogout,
    AiOutlineUser,
} from 'react-icons/ai'
import { MdOutlineDashboard } from 'react-icons/md'
import { GiOrganigram } from 'react-icons/gi'
import { LiaPersonBoothSolid } from 'react-icons/lia'

import { useLocation, useNavigate } from 'react-router-dom'
import Topbar from '../../Partials/Admin/Topbar'
import { Image, Text } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { useToastWrapper } from '../../../Wrapper/toastWrapper'

import { Images } from '../../../Assets/images'

type Props = {
    children?: React.ReactNode
}

const AdminLayout = (props: Props) => {
    const [selectedKey, setSelectedKey] = useState('1')
    const [collapsed, setCollapsed] = useState(true)

    const onClickMenuItem = (e: any) => {
        setSelectedKey(e.key)
        // navigate(keyRouteMap[e.key])
    }

    const location = useLocation()
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const { success, error } = useToastWrapper()

    const handleSignout = () => {
        // handleLogout();
        navigate('/admin/login')
    }

    const items = [
        {
            key: '1',
            icon: <MdOutlineDashboard size={20} className="text-[#FFFFFF]" />,
            label: 'Dashboard',
            path: '/admin',
        },
        {
            key: '2',
            icon: <GiOrganigram size={20} className="text-[#FFFFFF]" />,
            label: 'Organizer',
            path: '/admin/organizer',
        },
        {
            key: '3',
            icon: <AiOutlineHome size={20} className="text-[#FFFFFF]" />,
            label: 'Events',
            path: '/admin/events',
        },
        {
            key: '4',
            icon: <LiaPersonBoothSolid size={20} className="text-[#FFFFFF]" />,
            label: 'Exhibitors',
            path: '/admin/exhibitors',
        },
        {
            key: '5',
            icon: <AiOutlineUser size={20} className="text-[#FFFFFF]" />,
            label: 'Visitors',
            path: '/admin/visitors',
        },
    ]

    const { user } = useSelector((state: any) => state)
    const [authState, setAuthState] = useState(false)

    useEffect(() => {
        if (user && user?.role === 'Admin') {
            setAuthState(true)
        } else {
            navigate('/admin/login')
        }
    }, [user])

    return (
        <div>
            <div className="flex">
                <Menu
                    onClick={onClickMenuItem}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    style={{
                        width: !collapsed ? '180px' : '60px',
                        backgroundColor: '#F1F1F1',
                        minHeight: '100vh',
                        maxHeight: '100vh',
                        border: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0px',
                    }}
                    selectedKeys={[selectedKey]}
                    inlineCollapsed={collapsed}
                >
                    <div className="flex h-[60px] items-center">
                        {collapsed ? null : (
                            <div className="text-center w-full">
                                <Image src={Images.Logo} />
                            </div>
                        )}
                    </div>

                    {/* <VStack spacing={2}> */}
                    {items.map((item) => (
                        <Menu.Item
                            onClick={() => {
                                navigate(item.path)
                            }}
                            style={{
                                backgroundColor: 'transparent',
                                color: 'black',
                                margin: '5px 0',
                                width: '100%',
                                border:
                                    location.pathname == item.path
                                        ? '1px solid #050A30'
                                        : 'none',
                            }}
                            key={item.key}
                            icon={item.icon}
                        >
                            <Text fontSize={'md'} fontWeight={500}>
                                {item.label}
                            </Text>
                        </Menu.Item>
                    ))}

                    <Menu.Item
                        style={{
                            marginTop: 'auto',
                            backgroundColor: 'transparent',
                            color: 'black',
                        }}
                        key={'logout'}
                        icon={
                            <AiOutlineLogout
                                size={20}
                                className="text-[#FFFFFF]"
                            />
                        }
                        onClick={() => {
                            handleSignout()
                        }}
                    >
                        <Text>Logout</Text>
                    </Menu.Item>
                    {/* </VStack> */}
                </Menu>
                <div className="grow">
                    <Topbar setCollapsed={setCollapsed} />
                    {authState && props.children}
                </div>
            </div>
        </div>
    )
}

export default AdminLayout
