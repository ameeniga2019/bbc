import  React, { Component } from "react";
import axios from "axios";
import VideoPlayer from "./VideoPlayer";
import { Container , Row, Col} from "react-bootstrap";

class Api extends Component{
    state = {
        items : []
    }
    
  async  getData() {
      const response = await axios.get('https://cors-anywhere.herokuapp.com/https://openwhyd.org/hot/electro?format=json ')
      this.setState({items: response.data.tracks})
     console.log(response.data.tracks);
     
    }
    componentDidMount() {
        this.getData1()    
}

    async getData1() {
     await    axios.get('https://cors-anywhere.herokuapp.com/https://openwhyd.org/hot/classical?format=json ')
        .then(response => {
            this.setState({
              items: response.data.tracks  });
          })
}    
    
    render() {
        const play = this.state.items.map((item) => {
            let s = item.eId;
            let res = s.split("/");
            return res[2];
        })
        console.log(play)
        const listItems = this.state.items.map((item, i) => 
            <div>
                <Row>
                    <Col>
                {/* <img src={item.img} alt="no"></img> */}
                <VideoPlayer
                    url={`https://www.youtube.com/watch?v=${play[i++]}`} ></VideoPlayer>
                        <br />
                    </Col>
                <Col>
                  
                    < li  style={{paddingLeft:'100px'}}><h5 style={{color:'cadetblue'}}>   Song title:   {item.name}</h5></ li>
                    <li>   Artist: {item.uNm}</li>
                  </Col>
                    </Row>
         </div>
            )
        return (
            <div>
                <Container><br/>
                    <h1> <u>  BBC APPLICATION</u></h1>
                    <br/>
                    <Row>
                        <Col>
                        <ul>{listItems}</ul>
                        </Col>
                </Row>
                </Container>
  </div>
        )
    }
}

export default Api;

