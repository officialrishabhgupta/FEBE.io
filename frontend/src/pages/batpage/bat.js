import React,{useEffect, useState} from "react";
import Bat from "../../components/batting/batting";
import BatHeader from "../../components/batheader/batheader";
import './bat.scss';

const BatPage=()=> {
  const [state, setState] = useState([]);
  const [search, setSearch] = useState('');

  const getData = async ()=>{
    const response = await fetch("/bat");
    const data = await response.json();
    setState(data);
  }

  useEffect(()=>{
    getData();
  },[])

  //sort
  // const sortBy = state.sort((a,b) => a.Runs > b.Runs ? 1:-1);
  // console.log(sortBy);

  //filter
  const filterBy21 = () => setState(state => state.filter(item => item.Runs > 21));
  const filterBy50 = () => setState(state => state.filter(item => item.Runs > 50));
  const filterBy100 = () => setState(state => state.filter(item => item.Runs > 100));

  //search
  const handleChange = event => {
    setSearch(event.target.value);
  };

  const filteredData = state.filter(item =>
    item.Ground.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="stats-app">
      <h1>Sachin Tendulkar Batting Stats</h1>
      <div className="stats-search">
      <h2 className="stats-text">Search Ground</h2>
      <form>
        <input
          className='stats-input'
          type='text'
          value={search}
          onChange={handleChange}
          placeholder='Search...'
        />
      </form>
      <div className="filter">Runs Greater than:
      <button onClick={filterBy21}>21</button>
      <button onClick={filterBy50}>50</button>
      <button onClick={filterBy100}>100</button>
      </div>
      {/* <button onClick={() => sortBy()}>Runs</button> */}
      </div>
      <BatHeader/>
      {filteredData.sort((a,b)=> a.Result < b.Result ? 1:-1)
      .map(item => {
        return (
          <Bat 
          key={item._id}
          runs={item.Runs}
          mins={item.Mins}
          bf={item.BF}
          sr={item.SR}
          pos={item.Pos}
          dismissal={item.Dismissal}
          inns={item.Inns}
          ground={item.Ground}
          result={item.Result}
          opposition={item.Opposition}
          fours={item['4s']}
          sixes={item['6s']}
          date={item['Start DateAscending']}
          matchnumber={item['Match Number']}
          />
        );
      })}
    </div>
  );
}

export default BatPage;