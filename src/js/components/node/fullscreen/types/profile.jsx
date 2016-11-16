import React from 'react'
import Reflux from 'reflux'
import Radium from 'radium'

import Utils from 'lib/util'

import NodeStore from 'stores/node'
import GenericFullScreen from '../generic-fullscreen'

import {
  FontIcon,
  List, ListItem, Divider
} from 'material-ui'

import PinnedStore from 'stores/pinned'

let ProfileNode = React.createClass({

  mixins: [
    Reflux.listenTo(PinnedStore, 'onUpdatePinned'),
    Reflux.connect(NodeStore, 'node')
  ],

  propTypes: {
    state: React.PropTypes.object, /* @TODO fix this */
    node: React.PropTypes.object,
    onClose: React.PropTypes.func
  },

  contextTypes: {
    history: React.PropTypes.any,
    profile: React.PropTypes.object,
    account: React.PropTypes.object,
    muiTheme: React.PropTypes.object
  },

  componentWillMount() {
    this.onUpdatePinned()
  },

  onUpdatePinned() {
    const node = this.getNode()

    if (node) {
      this.setState({
        pinned: PinnedStore.isPinned(node.uri)
      })
    }
  },

  getStyles() {
    return {
    }
  },

  getNode() {
    if (this.props.state) {
      return this.props.state.activeNode // TODO temp fix
    } else {
      return this.props.node
    }
  },

  render() {
    let styles = this.getStyles()
    let {account} = this.context
    let {
      name,
      familyName,
      description,
      email,
      uri,
      img
    } = this.getNode()

    const isMe = account.webId === uri

    if (name && familyName) {
      name = `${name} ${familyName}`
    }

    let backgroundImg = img ? `url(${Utils.uriToProxied(img)})` : 'none'

    let fabItems = []
    let menuItems = []

    if (!isMe) {
      if (this.props.state.center.isOwnedByUser &&
        this.getNode().rank &&
        this.getNode().rank === 'neighbour') {
        menuItems.push('disconnect')
      } else {
        fabItems.push('connect')
      }
      fabItems.push('chat')
    }

    if (isMe) {
      menuItems.push('edit')
    }
    menuItems.push('copyUrl')

    return (
      <GenericFullScreen
        title={name}
        copyToClipboardText={uri}
        backgroundImg={backgroundImg}
        headerColor={'#829abe'}
        fabItems={fabItems}
        menuItems={menuItems}
        {...this.props}
      >
        <List style={styles.list}>
          {description && (
            <div>
              <ListItem
                leftIcon={
                  <FontIcon color={'#9ba0aa'}
                    className="material-icons">info</FontIcon>
                }
                primaryText={description}
              />
              <Divider inset />
            </div>
          )}
          {email && (
            <ListItem
              leftIcon={
                <FontIcon color={'#9ba0aa'}
                  className="material-icons">email</FontIcon>}
              primaryText={email}
              secondaryText="Personal"
            />
          )}
        </List>
      </GenericFullScreen>
    )
  }
})

export default Radium(ProfileNode)
