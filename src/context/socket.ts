import io from "socket.io-client"

//"https://chatapplication.onrender.com/"
//"http://192.168.3.50:4000"

const socket = io("https://chatapplication.onrender.com/")

export default socket