import PropTypes from 'prop-types'

function Student(props) {
    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Networth: {props.networth}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    )
}

Student.defaultProps = {
    name: "Guest",
    age: 40,
    isStudent: false,
    networth: "1 Million"
}

export default Student