import React from 'react';
import './mailbox.scss'

//1.destructure
const Mailbox = ({unreadMessages}) => {
    return (
        <div className="mailbox">
            {
                //unreadMessages.length //0
                unreadMessages.length > 0 && <span className="mailbox__count">{unreadMessages.length}</span>
            }
            <span className="mailbox__text">Messages</span>

        </div>
    )
}

//1 && 0 && false //0
//React пропускает отрисовку ТОЛЬКО для значений false, null, undefined

export default Mailbox;
















//2. props
// import React from 'react';
// import './page.scss'

// const Page = (props) => {
//     return (
//         <div className="mailbox">
//             <span className="mailbox__text">Messages</span>
//             {
//                 props.unreadMessages.length>0 && <span className="mailbox__count">{props.unreadMessages.length}</span>
//             }
//         </div>
//     )
// }
//
// //1 && 0 && false //0
// //React пропускает отрисовку для для значений false, null, undefined
//
// export default Page;