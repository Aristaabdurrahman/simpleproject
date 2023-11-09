import React, { useEffect, useState } from 'react';
import { SearchContent, KabupatenApi, ContentList } from './Api';


function SearchComponent() {

  const [provinsi, setProvinsi] = useState([]);
  const [provID, setProvID] = useState('');
  const [kab, setKab] = useState([]);
  const [kabID, setKabID] = useState('');
  const [pesantren, setPesantren] = useState([]);

  useEffect(() => {
    SearchContent().then((prov) => {
        setProvinsi(prov);
    })
  }, [])

  useEffect(() => {
    KabupatenApi(provID).then((kbptn) => {
      setKab(kbptn);
    })
  }, [provID])

  useEffect(() => {
    ContentList(kabID).then((list) => {
      setPesantren(list);
    })
  }, [kabID])

  const PesantrenList = () => {
    return pesantren.map((place, i) => {
      return(
        <div className='col-3' key={i}>
          <div className='card mb-3'>
            <div className='card-body'>
              <h5 className="card-title">{place.nama}</h5>
              <p className="card-text">{place.nspp}</p>
              <p className="card-text">{place.alamat}</p>
            </div>
          </div>
        </div>
      )//return
    })
  }

  return (
    <div>
      <div className='landing-page'>
        <div className='text-center container'>
          <h1 className='landing-page-title'>TEMUKAN PESANTREN IMPIAN ANDA</h1>
          <div className='row justify-content-center'>
            <select className="form-select list-content" onChange={(e)=>setProvID(e.target.value)}>
              <option value={''}> ----provinsi----- </option>
              {
                provinsi.map((propins) => (
                  <option key={propins.id} value={propins.id}>{propins.nama}</option>
                ))
              }
            </select>
            <select className="form-select list-content" onChange={(e)=>setKabID(e.target.value)}>
            <option value={''}> ----kabupaten----- </option>
              {
                kab.map((kabs) => (
                  <option key={kabs.id} value={kabs.id}>{kabs.nama}</option>
                ))
              }
            </select>
          </div>
        </div>
      </div>

      <div>
        <h2 className='text-center content-title'>Daftar Pesantren Di </h2>
        <div className='container'>
          <div className='row'>
            <PesantrenList />
          </div>
        </div>
      </div>
    </div>
  );


}
  
  export default SearchComponent;