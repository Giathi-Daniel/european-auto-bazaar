
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

interface SearchFiltersProps {
  onMakeChange: (value: string) => void;
  onPriceRangeChange: (value: string) => void;
  onYearChange: (value: string) => void;
}

const SearchFilters = ({ onMakeChange, onPriceRangeChange, onYearChange }: SearchFiltersProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
      <Select onValueChange={onMakeChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select Make" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="bmw">BMW</SelectItem>
          <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
          <SelectItem value="audi">Audi</SelectItem>
          <SelectItem value="toyota">Toyota</SelectItem>
          <SelectItem value="honda">Honda</SelectItem>
        </SelectContent>
      </Select>

      <Select onValueChange={onPriceRangeChange}>
        <SelectTrigger>
          <SelectValue placeholder="Price Range" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="0-1000000">Up to 1M KES</SelectItem>
          <SelectItem value="1000000-2000000">1M - 2M KES</SelectItem>
          <SelectItem value="2000000-5000000">2M - 5M KES</SelectItem>
          <SelectItem value="5000000+">5M+ KES</SelectItem>
        </SelectContent>
      </Select>

      <Select onValueChange={onYearChange}>
        <SelectTrigger>
          <SelectValue placeholder="Year" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="2020+">2020 and newer</SelectItem>
          <SelectItem value="2015-2019">2015 - 2019</SelectItem>
          <SelectItem value="2010-2014">2010 - 2014</SelectItem>
          <SelectItem value="2000-2009">2000 - 2009</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SearchFilters;
