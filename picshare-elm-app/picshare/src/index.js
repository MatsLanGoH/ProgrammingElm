import './main.css';
import { Elm } from './Picshare.elm';
import registerServiceWorker from './registerServiceWorker';

var app = Elm.Picshare.init({
  node: document.getElementById('root')
});

app.ports.listen.subscribe(listen);

function listen(url) {
  var socket = new WebSocket(url);

  socket.onmessage = function(event) {
    app.ports.receive.send(event.data);
  };
}

registerServiceWorker();
