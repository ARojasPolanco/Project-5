import { useSelector } from "react-redux"
import { Link, Navigate, Outlet } from "react-router-dom"

const PrivateRoutes = () => {

  // const modalError = () => {
  //   Swal.fire({
  //     icon: 'error',
  //     title: 'Oops...',
  //     text: 'Something went wrong!',
  //   })
  // }

  const { name } = useSelector((store) => store.trainer)

  if (name) {
    return <Outlet />
  }
  return <Navigate to="/" />
}

export default PrivateRoutes