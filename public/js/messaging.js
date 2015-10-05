import Emitter from 'Emitter';
import Elliptic from 'Elliptic';

let ec = Elliptic('secp256k1');

class Fabric extends Emitter {
  constructor(options) {
    super.constructor();
    this.options = options;
    this.seeds = options.seeds || ['ws://localhost:20500'];
    this.peers = {};
  }

  _addPeer(peer) {
    this.peers[  ]
  }

  start() {
    this.p = P.create();
    this.onramp = this.p.connect(seeds[0]);
  }
}

onramp.on('message', function(peerAddress){
 var peer = onramp.connect(peerAddress);

  peer.on('open', function(){
    peer.send('ping?');
  });

  peer.on('message', function(message){
    setTimeout(function(){
      console.log('from peer: ' + message);
      peer.send('ping?');
    }, 1000);
  });
});
