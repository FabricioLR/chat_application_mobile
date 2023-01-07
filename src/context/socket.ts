import io from "socket.io-client"

//"https://chatapplication.onrender.com/"
//"http://localhost:4000"

const socket = io("https://chatapplication.onrender.com/")

export default socket