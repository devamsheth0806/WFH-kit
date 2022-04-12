import { Component, FormEvent } from "react";
import { Editor } from "react-draft-wysiwyg";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../style/editor.css'
export class SocialSpace extends Component {

    constructor(props: any) {
        super(props);
        this.state = {
            some: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e: FormEvent) {
        console.log("hl");
        e.preventDefault();
        e.stopPropagation();
        console.log(e);
        return false;
    }

    handleChange(e: any) {
        console.log(e);
    }

    render() {
        return (
            <Row>
                <Col xs={1} />
                <Col xs={10}>
                    <Form onSubmit={this.handleSubmit}>
                        <Editor
                            wrapperClassName="wrapper"
                            editorClassName="editor"
                            toolbarClassName="toolbar"

                            onChange={this.handleChange}
                        />
                        <Button name="submit" type="submit">Submit</Button>
                    </Form>
                </Col>
                <Col xs={1} />
            </Row>
        )
    }
}