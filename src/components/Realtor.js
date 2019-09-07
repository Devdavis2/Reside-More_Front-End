import React from 'react'

class Realtor extends React.Component {
    state = {
        FirstName: '',
        LastName: '',
        Street_Address: '',
        City: '',
        State: '',
        Zip: '',
        Phone: '',
        Email: '',
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

        })
    
    }

    render() {
        return(
            <div>
                <h1>Work with Us</h1>

<form className="container">
<h4>Submit your Info Online</h4>

<input name="FirstName"  placeholder="First Name" value={this.state.FirstName} onChange={e => this.change(e)}/>
<input name="LastName"  placeholder="Last Name" value={this.state.LastName} onChange={e => this.change(e)}/>
<input name="Street_Address"  placeholder="Street Address" value={this.state.Street_Address} onChange={e => this.change(e)}/>
<input name="City"  placeholder="City" value={this.state.City} onChange={e => this.change(e)}/>
<input name="State"  placeholder="State" value={this.state.State} onChange={e => this.change(e)}/>
<input name="Zip"  placeholder="Zip" value={this.state.Zip} onChange={e => this.change(e)}/>
<input name="Phone"  placeholder="Phone" value={this.state.Phone} onChange={e => this.change(e)}/>
<input name="Email"  placeholder="Email" value={this.state.Email} onChange={e => this.change(e)}/>

</form>

<button onClick={e => this.onSubmit(e)}>Submit</button>

            </div>
            
        )
    }
}

export default Realtor;