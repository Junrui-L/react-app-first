import React from 'react'
// 这是非受控组件的例子
class SimpleForm extends React.Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        // 通过this.input 获取input元素的值
        alert('The title you submitted is:' + this.input.value);
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <lable>
                    titlesss: 
                    {/* this.input 指向当前input元素 */}
                    <input type = "text" ref = {(input) => this.input = input} />
                </lable>
                <input type = "submit" value = "Submit"/>
            </form>
        )
    }
}

export default SimpleForm