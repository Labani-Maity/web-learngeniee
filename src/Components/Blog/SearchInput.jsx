import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';
import { useSearch } from '../../Contex/Search';

const SearchInput = () => {
  const [values, setValues] = useSearch();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.get(`https://restapinodejs.onrender.com/api/search/${values.keyword}`);
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    setValues({ ...values, keyword: e.target.value });
  };

  return (
    <>
      {/* <h3 className="sidebar-title">Search</h3> */}
      <div className="sidebar-item search-form">
        <form onSubmit={handleSubmit}>
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={values.keyword}
            onChange={handleInputChange}
          />
          <button type="submit">
          {loading ? 
          <MagnifyingGlass
          visible={true}
          height="33"
          width="33"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          // glassColor = '#c0efff'
          color = '#FFFFFF'
        />
          : <i className="icofont-search" />}
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchInput;
