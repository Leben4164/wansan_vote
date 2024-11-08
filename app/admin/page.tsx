"use client"

import { SetStateAction, useEffect, useState } from 'react';
import Modal from 'react-modal';

export default function Admin() {
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        Modal.setAppElement('body');
    }, []);

    const handlePasswordChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (password === 'wansan core') {
            setIsAuthenticated(true);
            setIsModalOpen(false);
        } else {
            alert('비밀번호가 틀렸습니다.');
        }
    };

    const buttonStyle = {
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer',
    };

    return (
        <div style={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
            <h2 style={{ color: '#333', fontSize: '24px' }}>관리자 전용 페이지</h2>
            {!isAuthenticated ? (
                <button style={buttonStyle} onClick={() => setIsModalOpen(true)}>인증하기</button>
            ) : (
                <p>인증되었습니다. 관리자 기능을 사용할 수 있습니다.</p>
            )}

            <Modal 
                isOpen={isModalOpen} 
                onRequestClose={() => setIsModalOpen(false)} 
                appElement={document.getElementById('your-app-root') || undefined}
                style={{
                    content: {
                        width: '400px', // 원하는 너비
                        height: '300px', // 원하는 높이
                        margin: 'auto', // 중앙 정렬
                        padding: '20px', // 내부 여백
                    },
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.75)', // 배경 색상
                    }
                }}
            >
                <h2>비밀번호 입력</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="비밀번호 입력"
                    />
                    <button type="submit">인증</button>
                    <button type="button" onClick={() => setIsModalOpen(false)}>취소</button>
                </form>
            </Modal>
        </div>
    );
}