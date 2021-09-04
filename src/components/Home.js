import React, {useEffect, useState} from 'react';
import '../components/css/home.css'
import '../index.css'
import NewsCard from './NewsCard';
import Weather from './Weather';
import Todo from './Todo';
import Navbar from './Navbar';


function Home(){
    const [article, setArticle] = useState([]);

    useEffect(() => {
        const apiData = async () => {
            const api = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=a99b2e2583b64afc879864956c2c0794"
            const getData = await fetch(api);
            setTimeout(function () { }, 1000);
            const jsonData = await getData.json();
            setTimeout(function () { }, 1000);
            setArticle(jsonData.articles);
        }
        apiData();
    })

    return(
        <>
            <div className="mainContainer">
                <Navbar/>
                <div className="homeContainer">
                    <div className="newsBox">
                        <h1>Top headlines from TechCrunch</h1>
                        <div className="newsContainer">

                            {
                                (article)?(article.map((ele, idx) => {
                                    return (
                                        <div className="news" key={idx}>
                                            <NewsCard
                                                urlImage={ele.urlToImage}
                                                url={ele.url}
                                                title={ele.title}
                                            />
                                        </div>
                                    )
                                })):(
                                    <h1>Loading....</h1>
                                )
                            }
                        </div>
                    </div>
                    {/* <div className="childContainer">
                    <Weather/>
                    <Todo/>
                </div> */}
                </div>
            </div>
        </>
    )
}

export default Home;