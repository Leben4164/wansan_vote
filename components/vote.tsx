
export default function Vote() {
    return (
        <fieldset style={ {width : 100} }>
            <legend>후보 선택:</legend>

            <div>
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

            <div>
                <input 
                  type="radio" 
                  id="2" 
                  name="candidates" 
                  value="2" 
                />
                <label htmlFor="dewey">2번</label>
            </div>

        </fieldset>
    )
}