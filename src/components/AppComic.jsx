
export default function AppComic({ comic }) {
    return (

        <div className="col">
            <img className="grid-img img-fluid"
                src={comic.thumb} alt={comic.title} />
            <span className="text-white grid-text" >{comic.series}</span>
        </div>
    );

}