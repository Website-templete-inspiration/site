import Document, {Html, Head, Main, NextScript} from 'next/document'

class Site extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100;300;400;600&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default Site