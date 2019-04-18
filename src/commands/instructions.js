const {Command} = require('@oclif/command')

class InstructionsCommand extends Command {
  async run() {
    this.log('\nRock, paper or scissors?\n')
    console.log("Use the 'input' command with a rock, paper or scissors flag (--{flag_name}) to proceed \n");
  }
}

InstructionsCommand.description = `Provides a prompt with instruction as to how to proceed.
...
Provides a prompt wiht Instructions as to how to proceed through with the game
`

module.exports = InstructionsCommand
