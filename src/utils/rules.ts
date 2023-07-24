import type { RegisterOptions } from 'react-hook-form'
import * as yup from 'yup';
type Rules = { [key: string]: RegisterOptions }
export const rules: Rules = {
    email: {
        required: {
            value: true,
            message: "Email là bắt buộc"
        },
        pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            message: "Email không đúng định dạng"
        },
        maxLength: {
            value: 160,
            message: "Email có độ dài từ 5-160 ký tự"
        },
        minLength: {
            value: 5,
            message: "Email có độ dài từ 5-160 ký tự"
        }
    },
    password: {
        required: {
            value: true,
            message: "Vui lòng nhập mật khẩu"
        },
        // pattern: {
        //     value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        //     message: "Email không đúng định dạng"
        // },
        maxLength: {
            value: 160,
            message: "Mật khẩu có độ dài từ 5-160 ký tự"
        },
        minLength: {
            value: 5,
            message: "Mật khẩu có độ dài từ 5-160 ký tự"
        }
    },
    confirmPassword: {
        required: {
            value: true,
            message: "Vui lòng xác thực mật khẩu"
        },
        // pattern: {
        //     value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        //     message: "Mật khẩu không đúng định dạng"
        // },
        maxLength: {
            value: 160,
            message: "Xác thực mật khẩu có độ dài từ 5-160 ký tự"
        },
        minLength: {
            value: 5,
            message: "Xác thực mật khẩu có độ dài từ 5-160 ký tự"
        }
    }
}


export const schema = yup.object({
    email: yup.string()
        .required('Email là bắt buộc')
        .email('Email không đúng định dạng')
        .min(5, 'Độ dài từ 5 - 160 ký tự')
        .max(160, 'Độ dài từ 5 - 160 ký tự'),
    password: yup.string()
        .required('Password là bắt buộc')
        .min(5, 'Độ dài từ 5 - 160 ký tự')
        .max(160, 'Độ dài từ 5 - 160 ký tự'),
    confirmPassword: yup.string()
        .required('Xác thực mật khẩu')
        .min(5, 'Độ dài từ 5 - 160 ký tự')
        .max(160, 'Độ dài từ 5 - 160 ký tự')
        .oneOf([yup.ref('password')], 'Xác thực mật khẩu không giống')
})

export type Schema = yup.InferType<typeof schema>