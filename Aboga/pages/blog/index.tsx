import React from 'react';
import Layout from "../../components/general/layout/layout.component";
import Head from 'next/head';
import AllBlogsComponent from '../../components/general/views/blogs/all-blogs.component';

const Blog = () => {
    return (
        <>
            <Layout>
                <Head>
                    <title>Blogs - ABOGA</title>
                </Head>
                {/* <h1 style={{textAlign: 'center', fontSize: '30px', fontWeight: 900, color: '#0070D4'}}>Blog - Aboga</h1>
                <iframe src='https://widgets.sociablekit.com/linkedin-profile-posts/iframe/160880' frameBorder='0'
                        width='100%' height='800'></iframe> */}
                <AllBlogsComponent/>
            </Layout>
        </>
    );
};

export default Blog;
