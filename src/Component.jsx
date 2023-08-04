import { NodeViewWrapper } from '@tiptap/react'
import React from 'react'

const component = () => {
  return (
    <NodeViewWrapper className="content-block">
      <div className="wrapper">
        <div className="header">
          <div className="label" data-drag-handle draggable="true">
            oh hai
          </div>
        </div>
        <div className="content" contentEditable="true">   
        </div>
      </div>
    </NodeViewWrapper>
  )
}
export default component;