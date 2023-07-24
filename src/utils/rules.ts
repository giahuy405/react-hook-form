import type { RegisterOptions } from 'react-hook-form'

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
