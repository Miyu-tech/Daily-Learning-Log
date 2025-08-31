import { useState } from "react";

function BetterSignupForm() {
    const [formData, setFormData] = useState({ firstName: '', lastName: '', password: '' });

    const handleChange = (evt) => {
        const fieldName = evt.target.name;
        const value = evt.target.value;
        setFormData((currData) => {
            currData[fieldName] = value;
        })
    };

    const handleSubmit = () => {
        console.log(formData.lastName, formData.firstName);
    };


    return (
        <div>
            <label htmlFor='firstName'>名前</label>
            <input
                id='firstName'
                name="firstName"
                type="text"
                placeholder="太郎"
                value={formData.firstName}
                onChange={handleChange}
            />
            <label htmlFor='password'>名前</label>
            <input
                id='password'
                name="password"
                type="password"
                placeholder="パスワード"
                value={formData.password}
                onChange={handleChange}
            />
            <label htmlFor='lastName'>苗字</label>
            <input
                id='lastName'
                name="lastName"
                type="text"
                placeholder="山田"
                value={formData.lastName}
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>送信</button>
        </div>
    );
}

export default BetterSignupForm;