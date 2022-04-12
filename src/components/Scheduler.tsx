import { Component, ReactNode } from "react";
import { Button, Col, ListGroup, Row } from "react-bootstrap";
import Calendar from "react-calendar";
import './../style/calendar.css';
import 'react-calendar/dist/Calendar.css'

export class Scheduler extends Component {
    constructor(props: {}) {
        super(props);
        this.state = {
            date: ""
        }
        this.changeDate = this.changeDate.bind(this);
    }

    changeDate(e: any) {
        this.setState({ date: e });
    }

    render(): ReactNode {
        const schedule = [];
        for (var i = 0; i < 10; i++) {
            schedule.push(<ListGroup.Item
                action
                key={i}>
                <Row>
                    Meeting #{i}
                </Row>
                <p className="title">Scheduled at {10 + i}</p>
            </ListGroup.Item>
            );
        }
        console.log(this.state);
        return (
            <Row>
                <Col sm={8} >
                    <ListGroup>
                        {schedule}
                    </ListGroup>
                </Col>
                <Col className="d-grid" sm={4}>
                    <Row>
                        <div className="Sample mb-3">
                            <div className="Sample__container">
                                <div className="Sample__container__content">
                                    <Calendar
                                        onChange={this.changeDate}
                                    />
                                </div>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        {/* <Col xs={1} /> */}
                        <Col xs={12}>
                            <Button className="btn-block btn-lg">
                                Add new schedule
                            </Button>
                        </Col>
                        {/* <Col xs={1} /> */}
                    </Row>
                </Col>
            </Row >
        )
    }
}