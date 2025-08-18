import { useNews } from "../../Context/NewsContext"

export const News = () => {

    const { featuredNews } = useNews();

    return (
        <div className="relative mt-4">
            {featuredNews.map((item, index) => (
                <figure key={index}>
                    <img 
                        className="" 
                        src={item.imageUrl} 
                    />
                    <figcaption>
                        <h2>{item.title}</h2>
                        <p>{item.teaser}</p>
                    </figcaption>
                </figure>
            ))}
        </div>
    )
}