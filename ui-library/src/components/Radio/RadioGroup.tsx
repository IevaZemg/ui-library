import React from 'react';
import { Radio } from './Radio';

interface Option {
  label: string;
  value: string;
}

interface RadioGroupProps {
  name: string;
  options: Option[];
  onChange: (value: string) => void;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ name, options, onChange }) => (
  <div>
    {options.map((opt) => (
      <Radio
        key={opt.value}
        name={name}
        value={opt.value}
        label={opt.label}
        onChange={(e) => onChange(e.target.value)}
      />
    ))}
  </div>
);