import './Specialization.css'

function Specialization(props) {
    return ( 
        <SplitPane
            left={<Contacts />}
            right={<Chat />} 
        />
     );
}

function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-right">
                {props.right}
            </div>
            <div className="SplitPane-left">
                {props.left}
            </div>
        </div>
    );
}

function Contacts() {
    return <div className="Contacts" />;
}

function Chat() {
    return <div className="Chat" />;
}

export default Specialization;