import PropTypes from 'prop-types'

function List(props) {

    const itemList = props.items
    const category = props.category

    // fruits.sort((a, b) => a.name.localeCompare(b.name))

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)
    // const highCalFruits = fruits.filter(fruit => fruit.calories > 100)

    const listItems = itemList.map(item => <li key={item.id} >{item.name}: &nbsp; <b>{item.calories}</b></li>)

    return(
        <>
            <h1>{category}</h1>
            <ol>{listItems}</ol>
        </>
    )

}

List.propTyeps = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number}))
}

export default List