function DispenserCard({dispenser}) {
return (
    <article className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">

    <img src={dispenser.image} alt={dispenser.name}
    className="w-full h-56 object-cover"
     />

    <div className="p-5">
        <div className="flex gap-2 mb-3"> 
            <span className="text-xs font-semibold uppercase tracking-wide bg-red-50 text-red-500 px-3 py-1 rounded-full">{dispenser.type}</span>
            <span className="text-xs font-semibold uppercase tracking-wide bg-gray-100 text-gray-600 px-3 py-1 rounded-full">{dispenser.capacity}</span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-1">{dispenser.name}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{dispenser.description}</p>
    </div>

    </article>
)
}
export default DispenserCard;