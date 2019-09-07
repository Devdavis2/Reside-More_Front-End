import React from 'react'
import { Row, Col } from 'react-materialize';

class Contractor extends React.Component {
state = {
// Name and Experience Section
    Company: '',
    FirstName: '',
    LastName: '',
    Street_Address: '',
    City: '',
    State: '',
    Zip: '',
    Phone: '',
    Email: '',

// Experience & Insurance

    Specialization: '',
    Contractor_License_Number: '',
    Insurance: Boolean,
    Insurance_type: '',
    Coverage: '',
    Experience: '',
    Management_Experience: '',
    Employees: '',

// Current Projects & Bidding

    Projects: '',
    Past_Projects: '',
    Job_Capacity: '',
    Recent_Jobs: '',
    SOW: '',
    Job_Address: '',
    Job_Bid: '',
    Materials_Labor: '',
    Warranties: '',
    Warranties_Length: '',

// Sub-Contractor Prescreening
    Sub_Contractor: '',
    Licensed_Insured: '',
    Electrician: '',
    Plumber: '',
    Certificates_Licenses: '',
    BBB_CoC: '',
    Bankruptcy: '',
    Communication: '',
    Clean: '',
    Lien_Waiver: '',

// References
    References: '',
    Lead_Source: '',

}

change = e => {
    this.setState({
        [e.target.name]: e.target.value 
    })
}; 

onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
        Company: '',
        FirstName: '',
        LastName: '',
        Street_Address: '',
        City: '',
        State: '',
        Zip: '',
        Phone: '',
        Email: '',
    })
    
}

    render() {
        return(
            <div>
                <h1>Contractors</h1>


                <h4><b>Partner with Us</b></h4>

<div className="container">
<Row >
    <Col className="grey lighten-3" s={12} m={3}>
    <h5><b>Submit your info</b></h5>
{/* <img src={strategy}/> */}
<p className="strategic_content">Strategic and creative thinker with an ROI driven mindset and strong problem-solving skills.</p>
</Col>
<Col className="blue lighten-2" s={12} m={3}>
<h5><b>Complete the Interview</b></h5>
{/* <img src={data}/>  */}
<p className="data_content">Data-driven decision maker and sound business judgment through strong analytical thinking.</p>
</Col>
<Col className=" grey lighten-3" s={12} m={3}>
<h5 className="web_app"><b>Bid on a Job</b></h5>
{/* <img src={app}/> */}
<p className="web_content">Full-stack web/mobile applications using Javascript, React.js, Express.js, MongoDB and Ruby on Rails.</p>
</Col>
<Col className="blue lighten-2" s={12} m={3}>
<h5><b>Start Working with Us</b></h5>
{/* <img src={data}/>  */}
<p className="data_content">Data-driven decision maker and sound business judgment through strong analytical thinking.</p>
</Col>
</Row>

</div>

                <h6>We are always looking to partner with great contractors. </h6>
                <h6>Submit your Info Below</h6>
                <h5 className="blue">Contractor Application</h5>
                <form className="container">
{/* Experience and Insurance Form Section */}
                <h5><b>Name and Contact Information</b></h5>
                    <Row>
                        <Col m={4}>
                <input name="Company"  placeholder="Company Name" value={this.state.Company} onChange={e => this.change(e)}/> 
                </Col>
                <Col m={4}>
                <input name="FirstName"  placeholder="First Name" value={this.state.FirstName} onChange={e => this.change(e)}/>  
                </Col>
                <Col m={4}>
                <input name="LastName"  placeholder="Last Name" value={this.state.LastName} onChange={e => this.change(e)}/>   
                </Col>
                </Row>
                <Row>
                <Col m={4}>
                <input name="Street_Address"  placeholder="Street Address" value={this.state.Street_Address} onChange={e => this.change(e)}/> 
                </Col>
                <Col m={4}>
                <input name="City"  placeholder="City" value={this.state.City} onChange={e => this.change(e)}/> 
                </Col>
                <Col m={4}>
                <input name="State"  placeholder="State" value={this.state.State} onChange={e => this.change(e)}/> 
                </Col>
                </Row>
                <Row>
                <Col m={4}>
                <input name="Zip"  placeholder="Zip" value={this.state.Zip} onChange={e => this.change(e)}/> 
                </Col>
                <Col m={4}>
                <input name="Phone"  placeholder="Phone" value={this.state.Phone} onChange={e => this.change(e)}/> 
                </Col>
                <Col m={4}>
                <input name="Email"  placeholder="Email" value={this.state.Email} onChange={e => this.change(e)}/>  
                </Col>
                </Row>
{/* Experience and Insurance Form Section */}
                <h5><b>Experience and Insurance</b></h5>
                <input name="Specialization"  placeholder="Specialization" value={this.state.Specialization} onChange={e => this.change(e)}/> 
                <input name="Contractor_License_Number"  placeholder="Contractor License Number" value={this.state.Contractor_License_Number} onChange={e => this.change(e)}/> 
                <input name="Insurance"  placeholder="Insurance" value={this.state.Insurance} onChange={e => this.change(e)}/> 
                <input name="Insurance_type"  placeholder="What type of insurance?" value={this.state.Insurance_type} onChange={e => this.change(e)}/> 
                <input name="Coverage"  placeholder="How much coverage?" value={this.state.Coverage} onChange={e => this.change(e)}/> 
                <input name="Experience"  placeholder="How many years experience in the area?" value={this.state.Experience} onChange={e => this.change(e)}/> 
                <input name="Management_Experience"  placeholder="How many years of managing your own team?" value={this.state.Management_Experience} onChange={e => this.change(e)}/> 
                <input name="Employees"  placeholder="Number of full-time crew members?" value={this.state.Employees} onChange={e => this.change(e)}/>
    {/* Current Projects and Bidding Form Section */}

                <h5><b>Current Projects and Bidding</b></h5>

                <input name="Projects"  placeholder="How many projects do you have going on right now?" value={this.state.Projects} onChange={e => this.change(e)}/> 
                <input name="Past_Projects"  placeholder="In the past year?" value={this.state.Past_Projects} onChange={e => this.change(e)}/>
                <input name="Job_Capacity"  placeholder="How many jobs do you typically manage at once?" value={this.state.Job_Capacity} onChange={e => this.change(e)}/>
                <input name="Recent_Jobs"  placeholder="Can we see the work on one or two recent jobs?" value={this.state.Recent_Jobs} onChange={e => this.change(e)}/>
                <input name="SOW"  placeholder="What were the scopes of work?" value={this.state.SOW} onChange={e => this.change(e)}/>
                <input name="Job_Address"  placeholder="What are the addresses?" value={this.state.Job_Address} onChange={e => this.change(e)}/>
                <input name="Job_Bid"  placeholder="How do you typically bid out your work?" value={this.state.Job_Bid} onChange={e => this.change(e)}/>
                <input name="Materials_Labor"  placeholder="Are materials & labor charged together or separate in your bids?" value={this.state.Materials_Labor} onChange={e => this.change(e)}/>
                <input name="Warranties"  placeholder="Do you give written warranties for your work?" value={this.state.Warranties} onChange={e => this.change(e)}/>
                <input name="Warranties_Length"  placeholder="How long are your warranties?" value={this.state.Warranties_Length} onChange={e => this.change(e)}/>

{/* Sub-Contractor Prescreening Form Section */}

            <h5><b>Sub-Contractor Prescreening</b></h5>
                <input name="Sub_Contractor"  placeholder="Do you use sub-contractors?" value={this.state.Sub_Contractor} onChange={e => this.change(e)}/>
                <input name="Licensed_Insured"  placeholder="Are they licensed and insured?" value={this.state.Licensed_Insured} onChange={e => this.change(e)}/>
                <input name="Electrician"  placeholder="Who is your electrician?" value={this.state.Electrician} onChange={e => this.change(e)}/>
                <input name="Plumber"  placeholder="Who is your plumber?" value={this.state.Plumber} onChange={e => this.change(e)}/>
                <input name="Certificates_Licenses"  placeholder="Do you have any certificates/licenses to validate your skills?" value={this.state.Certificates_Licenses} onChange={e => this.change(e)}/>
                <input name="BBB_CoC"  placeholder="Do you belong to the Better Business Bureau or local Chamber of Commerce?" value={this.state.BBB_CoC} onChange={e => this.change(e)}/>
                <input name="Bankruptcy"  placeholder="Have you ever declared bankruptcy?" value={this.state.Bankruptcy} onChange={e => this.change(e)}/>
                <input name="Communication"  placeholder="How often do you communicate with your clients during a job?" value={this.state.Communication} onChange={e => this.change(e)}/>
                <input name="Clean"  placeholder="Do you clean the job site daily?" value={this.state.Clean} onChange={e => this.change(e)}/>
                <input name="Lien_Waiver"  placeholder="Do you have a problem with signing a lien waiver?" value={this.state.Lien_Waiver} onChange={e => this.change(e)}/>
               

        {/* References*/}

        <h5><b>References</b></h5>

        <input name="References"  placeholder="Please provide a list three(3) references, include the names, contact number and emails of those you have done work for in the past." value={this.state.References} onChange={e => this.change(e)}/>
        <input name="Lead_Source"  placeholder="How did you learn about Reside & More Properties?" value={this.state.Lead_Source} onChange={e => this.change(e)}/>
                </form>

                <button onClick={e => this.onSubmit(e)}>Submit</button>
            </div>
        )
    }
}

export default Contractor;