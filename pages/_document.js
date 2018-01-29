import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        const { html, head, errorHtml, chunks } = renderPage()
        const styles = flush()
        return { html, head, errorHtml, chunks, styles }
    }

    render() {
        return (
            <html>
            <Head>
                <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"/>
                <link rel="stylesheet" href="https://cdn.bootcss.com/normalize/7.0.0/normalize.min.css"/>
                <link rel="stylesheet" href="/static/styles/main.css"/>
                <script src="https://cdn.bootcss.com/babel-polyfill/6.26.0/polyfill.min.js"></script>
            </Head>
            <body>
                {this.props.customValue}
                <Main />
                <NextScript />
            </body>
            </html>
        )
    }
}