import React,{useEffect, useState} from "react";
import Odi from "../../components/odi/odi";
import OdiHeader from "../../components/odiheader/odiheader";
function OdiPage() {
  const [state, setState] = useState([]);
  const [search, setSearch] = useState('');


  const getData = async ()=>{
    const response = await fetch("http://localhost:3001/getodi");
    const data = await response.json();
    setState(data);
  }

  useEffect(()=>{
    getData();
  },[])

  const filterBy21 = () => setState(state => state.filter(item => item.batting_score > 21));
  const filterBy50 = () => setState(state => state.filter(item => item.batting_score > 50));
  const filterBy100 = () => setState(state => state.filter(item => item.batting_score > 100));

  const handleChange = event => {
    setSearch(event.target.value);
  };

  const filteredData = state.filter(item =>
    item.ground.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="App">
      <h1>Sachin Tendulkar ODI Stats</h1>
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
      <OdiHeader/>
      {filteredData.sort((a,b) => a.toss < b.toss? 1:-1)
      .map((item)=>{
        return (
          <Odi
            key={item._id}
            batscore={item.batting_score}
            wkts={item.wickets}
            runconceded={item.runs_conceded}
            catches={item.catches}
            stumps={item.stumps}
            opposition={item.opposition}
            ground={item.ground}
            date={item.date}
            result={item.match_result}
            toss={item.toss}
            batinns={item.batting_innings}
            resmargin={item.result_margin}

          />
        )
      })}
    </div>
  );
}

export default OdiPage;