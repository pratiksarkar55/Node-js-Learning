const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter{
   log(msg){
     this.emit('message',{id:uuid.v4(),msg})
   }
}
const logger = new Logger();

logger.on('message', data=>{
  console.log(data);
});

logger.log('Emitting logger');

//TO DO - Log contents of newly created file