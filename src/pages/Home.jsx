import React from 'react'
import { Categories } from '../assets/mockData'
const Home = () => {
    return (
        <div>
            <div>
                <div>
                    <div>
                        Shop By Categories
                    </div>
                    <ul>
                        {
                            Categories.map((categorey, index) => {
                                return (
                                    <li key={index}>
                                        {categorey}
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home