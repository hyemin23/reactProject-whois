import { Col, Row, Typography } from 'antd';
import React, { Fragment } from 'react';
import Settings from '../component/Settings';

export default function Search() {
    return (
        <Fragment>
            <Row justify="end" style={{ padding: 20 }}>
                <Col>
                    <Settings logout={() => { }} />
                </Col>
            </Row>

            <Row justify="center" style={{ marginTop: 100 }}>
                <Col>
                    <Typography.Title style={{ fontFamily: "cursive" }}>
                        Find human
                    </Typography.Title>
                </Col>
            </Row>

            <Row justify="center" style={{ marginTop: 50 }}>
                <Col span={12}>검색</Col>
            </Row>
        </Fragment>
    )
}