import React from 'react'

class Button extends React.Component {
    render () {
        return (<button>Ok</button>)
    }
}

const button = <Button />

class Page extends React.Component {
    render() {
        return (
            <div>{button}</div>
        )
    }
}

class Page extends React.Component {
    render() {
        <div>
            <Button />
        </div>
    }
}