import React from 'react';
import { useSelector } from "react-redux";

import PublicHeader from '../Header/Header';
import PrivateHeader from '../HeaderPrivate/HeaderPrivate';

function Navbar() {
      //get user from store
  const state = useSelector(state => state.users);
  const { userAuth, profile } = state;
  return (
    <>
    {userAuth ? (
        <PrivateHeader></PrivateHeader>
    ):(
        <PublicHeader></PublicHeader>
    )}
    </>
  )
}

export default Navbar