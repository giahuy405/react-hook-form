import { useForm } from 'react-hook-form'
import { schema, Schema } from './utils/rules'
import { yupResolver } from "@hookform/resolvers/yup"

type FormData = Schema
function App2() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    })

    const onSubmit = handleSubmit(data => {
        console.log(data)
    });
    return (
        <>
            <div className="flex  items-center justify-center text-center dark:bg-gray-900 dark:text-gray-100 mt-[100px]">

                <form
                    noValidate
                    onSubmit={onSubmit}
                    className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg dark:text-gray-100 bg-white ">
                    <h3 className='text-xl mb-10'>ĐĂNG KÝ APP2</h3>
                    <label htmlFor="username" className="self-start text-xs font-semibold">Email</label>
                    <input
                        type="text"
                        className="flex items-center h-12 px-4 mt-2 rounded border"
                        placeholder='Email'

                        {...register('email')}
                    />
                    <div className="text-red-500 text-left min-h-[22px]">{errors.email?.message}</div>

                    <label htmlFor="password" className="self-start mt-3 text-xs font-semibold">Mật khẩu</label>
                    <input
                        type="password"
                        className="flex items-center h-12 px-4 mt-2 rounded border"
                        placeholder='Mật khẩu'
                        {...register('password')}
                    />
                    <div className="text-red-500 text-left min-h-[22px]">{errors.password?.message}</div>

                    <label htmlFor="password" className="self-start mt-3 text-xs font-semibold">Xác thực mật khẩu</label>
                    <input
                        type="password"
                        className="flex items-center h-12 px-4 mt-2 rounded border"
                        placeholder='Xác thực mật khẩu'
                        {...register('confirmPassword')}
                    />
                    <div className="text-red-500 text-left min-h-[22px]">{errors.confirmPassword?.message}</div>

                    <button type="submit" className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded bg-blue-400 text-white hover:bg-blue-500">ĐĂNG KÝ</button>
                </form>
            </div>

        </>
    )
}

export default App2
