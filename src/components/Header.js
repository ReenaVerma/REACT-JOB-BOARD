import React from 'react';

const Header = () => (

  <section className='hero homepage hero-head is-mobile'>
    <div className='hero-body'>
      <div className='container hero-margin'>
        <div className='columns is-centered'>
          <div className='is-half has-text-centered homepagebox'>
            <h1 className='title has-text-white'>USA Creative City</h1>
            <h2 className='title has-text-white'>Start your job search here!</h2>

            <form className="level-item">
              <div className="inputstyle field has-addons">
                <div className="control ">
                  <input className="input is-large"
                    type="text"
                    placeholder="Software Engineer..."
                    // value={newTodo}
                  />
                </div>
                <div className="control">
                  <button className="button is-warning is-large">search now</button>
                </div>
              </div>

            </form>
          </div>


        </div>
      </div>
    </div>
  </section>
);

export default Header;
