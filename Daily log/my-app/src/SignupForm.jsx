import { useState } from "react";

function SignupForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const updateFirstName = (evt) => {
        setFirstName(evt.target.value);
    };
    const updateLastName = (evt) => {
        setLastName(evt.target.value);
    };

    const handleSubmit = () => {
        console.log(lastName, firstName);
    }


    return (
        <div>
            <label htmlFor='firstName'>名前</label>
            <input
                id='firstName'
                type="text"
                placeholder="太郎"
                value={firstName}
                onChange={updateFirstName}
            />
            <label htmlFor='lastName'>苗字</label>
            <input
                id='lastName'
                type="text"
                placeholder="山田"
                value={lastName}
                onChange={updateLastName}
            />
            <button onClick={handleSubmit}>送信</button>
        </div>
    );
}

export default SignupForm;