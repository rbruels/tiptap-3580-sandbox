import { mergeAttributes, Node } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react'

import Component from './Component';

export default Node.create({
  name: 'reactComponent',

  group: 'block',

  atom: true,

  draggable: true,

  addAttributes() {
    return {
      type: {
        default: "user-input",
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: 'content-block',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['content-block', mergeAttributes(HTMLAttributes)]
  },

  addNodeView() {
    return ReactNodeViewRenderer(Component)
  },
})