"use client"
import { useState } from "react"
const students = [
    '1101',
    '1102',
    '1103'
]

function isStudent(id: string) {
    if (students.includes(id)) {
        alert("완산고 학생임이 확인되었습니다.\n이제 투표를 진행해주세요.")
    }
}

export default function Auth() {
    const [schoolId, setSchoolId] = useState("")


    return (
        <div>
            <h2>학생 인증</h2>
            <p>학생임을 인증하기 위해 본인의 학번을 입력해주세요.</p>

            <div>
                <label>학번 : </label>
                <input
                    placeholder="학번 4자리를 입력해주세요 (예 : 1101)"
                    value={schoolId}
                    onChange={(e) => { setSchoolId(e.target.value) }}
                />
                <button onClick={() => { isStudent(schoolId) }}>제출</button>
            </div>
        </div>

    )
}