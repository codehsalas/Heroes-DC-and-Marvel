import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components';
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const { q = ''} = queryString.parse(location.search)
  const heroes = getHeroesByName(q)

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && heroes.length === 0;

    const { searchText, onInputChange } = useForm({
      searchText: q
    })

  const onSeachSubmit = (event) => {
      event.preventDefault();
        console.log({searchText})
          //if( searchText.trim().length <= 1 ) return;
        navigate(`?q=${ searchText }`)



  }


  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching...</h4>
          <hr />
          <form onSubmit={onSeachSubmit}>
            <div className="d-flex align-items-center justify-content-center">
              <input
                type="text"
                placeholder="Search a hero"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={searchText}
                onChange={onInputChange}
              />
              <button className="btn btn-primary mx-2">Search</button>
            </div>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div
            className="alert alert-primary"
            style={{ display: showSearch ? "" : "none" }}
          >
            Search a hero
          </div>

          <div className="alert alert-danger"
            style={{ display: showError ? "" : 'none' }}
          >
            No Hero witdh <b>{q}</b>
          </div>

          {
            heroes.map((hero) => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }
        </div>
      </div>
    </>
  );
}
