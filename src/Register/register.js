import {Component} from 'react'
import {Link} from 'react-router-dom'
import Welcome from '../Welcome/welcome'

import './register.css'

class Register extends Component {

    state = {
        fullName : '',
        email : '',
        password : '',
        phoneNo : '',
        isRegistered:false
    }

    onChangeFullName = event => this.setState({fullName: event.target.value})

    onChangeEmail = event => this.setState({email: event.target.value})

    onChangePassword = event => this.setState({password: event.target.value})

    onChangePhoneNo = event => this.setState({phoneNo: event.target.value})

    renderFullNameField = () => {
        const {fullName} = this.state
        return(
            <div className='reg-details'>
            <label htmlFor='fullName' className='label' >Full Name*</label>
            <input 
                type='text'
                id='fullName'
                value={fullName}
                className='input'
                placeholder='Enter Full Name'
                onChange={this.onChangeFullName}
            />
            </div>
        )
    }
    
    renderEmailField = () => {
        const {email} = this.state
        return(
            <div className='reg-details'>
            <label htmlFor='email' className='label' >Email Address*</label>
            <input 
                type='text'
                id='email'
                value={email}
                className='input'
                placeholder='Enter Email Address'
                onChange={this.onChangeEmail}
            />
            </div>
        )
    }

    renderPasswordField = () => {
        const {password} = this.state
        return(
            <div className='reg-details'>
            <label htmlFor='password' className='label' >Password*</label>
            <input 
                type='password'
                id='password'
                value={password}
                className='input'
                placeholder='Enter password'
                onChange={this.onChangePassword}
            />
            </div>
        )
    }

    renderPhoneNoField = () => {
        const {phoneNo} = this.state
        return(
            <div className='reg-details'>
            <label htmlFor='phoneNo' className='label' >Phone Number*</label>
            <input 
                type='text'
                id='phoneNo'
                value={phoneNo}
                className='input'
                placeholder='Enter Phone Number'
                onChange={this.onChangePhoneNo}
            />
            </div>
        )
    }

    renderTermsAndPrivacy = () => {
        return(
            <div className='reg-term-priv'>
                <input
                    type='checkbox'
                    id='termsAndPrivacy'
                    className='inputBox'
                />
                <label htmlFor='termsAndPrivacy' className='label'>I agree to the 
                    <span> Terms and Service</span> and 
                    <span> Privacy Policy</span>
                </label>
            </div>
        )
    }

    onSubmitRegisterForm = async event => {
        event.preventDefault()
        const {fullName, email, password, phoneNo} = this.state
        const userRegisterDetails = {user_fullname: fullName, user_email: email, user_password: password, user_phone: phoneNo}
        const loginApiUrl = 'https://snapkaro.com/eazyrooms_staging/api/user_registeration'
        const options = {
            method: 'PUT',
            body: JSON.stringify(userRegisterDetails),
          }
          const response = await fetch(loginApiUrl, options)
          const data = await response.json()
          console.log(data)
          this.setState({isRegistered: true, fullName: '', email: "", password:'', phoneNo: ''})

          
    }

    render() {
        const {isRegistered} = this.state
        return(
            <div className='ui-page'>
                <Welcome/>
                <div className='reg-page'>
                    <img 
                    src='https://res.cloudinary.com/dpnobkqmw/image/upload/v1639302062/logo-color_bbebox.png' 
                    className='logo'
                    alt='img'/>
                    <h1 className='signUpHead'>Sign Up</h1>
                    <p className='signUpPara'>Already have an account ?
                        <Link to="/login">
                        <span> Sign In</span>
                        </Link>
                    </p>
                
                <form onSubmit={this.onSubmitRegisterForm}>
                    <div>
                        {this.renderFullNameField()}
                        <br/>
                        {this.renderEmailField()}
                        <br/>
                        {this.renderPasswordField()}
                        <br/>
                        {this.renderPhoneNoField()}
                        <br/>
                    </div>
                    <div className='reg-details'>
                        {this.renderTermsAndPrivacy()}
                        {isRegistered ? <h1>Account Successfully Created</h1> : ''}
                        <button className='button'>Create your free account</button>
                    </div>
                </form>
                </div>
            </div>

        )
    }
}

export default Register