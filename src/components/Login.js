import React, { useRef, useState } from "react";
// import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { Form, Button, Card, Alert } from "react-bootstrap"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

    async function handleSubmit(e) {
      e.preventDefault()
  
      try {
        setError("")
        setLoading(true)
        await login(emailRef.current.value, passwordRef.current.value)
        history.push("/")
      } catch {
        setError("Failed to log in")
      }
  
      setLoading(false)
    }

  return (
    // <div className="min-h-screen flex flex-col justify-center bg-fixed bg-blue-50" >
    //   <div className="max-w-md w-full mx-auto ">
    //     <div className="text-center text-3xl font-semibold ">CCC</div>
    //     <div className="text-5xl font-bold mt-2 text-center">
    //       Code Collate
    //     </div>
    //   </div>
    //   <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border rounded-md border-gray-300">
    //     <form action="" className="space-y-6" onSubmit={onSubmit}>
    //       <div>
    //         <label htmlFor="" className="text-sm font-bold text-gray-600 block">
    //           Email
    //         </label>
    //         <input
    //           useref={register()}
    //           name="email"
    //           type="email"
    //           className="w-full p-2 border border-gray-300 rounded mt-1"
    //         />
    //       </div>
    //       <div>
    //         <label htmlFor="" className="text-sm font-bold text-gray-600 block">
    //           Password
    //         </label>
    //         <input
    //           type="password"
    //           className="w-full p-2 border border-gray-300 rounded mt-1"
    //         />
    //       </div>
    //       <div>
    //         <label htmlFor="" className="text-sm font-bold text-gray-600 block">
    //           LeetCode ID
    //         </label>
    //         <input
    //           type="text"
    //           className="w-full p-2 border border-gray-300 rounded mt-1"
    //         />
    //       </div>
    //       <div className="flex items-center justify-between">
    //         <div className="flex items-center">
    //           <input
    //             type="checkbox"
    //             className="h-4 w-4 text-blue-300 rounded"
    //           />
    //           <label htmlFor="" className="ml-2 text-sm text-gray-600">
    //             Remember Me
    //           </label>
    //         </div>
    //         <div className="font-medium text-sm text-blue-500">
    //           Forgot Password?
    //         </div>
    //       </div>
    //       <div>
    //         <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm">
    //           Submit
    //         </button>
    //       </div>
    //       <div className="w-100 text-center mt-2">
    //       Need an account? <Link to="/signup">Sign Up</Link>
    //     </div>
    //     </form>
    //   </div>
    // </div>
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>

    ); 

}