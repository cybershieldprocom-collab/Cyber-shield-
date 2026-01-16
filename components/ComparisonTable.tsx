
import React from 'react';
import { Laptop } from '../types';

interface ComparisonTableProps {
  laptops: Laptop[];
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ laptops }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-xl border border-slate-200">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-200">
            <th className="p-4 font-semibold text-slate-900">Specs</th>
            {laptops.map(laptop => (
              <th key={laptop.id} className="p-4 font-bold text-indigo-600 min-w-[200px] text-center">
                {laptop.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          <tr>
            <td className="p-4 font-medium text-slate-600">CPU</td>
            {laptops.map(laptop => (
              <td key={laptop.id} className="p-4 text-slate-700 text-center">{laptop.specs.cpu}</td>
            ))}
          </tr>
          <tr>
            <td className="p-4 font-medium text-slate-600">RAM</td>
            {laptops.map(laptop => (
              <td key={laptop.id} className="p-4 text-slate-700 text-center">{laptop.specs.ram}</td>
            ))}
          </tr>
          <tr>
            <td className="p-4 font-medium text-slate-600">Storage</td>
            {laptops.map(laptop => (
              <td key={laptop.id} className="p-4 text-slate-700 text-center">{laptop.specs.storage}</td>
            ))}
          </tr>
          <tr>
            <td className="p-4 font-medium text-slate-600">Display</td>
            {laptops.map(laptop => (
              <td key={laptop.id} className="p-4 text-slate-700 text-center">{laptop.specs.display}</td>
            ))}
          </tr>
          <tr>
            <td className="p-4 font-medium text-slate-600">Price</td>
            {laptops.map(laptop => (
              <td key={laptop.id} className="p-4 font-bold text-slate-900 text-center">${laptop.price}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
