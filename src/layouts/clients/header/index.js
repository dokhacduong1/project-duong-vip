import { DownloadOutlined } from '@ant-design/icons';
import "./header.scss"
import { NavLink} from "react-router-dom";
import { Collapse, Button, Select, Menu, Dropdown } from 'antd';
import { useEffect, useState } from "react";

import { getCity } from '../../../services/admins/headerApi';


function Header(props) {

    const [isCollapseVisible, setIsCollapseVisible] = useState(0);


    const [city, setCity] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const recordCity = await getCity()
            if (recordCity.length > 0) {
                const convertCity = recordCity.map(dataMap => (
                    {
                        label: dataMap.name,
                        value: dataMap.codename
                    }
                ))
                setCity(convertCity);
            }


        }
        fetchApi()

    },[])


    const itemsMenu = [
        {
            key: '1',
            label: '',
            children: (
                <div className='container'>
                    <div className='header__collabsed'>
                        <div className='row justify-content-center align-items-center' style={{ padding: "20px 0" }}>
                            <div className='col-3'>
                                <Select
                                    allowClear
                                    style={{
                                        width: '100%',
                                    }}
                                    placeholder="Chọn Địa Điểm"
                                    options={city}


                                />
                            </div>
                            <div className='col-3'>
                                <Select

                                    allowClear
                                    style={{
                                        width: '100%',
                                    }}
                                    placeholder="Chọn Danh Mục Nghề Nghiệp"
                                />
                            </div>
                            <div className='col-3'>
                                <Select

                                    allowClear
                                    style={{
                                        width: '100%',
                                    }}
                                    placeholder="Loại Hình Công Việc"
                                />
                            </div>
                            <div className='col-3'>
                                <Button style={{ width: "50%", border: "1px solid #5dcaf9", color: "#5dcaf9" }} size='large' icon={<DownloadOutlined />} >Đặt Lại</Button>
                            </div>

                        </div>
                        <div className='row justify-content-center align-items-center'>
                            <div className='col-3'>
                                <Select

                                    allowClear
                                    style={{
                                        width: '100%',
                                    }}
                                    placeholder="Trả Lương Theo"
                                />
                            </div>
                            <div className='col-3'>
                                <Select

                                    allowClear
                                    style={{
                                        width: '100%',
                                    }}
                                    placeholder="Mức Lương Mong Muốn"
                                />
                            </div>
                            <div className='col-3'>
                                <Select

                                    allowClear
                                    style={{
                                        width: '100%',
                                    }}
                                    placeholder="Thời Gian Làm Việc"
                                />
                            </div>
                            <div className='col-3'>
                                <Button style={{ width: "50%", background: "#5dcaf9", color: "#fff", border: "none" }} size='large' icon={<DownloadOutlined />} >Áp Dụng</Button>
                            </div>

                        </div>
                    </div>
                </div>
            ),
        }
    ];

    const buttonClickCollab = () => {
        const numberCheck = isCollapseVisible === 1 ? 0 : 1;
        setIsCollapseVisible(numberCheck);
    }
    const handleClickMenu = (agrs) => {
        const { key } = agrs;
        if (key !== "5") {
            setIsCollapseVisible(0);
        }
    }
    const itemsMenuNav = [
        {
            label: 'Tìm Việc Làm',
            key: '1',
            icon: null,
        },
        {
            label: 'CV Đẹp',
            key: '2',
            icon: null,

        },
        {
            label: 'Cẩm Nang Tuyển Dụng',
            key: '3',
            icon: null,

        },
        {
            label: 'Tiện Ích',
            key: '4',
            icon: null,

        },
        {
            label: <span onClick={buttonClickCollab} style={{fontWeight:"500"}}>Tìm Kiếm Nâng Cao</span>,
            key: '5',
            icon: null,

        },

    ];
    const itemsDropdown = [
        {
            key: '1',
            label: (
                <NavLink target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    Đăng nhập
                </NavLink>
            ),
        },
        {
            key: '2',
            label: (
                <NavLink target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    Đăng ký
                </NavLink>
            ),
        },
        {
            key: '3',
            label: (
                <NavLink target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    Sản phẩm và dịch vụ
                </NavLink>
            ),
        },
    ];
    return (
        <>
            <header className='header'>
                <div className="container-fluid">
                    <div className="row justify-content-center align-items-center">
                        <div className="header__logo col-2 text-center">
                            <NavLink className="mr-1" to="/" />
                        </div>
                        <div className="header__search col-5 text-center">
                            <Menu onClick={handleClickMenu} mode="horizontal" items={itemsMenuNav} />
                        </div>
                        <Collapse className="text-center" bordered={false} activeKey={isCollapseVisible} collapsible="disabled" items={itemsMenu} defaultActiveKey={['1']} />
                        <div className="header__boxUsers col-3 text-center">
                            <div className='row col-12 justify-content-end align-items-center'>
                                <div className="header__boxUsers-user col-3">
                                    <NavLink className="mr-1" to={"/login"}>Đăng nhập</NavLink>
                                    <div className="inner-dir "></div>
                                </div>
                                <div className="header__boxUsers-user col-3">
                                    <NavLink className="ml-1" to={"/register"}>Đăng ký</NavLink>
                                    <div className="inner-dir"></div>
                                </div>

                            </div>
                        
                        </div>
                        <div className="header__employer text-center col-2">
                                <Dropdown
                                    menu={{ items: itemsDropdown }}
                                    placement="bottom"                       
                                >
                                    <div style={{padding:"24px"}}>
                                        Nhà tuyển dụng
                                    </div>
                                </Dropdown>
                            </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header