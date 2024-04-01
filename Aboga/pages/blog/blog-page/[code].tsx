import Head from "next/head";
import Layout from "../../../components/general/layout/layout.component";
import BlogPageComponent from "../../../components/general/views/blogs/blog-page.component";
import { useState } from "react";

const Home = (props: {
    code: string,

}) => {
    const [titlePage, setTitlePage] = useState('')

    return (
        <>
            <Layout>
                <Head>
                    <title>{titlePage} ABOGA</title>
                </Head>
                <BlogPageComponent blogID={props.code} setTitlePage={setTitlePage}/>
            </Layout>
        </>
    )
}

export default Home

export async function getStaticPaths() {

    return {
        paths: [],
        fallback: 'blocking',
    }
}

export async function getStaticProps({params: {code: any}}: never) {
    return {
        props: {
            code:any,
        },
    }
}