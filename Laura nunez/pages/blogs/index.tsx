import React, {useEffect, useState} from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../../business/container/general/layout/layout";
import BlogsPg from "../../business/content/blogs/blogs";
import config from "../../infrastructure/config";
import styles from "./styles.module.css"
import ReactGA from "react-ga4";

ReactGA.send({ hitType: "pageview", page: "/blog-page", title: "Page: Blogs" });
const Blogs = (props: {
    posts: [{
        slug: string,
        frontMatter: { [key: string]: string }
    }]
}) => {

    const [showChild, setShowChild] = useState(false);
    const [data, setData] = useState<Array<any>>([])
    useEffect(() => {
        setShowChild(true);
        setData(props.posts)
    }, []);

    if (!showChild) {
        return null;
    }
    const clientid = config.GOOGLE_CLIENT_ID as string;
    //console.log(data)
    return (
        <Layout title={"Pagina no disponible"} description={"Deja que Laura Nuñez y su equipo de mujeres apasionadas resalten tu identidad única con el arte del maquillaje. Realza tu belleza en Cartagena, Colombia con soluciones de maquillaje personalizadas."}>
            <div className={styles.noFound}>
            <h1>Página no disponible</h1>
            </div>
            {/*<Head>*/}
            {/*    <meta name="description" content="Blog Laura Nuñez" />*/}
            {/*</Head>*/}
            {/*<BlogsPg props={data} />*/}
        </Layout>
    )
}

export async function getStaticProps() {
    // Get files from the post dir
    const files = fs.readdirSync(path.join('posts'))

    const posts = files.filter(filename => filename.includes(".md")).map((filename) => {
        // Create slug
        const slug = filename.replace('.md', '')

        const markdownWithMeta = fs.readFileSync(
            path.join('posts', filename),
            'utf-8'
        )

        const {data: frontMatter} = matter(markdownWithMeta)

        return {
            slug,
            frontMatter,
        }
    }).sort((a, b) => (
        new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime()
    ));

    return {
        props: {
            posts,
        },
    }
}

export default Blogs
