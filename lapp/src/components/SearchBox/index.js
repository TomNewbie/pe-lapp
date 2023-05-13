import React, { useState } from "react";
import { AutoComplete, Input } from "antd";
import { useAPI } from "../../hooks/useAPI";
import { Errorpage } from "../../pages/common";
import { Link } from "react-router-dom";

const SearchComponent = () => {
  const { data: courses, pending, error } = useAPI({ path: "/api/courses" });
  const coursesName = courses?.map((course) => ({
    id: course._id,
    lecturer: course.lecturer_name,
    name: course.name,
    link: "/course/" + course._id,
  }));
  const [options, setOptions] = useState([]);

  if (error) {
    return <Errorpage />;
  }

  if (pending) {
    return <div>Loading...</div>;
  }

  const searchResult = (query) => {
    const filteredOptions = coursesName.filter((course) =>
      course.name.toLowerCase().includes(query.toLowerCase())
    );

    return filteredOptions.map((option) => ({
      value: option.id,
      label: (
        <Link to={option.link}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{option.name}</span>
            <span>{option.id}</span>
          </div>
        </Link>
      ),
    }));
  };

  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value, option) => {
    console.log("onSelect", value);
  };

  return (
    <div>
      <AutoComplete
        dropdownMatchSelectWidth={400}
        style={{ width: 400 }}
        options={options}
        onSelect={onSelect}
        onSearch={handleSearch}
      >
        <Input.Search
          size="large"
          placeholder="Search courses"
          style={{ fontFamily: "Dongle", fontSize: "40px" }}
          className="bg-red-200 border-none rounded-xl"
        />
      </AutoComplete>
    </div>
  );
};

export default SearchComponent;
