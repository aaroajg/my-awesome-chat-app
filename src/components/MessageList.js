import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css';
import Message from './Message';

class MessageList extends React.Component {
    componentWillUpdate() {
        const node = ReactDOM.findDOMNode(this);
        this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight;
    }

    componentDidUpdate() {
        if(this.shouldScrollToBottom) {
            const node = ReactDOM.findDOMNode(this);
            node.scrollTop = node.scrollHeight;
        }
    }

    render() {
        if(!this.props.roomId) {
            return (
                <div className='message-list'>
                    <div className='join-room'>
                        &larr; Join a room!
                    </div>
                </div>
            )
        }
        return (
            <div className='message-list'>
                {this.props.messages.map((message) => {
                    return (
                        <Message key={message.id} username={message.senderId} text={message.text} />
                    )
                })}
            </div>
        )
    }
}

export default MessageList;