import React from "react";
import Card from "../components/Card";
import Layout from "../components/Layout";
import Referans from "../components/Referans";
import data from "../json/json";
import data2 from "../json/json2";
import style from "../styles/index.module.css";
import Head from "next/head";

const Main = () => {
  console.log(data);
  return (
    <Layout>
      <Head>
        <title>Hizmetler</title>
        <link rel="shortcut icon" href="../assets/blueit_logo_cropped.png" type="image/x-icon" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="d-flex flex-column align-items-center">
        <h3 className="text-primary">Su Yönetim Platformu</h3>
        <p>
          "Ölçemediğiniz hiçbir şeyi kontrol edemez,kontrol edemediğiniz hiçbir
          şeyi yönetemezsiniz."
        </p>
        <div>
          <img
            src="https://blueitfuture.com/resimler/mockup_golgesiz.png"
            width={"700px"}
            alt=""
          />
        </div>

        <div className="d-flex flex-wrap justify-content-center gap-5 mb-5">
          {data.map((item, index) => {
            const { title, desc } = item;
            return <Card key={index} title={title} desc={desc} />;
          })}
        </div>

        <h2 className={style.btm}>Referanslarımız</h2>
        <div className="d-flex flex-wrap justify-content-center mt-4 gap-5">
          {data2.map((item, index) => {
            const { src, desc } = item;

            return <Referans key={index} src={src} desc={desc} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Main;
