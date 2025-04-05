import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../App.css'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (username === 'admin' && password === 'password') {
      navigate('/'); 
    } else {
      setError('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
  };

  return (
    <div className="login-container">
      <h2>로그인</h2>
      
      {error && <div className="error-message">{error}</div>} 
      
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label className="form-label">아이디</label>
          <input 
            type="text" 
            className="form-control" 
            id="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required
            placeholder="아이디를 입력하세요"
          />
        </div>
        
        <div className="mb-3">
          <label className="form-label">비밀번호</label>
          <input 
            type="password" 
            className="form-control" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required
            placeholder="비밀번호를 입력하세요"
          />
        </div>
        
        <button type="submit">로그인</button>
      </form>
      
      <div className="signup-link">
        <p>계정이 없으신가요? <a href="/signup">회원가입</a></p>
      </div>
    </div>
  );
};

export default Login;
