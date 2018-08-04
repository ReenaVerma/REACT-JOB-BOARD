import React from 'react';

const HeaderForm = ({ handleChange, handleSubmit, handleChangeLocation }) => (

  <section className='hero homepage'>
    <div className='container'>
      <h1 className='title has-text-white'>USA Creative City</h1>
      <h2 className='title has-text-white'>Start your job search here!</h2>

      <form className="level-item" onSubmit={handleSubmit}>
        <div className="inputstyle field has-addons">
          <div className="control ">
            <input className="input"
              type="text"
              placeholder="Software Engineer..."
              onChange={handleChange}
            />
          </div>
          <div className="control ">
            <input className="input"
              type="text"
              placeholder="city"
              onChange={handleChangeLocation}
            />
          </div>
          <div className="control">
            <button className="button is-warning is-large">search jobs</button>
          </div>
        </div>
      </form>


    </div>
  </section>
);

export default HeaderForm;
