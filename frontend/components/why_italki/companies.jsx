import React from 'react';
import Company from './company';

const Companies = props => {
    return (
        <ul className="homepage-companies">
            <Company 
                imgUrl="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/bbc.778e046f.svg"
                alt="bbc"
            />
            <Company 
                imgUrl="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/business.c2af4635.svg"
                alt="business"
            />
            <Company 
                imgUrl="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/theguardian.770a9aa8.svg"
                alt="theguardian"
            />
            <Company 
                imgUrl="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/tc.a16a0112.svg"
                alt="tc"
            />
            <Company 
                imgUrl="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/quartz.e616e10a.svg"
                alt="quartz"
            />
            <Company 
                imgUrl="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/lifehacker-new.17be92a8.svg"
                alt="lifehacker"
            />
            <Company 
                imgUrl="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/post.b5d4953a.svg"
                alt="post"
            />
        </ul>
    )
}

export default Companies;