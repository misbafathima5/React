import React, { Component, Fragment } from 'react'
class EmployeeComponent extends Component {
    state = {
        emp_id: 'Js1',
        emp_name: 'Misba Fathima',
        emp_salary: 20000,
        emp_city: 'Bangalore',
        emp_designation: 'Web Developer',
        emp_education: 'B.E',
        emp_photo:'https://images.unsplash.com/photo-1615125946484-86dd0a2cdb18?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
     }
    render() { 
        return (
            <Fragment>
                <section>
                    <article>
                        <img src={this.state.emp_photo} alt={this.state._emp_name} />
                        <h1>{this.state.emp_name}</h1>
                        <p>{this.state.emp_id}</p>
                        <p>{this.state.emp_salary}</p>
                        <p>{this.state.emp_education}</p>
                        <p>{this.state.emp_designation}</p>
                        <p>{this.state.emp_city}</p>
                            
                    </article>
            </section>
            </Fragment>
         );
    }
}
 
export default EmployeeComponent;