"use client";

const InputField = ({label, type = "text", name, placeholder = "", register, rules, error, options = [] }) => (
    <div className="w-full flex flex-col justify-center items-start">
        <label htmlFor={name} className="w-full bg-[#2d2e33] rounded-t-2xl p-1 pl-4 text-sm">{label}</label>
        {type === "select" ? (
            <select name={name} id={name} {...register(name, rules)} 
            className={`w-full bg-[#2d2e33] rounded-b-2xl p-3 outline-0
            ${ error ? "border border-[#ff29d7]" : "" }`}>
                <option value="">{placeholder || "Selecciona una opción"}</option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        ) : (
            <input type={type} name={name} id={name} placeholder={placeholder} {...register(name, rules)} 
            className={`w-full bg-[#2d2e33] rounded-b-2xl p-3 outline-0
            ${ error ? "border border-[#ff29d7]" : "" }`} />
        )}
        {error && <span className="text-[#ff29d7] text-sm mt-1">{error.message}</span>}
    </div>
);

export default InputField;