import React, {useEffect, useState} from "react";
import fs from 'fs';
import path from 'path';
import matter, {} from 'gray-matter';
import styles from "./styles.module.css";
import DetailPost from "../../../business/content/blogs/post/detail_post";
import Layout from "../../../business/container/general/layout/layout";

const BlogPost = (props: {
    frontMatter: { [key: string]: string },
    slug: string,
    content: string,
    posts_two: [{
        slug2: string,
        frontMatter2: { [key: string]: string }
    }],
}) => {
    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [desc, setDesc] = useState('')
    const [content, setContent] = useState('')
    const [slug, setSlug] = useState('')
    const [data, setData] = useState<Array<any>>([])
    useEffect(() => {
        setImage(props.frontMatter.cover_image)
        setTitle(props.frontMatter.title)
        setDate(props.frontMatter.date)
        setDesc(props.frontMatter.description)
        setContent(props.content)
        setSlug(props.slug)
        setData(props.posts_two)
    }, []);
    //console.log("la data: "+data)
    return (
        <Layout title={"Blog | Laura Nuñez"}
                description={"Deja que Laura Nuñez y su equipo de mujeres apasionadas resalten tu identidad única con el arte del maquillaje. Realza tu belleza en Cartagena, Colombia con soluciones de maquillaje personalizadas."}>
            <DetailPost image={image} title={title} date={date} description={desc} content={content} slug={slug}
                        props={data}/>
        </Layout>

    )

}

export default BlogPost;

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))

    const paths = files.filter(filename => filename.includes(".md")).map((filename) => ({
        params: {
            slug: filename.replace('.md', ''),
        },
    }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({params: {slug}}: never) {
    const markdownWithMeta = fs.readFileSync(
        path.join('posts', slug + '.md'),
        'utf-8'
    )

    const {data: frontMatter, content} = matter(markdownWithMeta)

    const files2 = fs.readdirSync(path.join('posts'))

    const posts_two = files2.filter(filename => filename.includes(".md")).map((filename) => {
        // Create slug
        const slug2 = filename.replace('.md', '')

        const markdownWithMeta = fs.readFileSync(
            path.join('posts', filename),
            'utf-8'
        )

        const {data: frontMatter2} = matter(markdownWithMeta)

        return {
            slug2,
            frontMatter2,
        }
    }).sort((a, b) => (
        new Date(b.frontMatter2.date).getTime() - new Date(a.frontMatter2.date).getTime()
    ));

    return {
        props: {
            frontMatter,
            slug,
            content,
            posts_two,
        },
    }
}
