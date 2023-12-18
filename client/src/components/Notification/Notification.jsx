// import "./style.scss";
const Notification = ({ notiText }) => {
  return (
    <>
      <div className="notification-container fixed top-3 left-1/2 -translate-x-1/2 w-fit h-fit z-[100] transition-all duration-300 bg-green-500 overflow-auto text-white rounded-md">
        <div className="p-3">{notiText}</div>
      </div>
    </>
  );
};

export default Notification;
