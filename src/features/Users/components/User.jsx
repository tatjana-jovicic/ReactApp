import './User.css'

// eslint-disable-next-line react/prop-types
const User = ({ name, age, city, email, imageUrl }) => {
    return (
        <div>
            <img className='imgCSS' src={imageUrl} />
            <p>My name is: {name}</p>
            <p>My age: {age}</p>
            <p>I come from: {city}</p>
            <p>My Email: {email}</p>
        </div>
    )
}

export default User