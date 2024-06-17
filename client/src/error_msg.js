import "./error_msg.css"

export default function ErrorMsg(props) {
    const msgs = props.error_msgs

    return( 
    <>
        {msgs.map((msg, i) => {
            return <p key={i} class="error_msg">{msg}</p>
        })}
    </>
    )
       
}