import React from 'react'
import Iubenda from 'react-iubenda-policy'
import { me } from '../_data/user-data'

export const Policy = () => {
    let myPolicy = me.iubenda
    return (
        <div className="inline-block text-sm items-center mx-aut0">
            <Iubenda id={myPolicy}  className="inline-block text-sm items-center" type='privacy' styling='black'>
                <span className="text-sm text-bold inline-block  ">Privacy Policy</span>
            </Iubenda>

            <Iubenda id={myPolicy}  className="inline-block text-sm items-center" type='cookie' styling='black'>
                <span className="text-sm text-bold inline-block  ">Cookie Policy</span>
            </Iubenda>
        </div>
    );
}