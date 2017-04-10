import React from 'react'
import Radium from 'radium'
import ContentCreate from 'material-ui/svg-icons/content/create'
import ContentAddCircle from 'material-ui/svg-icons/content/add-circle'
import {theme} from 'styles'

import {
  List,
  IconButton,
  Divider
} from 'material-ui'

const STYLES = {
  divider: {
    width: '150%'
  },
  addBtn: {
    width: '40px',
    boxShadow: 'none',
    padding: '6px',
    display: 'inline-block',
    verticalAlign: 'center',
    color: theme.jolocom.gray4,
    marginLeft: '20px'
  },
  iconCreate: {
    height: '30',
    width: '30',
    backgroundColor: theme.jolocom.gray4,
    borderRadius: '20',
    boxShadow: '3px 3px 3px #c3c6cc',
    borderColor: theme.jolocom.gray2,
    borderWidth: '1px',
    borderStyle: 'solid',
    color: theme.palette.accent1Color,
    padding: '5px'
  },
  iconAdd: {
    height: '40',
    width: '40',
    color: theme.palette.accent1Color,
    backgroundColor: theme.jolocom.gray4
  },
  infoHeader: {
    textAlign: 'left',
    color: theme.palette.textColor,
    width: '150px',
    marginBottom: '15px',
    display: 'inline-block'
  },
  item: {
    alignItems: 'center',
    marginLeft: '16px',
    display: 'inline-block',
    verticalAlign: 'top',
    width: '70%'
  }

}
const PlusMenu = (props) => {
  return (
    <div style={props.style}>
      <List>
        <div style={STYLES.item}>
          <div style={STYLES.infoHeader}>
          {props.name}
          </div>
          <Divider style={STYLES.divider} />
        </div>
        <div style={STYLES.addBtn}>
          <IconButton
            onClick={props.goToManagement}
            containerElement="label"
            style={STYLES.addBtn}
            iconStyle={props.choice ? STYLES.iconCreate : STYLES.iconAdd}>
            {props.choice
            ? <ContentCreate color={STYLES.iconCreate.color} />
            : <ContentAddCircle color={STYLES.iconAdd.color} />}
          </IconButton>
        </div>
      </List>
      {props.children}
    </div>
  )
}

PlusMenu.propTypes = {
  name: React.PropTypes.any,
  children: React.PropTypes.node,
  style: React.PropTypes.object,
  goToManagement: React.PropTypes.func.isRequired,
  choice: React.PropTypes.bool
}

export default Radium(PlusMenu)
