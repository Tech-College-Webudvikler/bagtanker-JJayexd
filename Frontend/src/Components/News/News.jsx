import { useNews } from "../../Context/NewsContext"

export const News = () => {

    const { featuredNews } = useNews();

    return (
        <div className="relative mt-4">
            <h2 className="font-bold text-2xl ml-1 my-4">Nyheder</h2>
                <div className="ml-1">
                    {featuredNews.map((item, index) => (
                        <figure className="my-4" key={index}>
                            <img 
                                className="" 
                                src={item.imageUrl} 
                            />
                            <figcaption>
                                <h2 className="font-bold text-l">{item.title}</h2>
                                <p>{item.teaser}</p>
                            </figcaption>
                        </figure>
                    ))}
                </div>
        </div>
    )
}