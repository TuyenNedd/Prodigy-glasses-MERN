const Picture = ({
  largeImg,
  smallImg,
  highRes,
  largeMedia,
  smallMedia,
  lazyLoad,
}) => {
  return (
    <>
      <picture>
        <source media={largeMedia} srcSet={highRes} />
        <source media={smallMedia} srcSet={largeImg} />
        <source srcSet={smallImg} />
        <img
          className="high-res-picture___3SJ41 loaded___3ltPt w-full"
          id="tcm:212-960053"
          src={highRes}
          decoding="async"
          loading={lazyLoad}
        />
      </picture>
    </>
  );
};

export default Picture;
