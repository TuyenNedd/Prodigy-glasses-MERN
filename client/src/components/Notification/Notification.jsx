import "./style.scss";
const Notification = ({ notiText }) => {
  return (
    <>
      <div className="notification-container fixed top-3 left-1/2 -translate-x-1/2 w-fit h-fit z-[100] transition-all duration-300 bg-[#8b8b8bf5] overflow-auto text-white rounded-md text-base">
        <div className="p-3 font-semibold tracking-wide">{notiText}</div>
      </div>
    </>
  );
};

export default Notification;
