import React, { Component } from 'react'

class TemplateHTMLComponent extends React.Component {
    render() {
        return (
                <div dangerouslySetInnerHTML={{ __html: htmlFile}}>
        
                </div>
        );
        }
    }
export default Home