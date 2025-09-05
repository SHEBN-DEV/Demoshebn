import InputField from "./inputField";

const PrivacySection = ({ title, value, showForm, toggleForm, fields, errors, register }) => (
    <div className="bg-[#1C1D20] rounded-2xl p-6 space-y-2">
      {!showForm ? (
        <>
          <p className="text-lg font-semibold">{title}</p>
          <p className="text-base text-gray-400">{value}</p>
          <button
            type="button"
            onClick={toggleForm}
            className="text-lg hover:text-[#ff29d7] hover:underline transition-colors duration-200 cursor-pointer"
          >
            CHANGE {title.toUpperCase()}
          </button>
        </>
      ) : (
        <>
          {fields.map((field) => (
            <InputField
              key={field.name}
              label={field.label}
              name={field.name}
              type={field.type || "text"}
              register={register}
              rules={field.rules}
              error={errors[field.name]}
            />
          ))}
          <button
            type="submit"
            className="text-lg hover:text-[#ff29d7] hover:underline transition-colors duration-200 cursor-pointer"
          >
            SAVE {title.toUpperCase()}
          </button>
        </>
      )}
    </div>
  );

export default PrivacySection;   