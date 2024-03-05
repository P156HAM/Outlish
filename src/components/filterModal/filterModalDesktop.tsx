import {
  Accordion,
  AccordionItem,
  Checkbox,
  CheckboxGroup,
  Divider,
  Slider,
  SliderValue,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { FilterState } from "../../constants/types";
import { useDispatch, useSelector } from "react-redux";
import { updateFilters } from "../../redux/actions/actions";
import { RootState } from "../../redux/store";

interface FilterModalDesktopProps {
  applyFilters: (filters: any) => void;
}

const filterState = useSelector((state: RootState) => state.filter);

useEffect(() => {
  console.log(filterState);
}, [filterState]);

function FilterModalDesktop({ applyFilters }: FilterModalDesktopProps) {
  const [filters, setFilters] = useState<FilterState>({
    priceRange: { min: 100, max: 500 },
    company: "",
  });
  const dispatch = useDispatch();
  const [selectedCompanies, setSelectedCompanies] = React.useState<string[]>(
    []
  );
  const handlePriceChange = (value: SliderValue) => {
    if (Array.isArray(value) && value.length === 2) {
      const [min, max] = value;
      setFilters((prevFilters) => ({
        ...prevFilters,
        priceRange: { min, max },
      }));
    } else if (typeof value === "number") {
      setFilters((prevFilters) => {
        const currentPriceRange = prevFilters.priceRange || {
          min: 0,
          max: 1000,
        };
        const isUpdatingMin = value < currentPriceRange.max;
        return {
          ...prevFilters,
          priceRange: {
            min: isUpdatingMin ? value : currentPriceRange.min,
            max: isUpdatingMin ? currentPriceRange.max : value,
          },
        };
      });
    }

    handleApplyFilters();
  };
  const handleApplyFilters = () => {
    dispatch(updateFilters(filters));
  };

  const handleCompanyChange = (selected: string[]) => {
    setSelectedCompanies(selected);
    setFilters((prevFilters) => ({
      ...prevFilters,
      company: selected.join(","),
    }));
    // Apply filters immediately
    applyFilters({ ...filters, company: selectedCompanies });
    handleApplyFilters();
  };

  const companies: string[] = [
    "H&M",
    "Rusta",
    "Almondy",
    "Gina Tricot",
    "Kappahl",
    "Lindex",
    "Jysk",
    "Jotex",
    "Lager 157",
    "Newport",
    "Santa Maria",
    "Hellman's",
    "OLW",
    "Paulíns",
    "Sportshopen",
  ];

  return (
    <aside className="p-1 hidden lg:flex xl:flex 2xl:flex w-6/7 flex-col">
      <Accordion className="">
        <AccordionItem
          key="1"
          aria-label="Filtrera"
          title="Filtrera"
          className="p-0"
        >
          <Slider
            label="Pris"
            step={1}
            minValue={0}
            maxValue={1000}
            defaultValue={[100, 500]}
            formatOptions={{ style: "currency", currency: "SEK" }}
            className="max-w-md min-h-14 py-2"
            onChange={handlePriceChange}
            onChangeEnd={handlePriceChange}
          />
          <Divider className="my-2" />
          {/* Company Filter */}

          <Accordion className="p-0" showDivider={true}>
            <AccordionItem
              key="1"
              aria-label="Företag"
              title="Företag"
              className="p-0"
            >
              <CheckboxGroup
                defaultValue={selectedCompanies}
                onValueChange={handleCompanyChange}
                className="p-1"
              >
                {companies.map((company, index) => (
                  <Checkbox key={index} value={company}>
                    {company}
                  </Checkbox>
                ))}
              </CheckboxGroup>
            </AccordionItem>
          </Accordion>
        </AccordionItem>
      </Accordion>
    </aside>
  );
}

export default FilterModalDesktop;