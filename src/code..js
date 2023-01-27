import React, { Component } from 'react'

import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dark, tomorrow, atomDark,darcula,vscDarkPlus,vs,
holiTheme,nightOwl,a11yDark,duotoneForest,lucario, duotoneDark, oneDark, oneLight
} from 'react-syntax-highlighter/dist/esm/styles/prism'


export class code extends Component {
     constructor(props) {
    super(props);
    this.state = {
    
      isDark: false,
    
    };
  }

  
  render() {

      const path = '${path.join(__dirname'
     const Darktheme = this.state.isDark
    return (
      <div style={{}} className="">
  
  <ReactMarkdown
//  className="pl-3"
    children={
      `Here is some JavaScript code:
  
  ~~~py
 hh
  ~~~


  `}
    components={{
      code({node, inline, className, children, ...props}) {
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
          <SyntaxHighlighter
            children={String(children).replace(/\n$/, '')}
            style={darcula}
            //tomorrow, atomDark,darcula,vscDarkPlus,vs
            //holiTheme,nightOwl,a11yDark,duotoneForest,lucario
            
            language={"js"}
            PreTag="div"
            {...props}
          />
        ) : (
          <code className={className} {...props}>
            {children}
          </code>
        )
      }
    }}
  />
</div>
    )
  }
}

export default code;