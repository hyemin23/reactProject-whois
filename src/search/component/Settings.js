import React from 'react';
import { Button, Dropdown, Menu } from 'antd';
import { SettingFilled } from '@ant-design/icons';

/**
 * 
 * @param {object} param
 * @param {()=> void } param.logout
 */

//Setting 창
export default function Settings({ logout }) {
    return (
        <Dropdown overlay={
            <Menu>
                <Menu.Item onClick={logout}>로그아웃</Menu.Item>
            </Menu>
        }
            placement="bottomRight"
        >
            <Button type="primary" shape="circle" icon={<SettingFilled />}></Button>
        </Dropdown>
    );
};