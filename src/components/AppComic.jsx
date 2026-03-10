
export default function AppComic({ thumb, title, series }) {

    return (

        <div className="col">
            <img className="grid-img img-fluid"
                src={thumb} alt={title} />
            <span className="text-white grid-text" >{series}</span>
        </div>
    );

}