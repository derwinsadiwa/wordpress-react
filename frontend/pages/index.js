import Layout from "../components/Header.js"
import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper.js";
import Menu from "../components/Menu.js";
import { Config } from "../config.js";

const headerImageStyle = {
    marginTop: 50,
    marginBottom: 50
};

class Index extends Component {
    static async getInitialProps(context) {
        const pageRes = await fetch(
            `${Config.apiUrl}/wp-json/postlight/v1/page?slug=welcome`
        );
        const page = await pageRes.json();
        const postsRes = await fetch(
            `${Config.apiUrl}/wp-json/wp/v2/deals`
        );
        const posts = await postsRes.json();
        const pagesRes = await fetch(
            `${Config.apiUrl}/wp-json/wp/v2/pages?_embed`
        );
        const pages = await pagesRes.json();
        return { page, posts, pages };
    }

    render() {
        const posts = this.props.posts.map((post, index) => {
            return (
                <ul key={index}>
                    <li>
                        <Link
                            as={`/post/${post.slug}`}
                            href={`/post?slug=${post.slug}&apiRoute=post`}
                        >
                            <a><h2>{post.title.rendered}</h2></a>
                        </Link>
                        {  
                            post.acf.products.map((data, num) => {
                                return (
                                    <div key={num}>
                                        <p><strong>Badge Text:</strong> { data.badge_text }</p>
                                        <p><strong>Description Text:</strong> { data.description_text }</p>
                                        <p><strong>Wildcard Text:</strong> { data.wildcard_text }</p>
                                        <p><strong>Product Image</strong> <img src={ data.product_image.url } alt="product"/></p>
                                        <p><strong>Brand Logo Image</strong> <img src={ data.brand_logo.url } alt="brand logo"/></p>
                                        <p><strong>Promo Ends:</strong> { data.promo_ends }</p>
                                        <hr/>
                                    </div>
                                )
                            })
                        }
                    </li>
                </ul>
            );
        });
        const pages = this.props.pages.map((page, index) => {
            return (
                <ul key={index}>
                    <li>
                        <Link
                            as={`/page/${page.slug}`}
                            href={`/post?slug=${page.slug}&apiRoute=page`}
                        >
                            <a>{page.title.rendered}</a>
                        </Link>
                    </li>
                </ul>
            );
        });
        return (
            <div>
                <Layout />
                {posts}
            </div>
        );
    }
}

export default PageWrapper(Index);
