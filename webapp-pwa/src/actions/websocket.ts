export const setupWebsocket = ({ host, port }: any) =>
  new Promise(resolve => {
    const webSocket = new WebSocket(`ws://${host}:${port}`)

    const receive = (onMessageCb: any) => {
      webSocket.onmessage = event => onMessageCb(JSON.parse(event.data))
    }

    const send = (type: any, payload: any) => webSocket.send(JSON.stringify({ type, payload }))

    webSocket.onopen = () => resolve({ send, receive })
  })

export const fetchData = () => {
  let data = { Data: [] }
  const websocket = new WebSocket('ws://evening-crag-51333.herokuapp.com/data')
  websocket.onopen = function(evt) {
    console.log('Successfully connected to the websocket')
  }

  websocket.onerror = function(err) {
    console.log(err)
  }

  websocket.onmessage = function(evnt) {
    data = JSON.parse(evnt.data)
    console.log('Sending data to the connected websocket')
    console.log(data)
  }
  return data
}
