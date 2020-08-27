import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import webtoonlogo from './webtoon-logo.png';


class WebtoonDetail extends React.Component {
    render() {
        const { post } = this.props
        return (
            <>
                <Row>
                    <Col xs={12}>

                        <Card >
                            <Row className="no-gutters d-flex align-items-stretch">
                                <Col xs={4}>
                                    <a target="_blank" href={post.url}  >
                                        <div className="img-last-read d-flex justify-content-center" ><img src={webtoonlogo} className="cover center-block" alt="cover" /></div>
                                    </a>
                                </Col>
                                <Col>
                                    <div className="card-block px-2">
                                        <a target="_blank" href={post.url} className="a-title">
                                            <p className="card-title p-last-read-Title">{post.title}</p>
                                        </a>
                                        <div className="d-flex flex-row">
                                            <p className="card-text p-last-read"> <FontAwesomeIcon icon={faEdit} /> {post.author} </p>
                                            <p className="card-text p-last-read" > | </p>
                                            <p className="card-text p-last-read"> <FontAwesomeIcon icon={faPalette} /> {post.artist} </p>
                                        </div>
                                        <p className="card-text p-last-read pb-1">{post.description}</p>

                                    </div>
                                </Col>
                            </Row>
                        </Card>


                    </Col>
                </Row>
                <br />
            </>
        );
    }
}


export default WebtoonDetail;
