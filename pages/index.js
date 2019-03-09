import Link from 'next/link'
import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch'
import Prices from '../components/Prices'

const Post = props => (
    <li>
        <Link as={`/${props.slug}`} href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

const Index =  (props) => (
    <Layout>
    <div>
        <h2 className="card card-title">Bitcoin BitzPrice</h2>
        <Prices bpi={props.bpi} />
    </div>
    </Layout>
)

Index.getInitialProps = async function () {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    const data = await res.json()

    return {
        bpi: data.bpi
    }
}

export default Index