import React from "react";

export default function MailBox({unreadMessages}){

    return(

        <div>
            <h3>MailBox</h3>
            {unreadMessages.length>0 &&(<p>You have {unreadMessages.length} unread messages</p>
        )}
        </div>
    );
}