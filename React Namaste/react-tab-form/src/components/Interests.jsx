import React from 'react'

const Interests = ({ data, setData, error }) => {
    const { Interests } = data;

    const handleDataChange = (e) => {
        setData(prevState => ({
            ...prevState,
            Interests: e.target.checked
                ? [...prevState.Interests, e.target.name]
                : prevState.Interests.filter((i) => i !== e.target.name),

        }))
    }

    return (
        <div>
            <div>
                <label htmlFor="">
                    <input type="checkbox" name='coding' checked={Interests.includes("coding")}
                        onChange={handleDataChange} />
                    Coding
                </label>
            </div>
            <div>
                <label htmlFor="">
                    <input type="checkbox" name='music' checked={Interests.includes("music")}
                        onChange={handleDataChange} />
                    music
                </label>
            </div>
            <div>
                <label htmlFor="">
                    <input type="checkbox" name='coding' checked={Interests.includes("javascript")}
                        onChange={handleDataChange} />
                    JavaScript
                </label>
            </div>
            {error.Interests && <span className='error'>{error.Interests}</span>}
        </div>
    )
}

export default Interests