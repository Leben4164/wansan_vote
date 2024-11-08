"use client"
import { useState } from "react"

const students = [
    '1101',
    '1102',
    '1103'
]

export default function Auth({ onAuthenticate }: { onAuthenticate: () => void }) {
    const [schoolId, setSchoolId] = useState("")

    function isStudent() {
        if (students.includes(schoolId)) {
            alert("완산고 학생임이 확인되었습니다.\n이제 투표를 진행해주세요.")
            setSchoolId("")
            onAuthenticate()
        } else {
            alert("학생 인증에 실패했습니다.")
        }
    }

    return (
        <div style={{
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9',
            maxWidth: '400px',
            margin: 'auto'
        }}>
            <h2>학생 인증</h2>
            <p>학생임을 인증하기 위해 본인의 학번을 입력해주세요.</p>

            <div style={{ marginTop: '10px' }}>
                <label>학번 : </label>
                <input
                    style={{
                        marginRight: '10px',
                        padding: '5px',
                        border: '1px solid #ccc',
                        borderRadius: '4px'
                    }}
                    placeholder="학번 4자리를 입력해주세요 (예 : 1101)"
                    value={schoolId}
                    onChange={(e) => { setSchoolId(e.target.value) }}
                />
                <button
                    style={{
                        padding: '5px 10px',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                    onClick={isStudent}
                >
                    제출
                </button>
            </div>
        </div>
    )
}