import React,{useEffect, useState} from "react";
import Field from "../../components/fielding/fielding";
import FieldHeader from "../../components/fieldheader/fheader";

function FieldPage() {
  const [state, setState] = useState([]);
  const [search, setSearch] = useState('');


  const getData = async ()=>{
    const response = await fetch("http://localhost:3001/getfield");
    const data = await response.json();
    setState(data);
  }

  useEffect(()=>{
    getData();
  },[])


   //filter
   const filterBy21 = () => setState(state => state.filter(item => item.Runs > 21));
   const filterBy50 = () => setState(state => state.filter(item => item.Runs > 50));
   const filterBy100 = () => setState(state => state.filter(item => item.Runs > 100));

  const handleChange = event => {
    setSearch(event.target.value);
  };

  const filteredData = state.filter(item =>
    item.Ground.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="stats-app">
      <h1>Sachin Tendulkar Fielding Stats</h1>
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
      </div>
      <FieldHeader/>
      {filteredData.sort((a,b) => a.Result < b.Result? 1:-1)
      .map((item)=>{
        return (
          <Field
            key={item._id}
            runs={item.Runs}
            overs={item.Overs}
            maidens={item.Mdns}
            wkts={item.Wkts}
            econ={item.Econ}
            pos={item.Pos}
            inns={item.Inns}
            opposition={item.Opposition}
            ground={item.Ground}
            result={item.Result}
            catches={item.CatchTaken}
            dismissal={item.DismisalMade}
            date={item.date}
            matchnumber={item.MatchNumber}

          />

        )
      })}
    </div>
  );
}

export default FieldPage;