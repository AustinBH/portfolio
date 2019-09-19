import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import { blogs } from './blogs/BlogHolder'
import CodeBlock from './blogs/CodeBlock'

const BlogPost = props => {

    const findPost = () => {
        let postNum = props.match.url.slice(-1)
        return <ReactMarkdown source={blogs[postNum-1].text} renderers={{code: CodeBlock}}/>
    }

    return <>
        {findPost()}
    </>
}

export default BlogPost;