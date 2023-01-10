import { messages } from "../data/messages.js";

const Chat = () => {
    return (
        <div className="w-1/4 flex flex-col h-screen bg-dark-1">
            <div className="flex justify-between items-center py-7 px-5 border-b border-solid border-muted-2">
                <h2 className="text-white font-bold">
                    Online Chat
                </h2>
                <div className="flex items-center">
                    <p className="text-muted-1 mr-3">Chat rules</p>
                    <button type="button" className="p-3 text-muted-1 bg-muted-2 rounded cursor-pointer transition-all duration-75 hover:bg-muted-3">
                        <i className="bi bi-chevron-bar-right flex items-center justify-center" />
                    </button>
                </div>
            </div>
            <div className="flex flex-col py-7 px-5">
                {
                    messages.map(({id, username, online, time, admin, message}) => (
                        <div className="p-4 bg-dark-4 mb-4 rounded" key={id}>
                            <div className="flex items-center justify-between mb-1">
                                <p className={`text-white font-bold relative after:content after:absolute after:w-2 after:h-2 after:rounded-full after:bg-${online ? 'success' : 'muted-1'} after:ml-2`}>
                                    {username}
                                </p>
                                <p className="text-muted-1 text-sm">{time}</p>
                            </div>
                            <p className="text-muted-1 text-base">
                                {message}
                            </p>
                        </div>
                    ))
                }
            </div>
            <div className="py-7 px-5 mt-auto">
                <textarea className="w-full h-20 px-5 py-3 bg-dark-5 rounded text-base text-white resize-none outline-none placeholder:text-muted-1 font-sans" placeholder="Enter your message..." />
            </div>
        </div>
    )
}

export default Chat