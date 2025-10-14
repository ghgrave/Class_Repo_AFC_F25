import axios from 'axios';

const App =() =>{
    console.log("Process: ", process)

    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/now_playing',
        params: {language: 'en-US', page: '1'},
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.VITE_TMDB_API_TOKEN}`
        }
    };

    axios
        .request(options)
        .then(res => console.log(res.data))
        .catch(err => console.error(err));


    return (
        <>
            <h1>Landing Page</h1>
        </>
    )
}

export default App;