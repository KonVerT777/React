import React from 'react'

import Message from './Message.jsx'
import Example from './Example'
import MessageList from './MessageList'
import AddMessage from './AddMessage'

/*
const App = (props) => {

    const state = {
        test: 'text'
    };

    return <main><Message text={state.text}/></main>;
};
*/

export default class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            // text: 'Some text from state',
            timeout: null,
            messages: [],
            interval: null
        }
    }

    // componentDidMount(){
    //     console.log('componentDidMount')
    //     const timeout = setTimeout(
    //         () => {
    //             this.setState({text: this.state.text + ' Updated'})
    //         },
    //         2000
    //     )
    //     const interval = setInterval(
    //         () => {
    //             this.setState({messages: [...this.state.messages, 'How are you?']})
    //             setTimeout(
    //                 () => this.setState({messages: [...this.state.messages, 'I do not answer you. I am robot']}),
    //                 1000
    //             )
    //         },
    //         2000
    //     );
    //     this.setState({timeout})
    //     this.setState({interval})
    //     // fetch()....then(res => { ...... this.setState(...) })
    // }

    // componentDidUpdate(){
    //     console.log('componentDidUpdate')
    // }

    // componentWillUnmount(){
    //     clearTimeout(this.state.timeout)
    //     clearInterval(this.state.interval)
    //     this.setState({timeout: null})
    //     this.setState({interval: null})
    // }

    componentDidUpdate(){
        if (this.state.messages.length % 2 === 1) {  // Остаток от деления на 2
            setTimeout(() =>
            this.setState(
                { messages: [ ...this.state.messages, {message: 'Не приставай ко мне, я робот!', author: 'robot'}] }),
            1000)
        } 
    }

    send = objMsg => {
        this.setState({ messages: [ ...this.state.messages, objMsg] })
    }

    render() {
        console.log('render');
        return <main>
            <MessageList messages={this.state.messages}/>
            <AddMessage send={this.send}/>
            {/* <Message text={this.state.text}/>
            <Example /> */}
        </main>;
    }
}