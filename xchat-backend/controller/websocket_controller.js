/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Xu Song
 * @Date: 2023-11-10 21:46:46
 * @LastEditors: Xu Song
 * @LastEditTime: 2023-11-10 22:13:28
 */

chat = (io) => {
  let count = 0
  let users = []
  io.on('connection', socket => {
    console.log('user connected')
    count++

    socket.on('login', (data) => {
      socket.username = data
      console.log(`${data}加入了聊天室`)
      const user = users.find(item => item === data)
      if (user) {
        socket.emit('loginError')
        console.log(user)
      }else {
        users.push(data)
        console.log(users)
        io.sockets.emit('user_enter', `${data}加入了聊天室`)
        io.sockets.emit('count_users', users)
      }
    })

    socket.on('send_msg', (data) => {
      console.log(`收到客户端的消息：${data}`)
      io.sockets.emit('broadcast_msg', {
        username: data.username,
        input: data.input,
        time: new Date().toLocaleString()
      })
    })

    socket.on('disconnect', () => {
      let index = users.findIndex(item => item === socket.username)
      users.splice(index,1)
      console.log('user disconnected')
      io.sockets.emit('user_leave', `${socket.username}离开了群聊`)
      io.sockets.emit('count_users', users)
    });

    // 处理图片请求
    socket.on('sendImage', data => {
      // 直接广播给所有人
      console.log('----------------------receiveImage---------------------')
      console.log(data)
      io.sockets.emit('receiveImage', data)
    })
  });
}

module.exports = {
  chat
}

