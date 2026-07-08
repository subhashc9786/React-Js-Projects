import React, { useState } from 'react'
import Profile from './Profile'
import Interests from './Interests'
import Settings from './Settings'

const TabForm = () => {
    const [activeTab, setActiveTab] = useState(0);


    const [data, setData] = useState({
        name: "subhash",
        age: "28",
        email: "subhashc97872gmail.com",
        Interests: ["coding", "music"],
        theme: "dark"
    })


    const [error, setError] = useState({
        name: "Name is not Valid !"
    })

    const tabs = [
        {
            name: "Profile",
            component: Profile,
            validate: () => {
                const err = {}
                if (!data.name || data.name.length < 2) {
                    err.name = "Name is not valid";
                }
                if (!data.age || data.email < 18) {
                    err.age = "Age is not Valid Please Enter the age more than 18 !"
                }
                if (!data.email || data.email.length < 2 || !data.email.includes('@gmail.com')) {
                    err.email = "email is not valid"
                }
                setError(err);
                return err.name || err.age || err.email ? false : true;
            }
        },
        {
            name: "Interests",
            component: Interests,
            validate: () => {
                const err = {};
                if (data.Interests.length < 1) {
                    err.Interests = "Select atleast one interests";
                }
                setError(err);
                return err.Interests ? false : true;
            }
        },
        {
            name: "Settings",
            component: Settings,
            validate: () => {
                return true;
            }
        },
    ]

    const ActiveTabComponent = tabs[activeTab].component



    const handlePrevClick = () => {
        if (tabs[activeTab].validate()) {
            setActiveTab(pre => pre - 1)
        }
    }
    const handleNextClick = () => {
        if (tabs[activeTab].validate()) {
            setActiveTab(pre => pre + 1)

        }
    }

    const handleSubmitClick = () => {

    }
    return (
        <div>
            <div className='heading-container'>
                {tabs.map((t, index) => (
                    <div key={index} className='heading' onClick={() => setActiveTab(index)}>{t.name}</div>
                ))}
            </div>
            <div className='tab-body'>
                <ActiveTabComponent data={data} setData={setData} error={error} setError={setError} />
            </div>
            <div>
                {activeTab > 0 && <button onClick={handlePrevClick}>Pre</button>}
                {activeTab < tabs.length - 1 && (<button onClick={handleNextClick}>Next</button>)}
                {activeTab === tabs.length - 1 && (<button onChange={handleSubmitClick}>Submit</button>)}
            </div>
        </div>
    )
}

export default TabForm