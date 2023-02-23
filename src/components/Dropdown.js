import { useState } from 'react';

const Dropdown = ({ options }) => {
  const renderedOptions = options.map((option) => {
    return <div key={option.value}>{option.label}</div>;
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={handleClick}>Select a color</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
};

export default Dropdown;
