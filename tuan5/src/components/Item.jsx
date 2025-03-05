export default function Item({id , name , image}) {
    return (
        <div>
            <span>{id}</span>
            <p>{name}</p>
            <img src="{image}" alt="" />
        </div>
    );
    
}