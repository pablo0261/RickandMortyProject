import Cards from '../components/Cards/Cards';


const Home = (props) => {
    return (
    <div>
        <Cards characters = {characters} onClose = {onClose}/>
    </div>
    )
};

export default Home;