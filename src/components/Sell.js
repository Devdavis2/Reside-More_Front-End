import React from 'react'
import { Row, Col } from 'react-materialize';

class Sell extends React.Component {
    render() {
        return(
            <div className="Sell">
                <div className="container">
                <h1>Sell Your Home</h1>
                <h4><b>Do you need to sell your house fast? We can help!</b></h4>
                <p>Do you want to move forward with your life, but feel "stuck" because your house hasn't sold yet? This is a thought that causes stress and keeps many homeowners up at night, but it doesn't have to be that way for you. No matter your situation we can help you.</p>
                <p>To qualify for this opportunity, simply fill out the form with accurate information.</p>
                <p>Once submitted, we will calculate a fair cash offer on your house and get it to you in the next 48 hours. In the event you like the offer we give you, we can close at a time you choose and we'll even pay all of the closing costs for you. It really is that simple.</p>

                <h4><b>How else can we help you?</b></h4>

                <p>Many homeowners have sold their homes to us for many different reasons. Whatever your reason may be, you will have the opportunity to speak with a local real estate expert who can provide you with options that are specifically designed for your situation. Everybody loves options, and there is no charge for this extra service if you decide to submit your information today.</p>

                <h4><b>We are open and honest about what we do</b></h4>

                <p>Many homeowners have sold their homes to us for many different reasons. Whatever your reason may be, you will have the opportunity to speak with a local real estate expert who can provide you with options that are specifically designed for your situation. Everybody loves options, and there is no charge for this extra service if you decide to submit your information today.</p>

                <h4><b>We buy houses in any condition and all price ranges</b></h4>

                <div>
                <Row >
                    <Col className="grey lighten-3" s={12} m={4}>
                    <h5><b>Strategy</b></h5>
               {/* <img src={strategy}/> */}
               <p className="strategic_content">Strategic and creative thinker with an ROI driven mindset and strong problem-solving skills.</p>
               </Col>
               <Col className="blue lighten-2" s={12} m={4}>
               <h5><b>Analytics</b></h5>
               {/* <img src={data}/>  */}
               <p className="data_content">Data-driven decision maker and sound business judgment through strong analytical thinking.</p>
               </Col>
               <Col className=" grey lighten-3" s={12} m={4}>
               <h5 className="web_app"><b>Web Apps</b></h5>
               {/* <img src={app}/> */}
               <p className="web_content">Full-stack web/mobile applications using Javascript, React.js, Express.js, MongoDB and Ruby on Rails.</p>
               </Col>
               </Row>
               
            </div>

                </div>
            </div>
        )
    }
}

export default Sell;