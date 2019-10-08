import React from 'react';
import { blogs } from './blogs/BlogHolder';
import { Card, Header, Button } from 'semantic-ui-react';

const BlogPreview = props => {
    return <>
        {blogs.reverse().map((blog, index) => {
            return <Card key={index} className='blog-preview'>
                <Card.Header>
                    <Header as='h4'>
                        {blog.title}
                    </Header>
                </Card.Header>
                <Card.Description>
                    {blog.preview}
                </Card.Description>
                <Card.Content extra>
                    <Button onClick={() => props.handleOnClick(index)} color='vk' content='See More'/>
                </Card.Content>
            </Card>
        })}
    </>
}

export default BlogPreview;