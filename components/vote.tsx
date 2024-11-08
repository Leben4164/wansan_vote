"use client"

function vote() {
    const candidates = document.getElementsByName("candidates")
    candidates.forEach((radio) => {
        if ((radio as HTMLInputElement).checked) {
            //radio.value 전송?
        }
    })
}

export default function Vote() {
    return (
        <fieldset style={{
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9',
            maxWidth: '400px',
            margin: 'auto'
        }}>
            <legend>후보 선택:</legend>

            <div style={{ margin: '10px 0' }}>
                <input 
                  type="radio" 
                  id="1" 
                  name="candidates" 
                  value="1" 
                  defaultChecked 
                  required
                />
                <label htmlFor="huey">1번</label>
            </div>

            <div style={{ margin: '10px 0' }}>
                <input 
                  type="radio" 
                  id="2" 
                  name="candidates" 
                  value="2" 
                />
                <label htmlFor="dewey">2번</label>
            </div>
            <button
                style={{
                    padding: '5px 10px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}
                onClick={vote}
            >
                제출
            </button>
        </fieldset>
    )
}