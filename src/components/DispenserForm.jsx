import { useState } from "react";

const emptyForm = {
    name: '',
    type: '',
    capacity: '',
    image: '',
    description:'',
}

function DispenserForm({ addDispenser}) {
    const [formData, setFormData] = useState(emptyForm)

    function handleChange(event) {
        const { name, value }= event.target
        setFormData((currentData) => ({...currentData, [name]: value}))
    }

    function handleSubmit(event) {
        event.preventDefault()

        if (!formData.name.trim() || !formData.type.trim()) return

        addDispenser({
            ...formData,
            image:
               formData.image.trim() ||
              'https://images.unsplash.com/photo-1616622236995-cb00e537365e?auto=format&fit=crop&w=900&q=80',
            capacity: formData.capacity.trim() || 'Not provided',
            description: formData.description.trim() || 'No description added yet.',
        })

        setFormData(emptyForm)
    }
    const inputStyle =
       "w-full h-12 rounded-xl border border-gray-200 bg-gray-50 px-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-500 focus:bg-white transition-colors";

    return(
        <section className="my-10 rounded-2xl bg-white p-8 shadow-lg">
            <div className="section-heading">
                <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-1">Add something new</p>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">New  Dispenser</h2>
                </div>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                <label className="flex flex-col gap-2 text-sm font-semibold text-gray-700">
                    Dispenser name *
                    <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Modern dispenser"
                    required
                    className={inputStyle}
                    />
                </label>

                <label className="flex flex-col gap-2 text-sm font-semibold text-gray-700">
                    type *
                    <select 
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                    className={inputStyle}
                    >
                        <option value="">Choose a type</option>
                        <option value="Soap Dispenser">Soap Dispenser</option>
                        <option value="Hand Sanitizer Dispenser">Hand Sanitizer Dispenser</option>
                        <option value="Lotion Dispenser">Lotion Dispenser</option>
                        <option value="Automatic Dispenser">Automatic Dispenser</option>
                    </select>
                </label>

                <label>
          Capacity
          <input
            name="capacity"
            value={formData.capacity}
            onChange={handleChange}
            placeholder="500ml"
            className={inputStyle}
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-semibold text-gray-700">
          Image URL
          <input
            name="image"
            type="url"
            value={formData.image}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
            className={inputStyle}
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-semibold text-gray-700 md:col-span-2">
          Short description
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            placeholder="Describe the dispenser in one sentence."
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-500 focus:bg-white transition-colors resize-none"
          />
        </label>

        {formData.image && (
          <div className="md:col-span-2 flex justify-center">
            <img
              src={formData.image}
              alt="Preview"
              className="w-full max-w-xs h-48 object-cover rounded-xl border border-gray-200"
              onError={(e) => { e.target.style.display = 'none'; }}
              />
              </div>
        )}

        <button 
        type="submit"
        className="md:col-span-2 justify-self-start mt-2 h-12 px-8 rounded-xl bg-red-500 text-white font-bold hover:bg-red-600 transition-colors"
        >
          Add Dispenser
          </button>
      </form>
    </section>
  );
}

export default DispenserForm




        