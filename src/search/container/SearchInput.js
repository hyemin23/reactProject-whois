import { SearchOutlined } from '@ant-design/icons';
import { AutoComplete, Input } from 'antd';
import React from 'react';

//검색창
export default function SearchInput({ keyword }) {

    function setKeyword() {

    }

    function gotoUser() {

    }


    return (
        <AutoComplete
            style={{
                width: 250,
            }}
            options={[]}
            value={keyword}
            onChange={setKeyword}
            onSelect={gotoUser}
            autoFocus
        >
            <Input size="large" placeholder="input here" prefix={<SearchOutlined />} />
        </AutoComplete>
    );
};




