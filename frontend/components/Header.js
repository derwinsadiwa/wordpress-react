import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import Menu from "./Menu.js";
import { Config } from "../config.js";
import stylesheet from '../src/styles/style.scss'

class Header extends Component {
    constructor() {
        super();
    }

    render() {

        return (
            <div>
                <Head>
                    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                    <meta name="description" content="Best deals online for auto parts and more! Save a lot of money from our best deals online! Great deals await our loyal customers. Get deep discounts from our trusted brands!"></meta>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <meta charSet="utf-8" />
                    <title>
                        Daily Deals | Deep Discount, Manufacturer Coupons | Auto Parts Warehouse
                    </title>
                </Head>
            </div>
        );
    }
}

export default Header;
