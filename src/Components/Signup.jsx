import React,{useState} from 'react'
import {Button,Input,Logo} from './index'
import {  useDispatch } from 'react-redux'
import {useForm} from 'react-hook-form'
import { useNavigate,Link } from 'react-router-dom'
import authservice from '../services/auth'
import { login } from '../Store_Slice/authSlice'

const Signup = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch()
    const {register,handleSubmit}=useForm();
    const [error,setError]=useState("")
    const createuser=async(data)=>{
        setError("")
        try{
            const user=await authservice.createAccount(data);
            if(userdata)
            {
               const userdata= await authservice.getCurrentUser()
               if(userdata)
               {
                dispatch(login(userdata))
                navigate("/")
               }
            }
        }
        catch(error)
        {

        }

    }
  return (
    <div className="flex items-center justify-center">
    <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
    <div className="mb-2 flex justify-center">
            <span className="inline-block w-full max-w-[100px]">
                <Logo width="100%" />
            </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
        <p className="mt-2 text-center text-base text-black/60">
            Already have an account?&nbsp;
            <Link
                to="/login"
                className="font-medium text-primary transition-all duration-200 hover:underline"
            >
                Sign In
            </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(createuser)}>
            <div className='space-y-5'>
                <Input 
                label='Name'
                placeholder="Enter your Name"
                {...register("name",{
                    required:true,
                })
                }

                />
                  <Input label='Email'
            placeholder="Enter Email"
            type='email'
            {...register('email',{
                required:true,
                validate: {
                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                }
            })}
            />
             <Input 
            label="PassWord"
            type="password"
            placeholder="Enter Password"
            {...register('password',{
                required:true
            })
            }
            />
            <Button type='submit' className='w-full'>Sign Up</Button>

                </div>
                </form>
                </div>
                </div>
  )
}

export default Signup