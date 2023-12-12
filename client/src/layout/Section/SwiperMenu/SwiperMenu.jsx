import SwiperWrapper from "../../../components/SwiperWrapper/SwiperWrapper.jsx";

const SwiperMenu = () => {
  const swiperContentData = [
    {
      type: "Reader",
      imgType: "/images/glass-type/Caddis_Muzzy_Heritage-Green_02_1.jpg",
      underline: "/images/underline/underline_01.png",
    },
    {
      type: "Progressive Readers",
      imgType: "/images/glass-type/Caddis_D28_Dark-Iguana_02.jpg",
      underline: "/images/underline/underline_02.png",
    },
    {
      type: "Prescription",
      imgType: "/images/glass-type/Caddis_Miklos_Black-Tort_10.jpg",
      underline: "/images/underline/underline_03.png",
    },
    {
      type: "Prescription Sun",
      imgType: "/images/glass-type/Caddis_RCA-SUN_HEY_02.jpg",
      underline: "/images/underline/underline_04.png",
    },
    {
      type: "Sunglasses",
      imgType: "/images/glass-type/hV47ADbU_1.jpg",
      underline: "/images/underline/underline_05.png",
    },
  ];
  return (
    <>
      <SwiperWrapper swiperContentData={swiperContentData}></SwiperWrapper>
    </>
  );
};

export default SwiperMenu;
