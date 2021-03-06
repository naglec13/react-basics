import React from "react";
import PropTypes from "prop-types"
import TodoItem from "./TodoItem";

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

function TodoList(props) {
    console.log('from TodoList -> ',props.data)
    return (
        <ul style={styles.ul}>
            {props.data.map((item, index) => {
                return <TodoItem record={item} key={item.id} index={index} funcFromTodoList={props.funcFromApp}/>
            })}
        </ul>
    )
}

TodoList.propeTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    funcFromApp: PropTypes.func.isRequired
}

export default TodoList