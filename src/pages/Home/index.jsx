import  {useState,useEffect} from 'react';

import {URL} from '../../api/URL';
import Layout from '../../components/Layout';
import Card from '../../components/Card';

const Home = () => {
  const [item,setItem] = useState(null);

  useEffect(() => {
    fetch(URL + '/geeks')
    .then((response) => response.json())
    .then((data) => setItem(data))
  },[])
  
  return (
    
<Layout><div  className='grid gap-4  grid-cols-2 sm:grid-cols-4 w-full max-w-screen-lg px-2'>
      {item && item.map((item) => (
        <Card key={item.id} data={item}/>
      ))}</div>
    </Layout>
    
    
  )
}

export default Home