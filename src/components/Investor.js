import React from 'react'

class Investor extends React.Component {
state = {
    FirstName: '',
    LastName: '',
    Street_Address: '',
    City: '',
    State: '',
    Zip: '',
    Phone: '',
    Email: '',

// Personal Funds
    Personal_Funds: '',
    IRA_Funds: '',
    Business_Funds: '',
    Liquid_Funds: '',
    Length_Terms: '',
    Payments: '',
    
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
        FirstName: '',
        LastName: '',
        Street_Address: '',
        City: '',
        State: '',
        Zip: '',
        Phone: '',
        Email: '',
    
    // Personal Funds
        Personal_Funds: '',
        IRA_Funds: '',
        Business_Funds: '',
        Liquid_Funds: '',
        Length_Terms: '',
        Payments: '',
    })
    
}

    render() {
        return(
            <div className="Invest">
                <div className="container">
                <h1>Invest with Us</h1>
                <h4>Are you a Real Estate Investor?</h4>
                <h5>Are you looking to buy wholesale properties or invest for returns?</h5>
                <p>Reside & More Properties has the experience, know-how, 
                and infra-structure to offer you <b>opportunities</b> in your real estate investment endeavors, 
                whether you are looking for a rehab project to work on OR an alternative to investing your money.</p>
                <p>Please call us today at <b>646-600-1177</b> if you’d like to learn more about the options that we offer.</p>
                </div>
{/* Start of Form fields */}
<form className="container">
<h4>Contact Information</h4>

<input name="FirstName"  placeholder="First Name" value={this.state.FirstName} onChange={e => this.change(e)}/>
<input name="LastName"  placeholder="Last Name" value={this.state.LastName} onChange={e => this.change(e)}/>
<input name="Street_Address"  placeholder="Street Address" value={this.state.Street_Address} onChange={e => this.change(e)}/>
<input name="City"  placeholder="City" value={this.state.City} onChange={e => this.change(e)}/>
<input name="State"  placeholder="State" value={this.state.State} onChange={e => this.change(e)}/>
<input name="Zip"  placeholder="Zip" value={this.state.Zip} onChange={e => this.change(e)}/>
<input name="Phone"  placeholder="Phone" value={this.state.Phone} onChange={e => this.change(e)}/>
<input name="Email"  placeholder="Email" value={this.state.Email} onChange={e => this.change(e)}/>

<h4>I have the following funds available for investment</h4>

<input name="Personal_Funds"  placeholder="Personal_Funds" value={this.state.Personal_Funds} onChange={e => this.change(e)}/>
<input name="IRA_Funds"  placeholder="IRA_Funds" value={this.state.IRA_Funds} onChange={e => this.change(e)}/>
<input name="Business_Funds"  placeholder="Business_Funds" value={this.state.Business_Funds} onChange={e => this.change(e)}/>
<input name="Liquid_Funds"  placeholder="Liquid_Funds" value={this.state.Liquid_Funds} onChange={e => this.change(e)}/>
<input name="Length_Terms"  placeholder="Length_Terms" value={this.state.Length_Terms} onChange={e => this.change(e)}/>
<input name="Payments"  placeholder="Payments" value={this.state.Payments} onChange={e => this.change(e)}/>
</form>

<button onClick={e => this.onSubmit(e)}>Submit</button>
                
            </div>
        )
    }
}


export default Investor;