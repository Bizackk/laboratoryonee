import ComputerReservation from "./components/layouts/computers/ComputersDisp"
import LogInAdmin from "./components/layouts/logIn/LoginAdmins"
import Rooms from "./components/layouts/rooms/RoomsDisp"
import StudentInfo from "./components/layouts/students/StudentsInfo"


function App() {

  return (
    <>
      <LogInAdmin />
      <StudentInfo />
      <Rooms />
      <ComputerReservation />
    </>
  )
}
export default App
