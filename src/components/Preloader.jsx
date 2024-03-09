import React from 'react';
import { Circles } from 'react-loader-spinner';
import s from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className={s.wrapper}>
            <Circles
  height="180"
  width="180"
  color="#4fa94d"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
            />
            <h1>Loading...</h1>
        </div>
    );
}

export default Preloader;
