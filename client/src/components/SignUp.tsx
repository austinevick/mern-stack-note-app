import React from 'react'

export const SignUp = () => {
    return (
        <div className='signup-wrapper'>
            <form >
                <p>Email</p>
                <input type="text" />
                <p>Password</p>
                <input type="text" />
                <input type="checkbox" />
                <span>Stay logged in</span>

            </form>

        </div>
    )
}
