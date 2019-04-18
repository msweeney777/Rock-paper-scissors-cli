const {Command, flags} = require('@oclif/command')
const {Stats} = require('../db');
const choices = ['rock', 'paper', 'scissors']
const i = Math.round((Math.random() * (choices.length - 1)));
const response = choices[i];
const stats = {['win']: 0, ['lose']: 0, ['tie']: 0} 
let result = "";

const results = {
  rock: {
    rock: 'tie',
    paper: 'lose',
    scissors: 'win'
  },
  paper: {
    rock: 'win',
    paper: 'tie',
    scissors: 'lose'
  },
  scissors: {
    rock: 'lose',
    paper: 'win',
    scissors: 'tie'
  }
}

class InputCommand extends Command {
  async run() {
    const {
      flags: {choice}
    } = this.parse(InputCommand)
    console.log(result);
    if(choices.includes(choice)){
      console.log(`${choice} vs. ${response}\n`)
      result = results[choice][response];
      if(result == 'win') {
        console.log('Congratulations you won!')
      } else if (result == 'lose') {
        console.log('Sorry ... you lose.')
      } else {
        console.log('Tie.')
      }
      Stats.find({id: result}).update('total', n => n + 1).write();
      console.log(`
      human: ${Stats.find({id: 'win'}).get('total').value()}
      machine: ${Stats.find({id: 'lose'}).get('total').value()}
      tie: ${Stats.find({id: 'tie'}).get('total').value()}\n`);
    } else {
      console.log('Error ... did not process your response try again.\n');
    }
  }
}

InputCommand.description = `Takes one of three possible choices - 'rock', 'paper', or 'scissors'
...
Takes one of three possible string inputs for the 'choice' flag - rock, paper or scissors - and outputs a randomly selected response - i.e. the machine's - and then prints out the outcome. 
`

InputCommand.flags = {
  choice: flags.string({char: 'n', description: 'choice'}),
}

module.exports = InputCommand
