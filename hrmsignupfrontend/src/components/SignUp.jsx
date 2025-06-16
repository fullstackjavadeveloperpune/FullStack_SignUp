import axios from 'axios';
import React, { useState } from 'react'

export const SignUp = () => {

    const [employee, setEmployee] = useState({
        empName: "",
        empAddress: "",
        empContactNumber: "",
        empDOB: "",
        empEmailId: "",
        empPassword: ""
    })

    const { empName, empAddress, empContactNumber, empDOB, empEmailId, empPassword } = employee;

    const onInputChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        await axios.post("http://localhost:8080/employees/signup", employee)

        console.log(employee)

        alert("SignUp Done Successfully")
    }

    return (
        <div className='container'>

            <div className='row'>

                <div className='col-md-9 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2>Employee SignUp</h2>
                    <form onSubmit={(e) => onSubmit(e)}>

                        <div className='mb-3'>
                            Employee Name<input type='text' name='empName' value={empName} onChange={(e) => onInputChange(e)} />
                        </div>

                        <div className='mb-3'>
                            Employee Address<input type='text' name='empAddress' value={empAddress} onChange={(e) => onInputChange(e)} />
                        </div>


                        <div className='mb-3'>
                            Employee Conatct Number<input type='number' name='empContactNumber' value={empContactNumber} onChange={(e) => onInputChange(e)} />
                        </div>

                        <div className='mb-3'>
                            Employee DOB<input type='date' name='empDOB' value={empDOB} onChange={(e) => onInputChange(e)} />
                        </div>

                        <div className='mb-3'>
                            Employee Email Id<input type='email' name='empEmailId' value={empEmailId} onChange={(e) => onInputChange(e)} />
                        </div>

                        <div className='mb-3'>
                            Employee Password<input type='password' name='empPassword' value={empPassword} onChange={(e) => onInputChange(e)} />
                        </div>

                        <button type='submit' className='btn btn-success'>Sign Up</button>

                    </form>
                </div>
            </div>

        </div>
    )
}
