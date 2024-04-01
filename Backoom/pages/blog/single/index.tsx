import type {NextPage} from 'next'
import Layout from "../../../business/container/general/layout/layout";
import Banner from "../../../business/container/general/views/cotizar/banner/banner";
import SingleBlog from "../../../business/container/general/views/blog/singleBlog/singleBlog";
import blog from "../../../services/blog.json"
import Head from "next/head";


const Home: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>Blog - Backoom</title>
                <meta name="description" content="Single Blog Page - Backoom" />
            </Head>
            <Banner title="Blogs" content1="Blog " content2={blog.que_es_tornillo.title}/>
            <SingleBlog />
        </Layout>
    )
}

export default Home
