import React from 'react';
import ConfigureClothes from '../components/ConfigureClothes/ConfigureClothes';
import AllProduct from '../components/AllProduct/AllProduct';

function Clothes(props) {
  console.log("props : ",props.match.params.category);
  const category = props.match.params.category;
  return (
    <div>
        <ConfigureClothes category={category} />
        <AllProduct category={category} />
    </div>
  )
}

export default Clothes