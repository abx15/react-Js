import React from 'react'
import "../css/Form.css"
import { useState } from 'react'

const FormValidation = () => {

  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')


  const [errorUserName, setErrorUserName] = useState('')
  const [errorUserEmail, setErrorUserEmail] = useState('')
  const [errorUserPassword, setErrorUserPassword] = useState('')
  const [errorConfirmPassword, setErrorConfirmPassword] = useState('')


  const [userColor, setUserColor] = useState('')
  const [emailColor, setEmailColor] = useState('')
  const [passwordColor, setPasswordColor] = useState('')
  const [confirmPasswordColor, setConfirmPasswordColor] = useState('')

  const validate = e => {
    e.preventDefault()

    if (userName.length > 8) {
      setErrorUserName('')
      setUserColor('green')
    } else {
      setErrorUserName('Username must be at least 8 letters')
      setUserColor('red')
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (emailPattern.test(email)) {
      setErrorUserEmail('')
      setEmailColor('green')
    } else {
      setErrorUserEmail('Please enter a valid email')
      setEmailColor('red')
    }

    if (password.length >= 8) {
      setErrorUserPassword('')
      setPasswordColor('green')
    } else {
      setErrorUserPassword('Password must be at least 8 characters')
      setPasswordColor('red')
    }

    if (confirmPassword === password && confirmPassword.length > 0) {
      setErrorConfirmPassword('')
      setConfirmPasswordColor('green')
    } else {
      setErrorConfirmPassword('Passwords do not match')
      setConfirmPasswordColor('red')
    }
  }

  return (
    <>
      <div className='card'>
        <div className='card-image'></div>

        <form action="">
          <input type="text" placeholder='UserName' style={{ borderColor: userColor }} value={userName} onChange={e => setUserName(e.target.value)} />
          <p className="error">{errorUserName}</p>

          <input type="email" placeholder='UserEmail' style={{ borderColor: emailColor }} value={email} onChange={e => setEmail(e.target.value)} />
          <p className="error">{errorUserEmail}</p>

          <input type="password" placeholder='password' style={{ borderColor: passwordColor }} value={password} onChange={e => setPassword(e.target.value)} />
          <p className="error">{errorUserPassword}</p>

          <input type="password" placeholder='confirmPassword' style={{ borderColor: confirmPasswordColor }} value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
          <p className="error">{errorConfirmPassword}</p>

          <button className='submit-btn' onClick={validate}>Submit</button>
        </form>



      </div>
    </>
  )
}

export default FormValidation