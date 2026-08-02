import DispenserCard from './DispenserCard';

function DispenserList({dispensers}) {
    if (dispensers.length === 0) {
        return <p> NO matching dispensers</p>
}

    return (
        <div className="dispenser-list">
            {dispensers.map((dispenser) => (
                <DispenserCard key={dispenser.id} dispenser={dispenser} />
            ))}
        </div>
    );
}
 export default DispenserList;