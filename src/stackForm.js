import React from 'react'
class ReactStackFrom extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: 'mbox'};
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    // 表单提交的响应函数
    handleSubmit (event) {
       alert('You picked ' + this.state.value);
       event.preventDefault(); 
    }

    render () {
        return (
            <form onSubmit = {this.handleSubmit}>
                <label>
                    PIck one library:
                    <select value={this.state.value} onChange = {this.handleChange}>
                        <option value="react">React</option>
                        <option value="redux">redux</option>
                        <option value="mobx">Mobx</option>
                    </select>
                </label>
                <input type="submit" value ="Submit" />
            </form>
        )
    }

}

export default ReactStackFrom