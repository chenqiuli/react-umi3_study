import axios from 'axios';
import React, { useState } from 'react';
import { history } from 'umi';

export default function Login() {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  return (
    <div>
      <h1>Login</h1>
      <div>
        用户名：
        <input
          type="text"
          value={username}
          onChange={(evt) => setusername(evt.target.value)}
        />
      </div>
      <div>
        密码：
        <input
          type="password"
          value={password}
          onChange={(evt) => setpassword(evt.target.value)}
        />
      </div>
      <div>
        <button
          onClick={() => {
            // 调用mock接口
            axios('/users/login', {
              method: 'POST',
              data: {
                username,
                password,
              },
            }).then((res) => {
              // console.log(res.data);
              if (res.data.ok === 1) {
                localStorage.setItem('token', username);
                history.push('/mine');
              } else {
                alert('用户名或密码错误');
              }
            });
          }}
        >
          登录
        </button>
      </div>
    </div>
  );
}
