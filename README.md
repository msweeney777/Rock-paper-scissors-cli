rpscli
======



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/rpscli.svg)](https://npmjs.org/package/rpscli)
[![Downloads/week](https://img.shields.io/npm/dw/rpscli.svg)](https://npmjs.org/package/rpscli)
[![License](https://img.shields.io/npm/l/rpscli.svg)](https://github.com/msweeney777/rpscli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g rpscli
$ rpscli COMMAND
running command...
$ rpscli (-v|--version|version)
rpscli/0.0.0 darwin-x64 node-v11.14.0
$ rpscli --help [COMMAND]
USAGE
  $ rpscli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`rpscli delete-score`](#rpscli-delete-score)
* [`rpscli help [COMMAND]`](#rpscli-help-command)
* [`rpscli input`](#rpscli-input)
* [`rpscli instructions`](#rpscli-instructions)

## `rpscli delete-score`

Describe the command here

```
USAGE
  $ rpscli delete-score

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/delete-score.js](https://github.com/msweeney777/rpscli/blob/v0.0.0/src/commands/delete-score.js)_

## `rpscli help [COMMAND]`

display help for rpscli

```
USAGE
  $ rpscli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_

## `rpscli input`

Takes one of three possible choices - 'rock', 'paper', or 'scissors'

```
USAGE
  $ rpscli input

OPTIONS
  -n, --choice=choice  choice

DESCRIPTION
  ...
  Takes one of three possible string inputs for the 'choice' flag - rock, paper or scissors - and outputs a randomly 
  selected response - i.e. the machine's - and then prints out the outcome.
```

_See code: [src/commands/input.js](https://github.com/msweeney777/rpscli/blob/v0.0.0/src/commands/input.js)_

## `rpscli instructions`

Provides a prompt with instruction as to how to proceed.

```
USAGE
  $ rpscli instructions

DESCRIPTION
  ...
  Provides a prompt wiht Instructions as to how to proceed through with the game
```

_See code: [src/commands/instructions.js](https://github.com/msweeney777/rpscli/blob/v0.0.0/src/commands/instructions.js)_
<!-- commandsstop -->
