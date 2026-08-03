import DispenserCard from './DispenserCard';

function DispenserList({dispensers}) {
    if (dispensers.length === 0) {
        return <p className="text-center text-gray-500 py-12"> NO matching dispensers</p>
}

    return (
        <div className="max-w-4xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {dispensers.map((dispenser) => (
                <DispenserCard key={dispenser.id} dispenser={dispenser} />
            ))}
        </div>
    );
}
 export default DispenserList;