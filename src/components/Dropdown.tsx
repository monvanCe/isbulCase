import React, { useEffect, useState } from 'react';
import { DropDownOptions } from '../FakeDatas/DropDownOptions';
import { caretUp } from '../assets/caretUp';
import { caretDown } from '../assets/caretDown';

export const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selected, setSelected] = useState<number | null>(null);

  const filteredItems = DropDownOptions.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  const arrow = isOpen ? caretUp : caretDown;

  const borderColor =
    isOpen || selected ? 'border-lightBlue' : 'border-gray-300';

  return (
    <div
      className={`relative w-[166px] border rounded-md flex ${borderColor} cursor-pointer`}
    >
      <input
        type="text"
        placeholder={'Ara...'}
        className="w-32 px-4 py-2 outline-none text-lightBlue cursor-pointer text-sm rounded-md"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={selected ? DropDownOptions[selected] + searchTerm : searchTerm}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
      />

      <img src={arrow} alt="arrow" />

      {isOpen && (
        <div className="absolute right-0 mt-2 w-[166px] rounded-md shadow-lg border bg-white top-8 h-[200px] overflow-y-scroll overflow-x-hidden">
          <ul className="py-1">
            {filteredItems.map((el, i: number) => (
              <li
                onClick={() => setSelected(i)}
                key={i}
                className="px-5 py-2 hover:bg-blue-600 cursor-pointer hover:text-white text-sm"
              >
                {el}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
