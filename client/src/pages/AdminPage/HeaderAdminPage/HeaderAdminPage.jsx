import React from 'react'
import { Avatar, Dropdown, Space } from 'antd';
import {
    UserOutlined,
    DownOutlined, HomeOutlined , LogoutOutlined
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HeaderAdminPage = () => {
    const navigate = useNavigate()
    const user = useSelector((state) => state?.user);
    const name = user.name
    const avatar = user.avatar

    const styles = {
        wrapper: {
          //Thêm các thuộc tính CSS cho label cha tại đây
          //Ví dụ:
          margin: '10px',
          borderRadius: '5px',
          
        },
        label: {
          cursor: 'pointer',
        }
      };
      
      const items = [
        {
          key: '1',
          label: (
            <div style={styles.wrapper}>
              <label onClick={() => navigate('/')} style={styles.label}>
                <HomeOutlined /> <span style={{ paddingLeft: '5px' }}>Home</span>
              </label>
            </div>
          ),
        },
        {
          key: '2',
          label: (
            <div style={styles.wrapper}>
              <>
                <LogoutOutlined /> <span style={{ paddingLeft: '5px' }}>Logout</span>
              </>
            </div>
          ),
        },
      ];
      

    return (
        <>
            <div style={{ display: 'flex', width: '101%', height: '60px', backgroundColor: 'white', alignItems: 'center', justifyContent: 'right', padding: '0 100px' }}>


                <Dropdown
                    menu={{items }}
                >
                    <a onClick={(e) => e.preventDefault()}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar size="large" icon={<UserOutlined />} />
                            <div style={{ padding: '0 6px' }}> {name} </div>
                            <DownOutlined />
                        </div>
                    </a>
                </Dropdown>


            </div>
        </>
    )
}

export default HeaderAdminPage