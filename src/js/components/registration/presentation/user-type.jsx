import React from 'react'
import Radium from 'radium'
import {RaisedButton, FlatButton} from 'material-ui'

const UserType = (props) => {
  var messageWhy = 'If you select the Geek option, you are the keeper of your \
   passphrase that was randomly generated by the mouse moving you just did \
   to uncover the picture. You must be prepared to keep the passphrase you \
   in a safe place where you are not going to loose it and where others \
   can\'t get to it. This phrase + a secret pin is how you \'login\' to the \
   wallet in the future.\nIf you select the \'No hassle\' option we will \
   save your passphrase for you, but you will then need a password to get it'

  var messageConfirm = 'You have selected ' + (props.value === 'expert'
   ? '\'Geek\'. Do you have pencil and paper ready to save your passphrase \
   securely for accessing your wallet in the future?' : '\'No hassle\' and \
   we\'ll save your passphrase for you')
  var messageSelect = 'Please make a selection. If you are not sure, checkout \
   \'WHY?\''
  return <div>
    <h1>Hi {props.user}
    !, are you...</h1>
    <div>
      <RaisedButton onClick={() => props.onChange('expert')}>
        {props.value === 'expert' && '*'}
        ...a total tech Geek and want to be in absolute control?
      </RaisedButton>
    </div>
    <div>
      <RaisedButton onClick={() => props.onChange('layman')}>
        {props.value === 'layman' && '*'}
        ...the laid-back type, who doesn't want any hassle.
      </RaisedButton>
    </div>
    <div>
      <FlatButton onClick={props.valid ? () =>
        props.openConfirmDialog(messageConfirm, 'Confirm', props.onSubmit)
        : () => { props.configSimpleDialog(messageSelect); props.showSimpleDialog() }}>
          Next!
      </FlatButton>
    </div>
    <div>
      <FlatButton onClick={() => { props.configSimpleDialog(messageWhy); props.showSimpleDialog() }}>
      WHY?
      </FlatButton>
    </div>
  </div>
}
UserType.propTypes = {
  value: React.PropTypes.string.isRequired,
  valid: React.PropTypes.bool.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
  openConfirmDialog: React.PropTypes.func,
  closeConfirmDialog: React.PropTypes.func,
  configSimpleDialog: React.PropTypes.func,
  showSimpleDialog: React.PropTypes.func,
  user: React.PropTypes.string
}

export default Radium(UserType)
