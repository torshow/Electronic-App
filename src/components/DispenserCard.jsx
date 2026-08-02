function DispenserCard({dispenser}) {
return (
    <article className="dispenser-card">

    <img src={dispenser.image} alt={dispenser.name} />

    <div>
        <div> 
            <span>{dispenser.type}</span>
            <span>{dispenser.capacity}</span>
        </div>

        <h3>{dispenser.name}</h3>
        <p>{dispenser.description}</p>
    </div>

    </article>
)
}
export default DispenserCard;