import Notification from "../../components/registration/Notification";
const Toaster=(
  {notification,setNotification,})=> {
  const removeNotif = () => {
    setNotification(null);
  };
 if (!notification) {
    return null;
  }
  return (
    <div>
        <Notification
          key={notification.key}
          message={notification.message}
          onRemove={removeNotif}
        />
    </div>
  );
}

export default Toaster;