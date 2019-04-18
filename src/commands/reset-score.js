const {Command} = require('@oclif/command')
const {Stats} = require('../db');

class ResetScoreCommand extends Command {
  async run() {
    Stats.find({id: 'win'}).update('total', n => n = 0).write();
    Stats.find({id: 'lose'}).update('total', n => n = 0).write();
    Stats.find({id: 'tie'}).update('total', n => n = 0).write();

    console.log('\nScore is reset!')
    console.log(`
    human: ${Stats.find({id: 'win'}).get('total').value()}
    machine: ${Stats.find({id: 'lose'}).get('total').value()}
    tie: ${Stats.find({id: 'tie'}).get('total').value()}\n`);
  }
}

ResetScoreCommand.description = `Resets the score
...
Resets the total keys for each object back to 0
`

module.exports = ResetScoreCommand
