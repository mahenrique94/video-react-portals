import ReactDOM from 'react-dom'

const Home = ({ children }) => ReactDOM.createPortal(
    children,
    document.getElementById('another')
)

export default Home
