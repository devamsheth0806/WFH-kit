import { Component, ReactNode } from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import YoutubeAPI from "../api/YoutubeAPI";
import "../style/videoPlayer.css";
interface IState {
    videoResults: [],
    selectedVideo?: string
}

export class YogaVideos extends Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            videoResults: [],
            selectedVideo: ""
        }
        this.fetchVideos = this.fetchVideos.bind(this);
        this.selectVideo = this.selectVideo.bind(this);
    }

    selectVideo(videoId: string) {
        this.setState({ selectedVideo: videoId })
    }

    async fetchVideos() {
        const response = await YoutubeAPI.get("/search", {
            params: {
                q: "yoga"
            }
        });
        this.setState({
            videoResults: response.data.items,
            selectedVideo: response.data.items[0].id.videoId
        })
    }

    componentDidMount() {
        this.fetchVideos();
    }

    render(): ReactNode {
        // console.log(this.state);
        const videoList = this.state.videoResults.map((metadata: any) => {
            return <ListGroup.Item
                action
                className="video"
                key={metadata.index}
                onClick={() => this.selectVideo(metadata.id.videoId)}>
                <div key={metadata.index} />
                <p className="title">{metadata.snippet.title}</p>

            </ListGroup.Item>

        })

        const videoId = this.state.selectedVideo;

        return (
            <Row className="h-100">
                <Col xs={8} >
                    {(!videoId) ?
                        (
                            <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}>
                                Search for a video
                            </p>
                        )
                        :
                        (
                            <div className="video-player h-100">
                                <iframe
                                    title={videoId}
                                    className="video-iframe"
                                    src={`https://www.youtube.com/embed/${videoId}`}
                                />
                            </div>
                        )
                    }
                </Col>
                <Col xs={4}>
                    {(videoList.length > 0) ?
                        <ListGroup defaultActiveKey={videoList[0].key ?videoList[0].key :"" }>
                            {videoList}
                        </ListGroup>
                        :
                        <ListGroup>
                            {videoList}
                        </ListGroup>

                    }
                </Col>
            </Row>
        )
    }
}