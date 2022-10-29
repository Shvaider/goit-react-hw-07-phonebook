import React from 'react';
import {Bars} from 'react-loader-spinner';
import styles from './Loader.module.css';

export default function LoaderComponent() {
  return (
    <div className={styles.loaderWrapper}>
      <Bars
        className={styles.loader}
        height="60"
        width="60"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        timeout={2000}
      />
    </div>
  );
}
