type SelectProps = {
    value: string;
    setValue: (s: string) => void;
};

export const Select: React.FC<SelectProps> = ({ value, setValue }) => {
    return (
        <>
            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Select an option
            </label>
            <select
                id="countries"
                onChange={(e) => setValue(e.target.value)}
                value={value}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
                <option value="">All</option>
                <option value="Male">Males Only</option>
                <option value="Female">Females Only</option>
            </select>
        </>
    );
};
