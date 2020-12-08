import React, {useContext, useState, useEffect} from 'react';
import {AuthContext} from '../context/AuthContext';
import {useHttp} from '../../hooks/http.hook';

import './mainPage.css';

import img from './foto.jpg';
function MainPage () {
    const auth = useContext(AuthContext);
    const {loading, request} = useHttp();

    const [form, setForm] = useState({
        num: 0,
        email: '',
        password: '',
        logins: [],
        loginTo: '',
        smsTake: {},
        smsSend: {},
        massage: '',
        info: '',
        posit: '',
        tel: ''
    });

    const exitPage = () => {
        auth.logout();
    };
    const takeAllPerson = async () => {
        try {
            const data = await request('/api/all', 'POST');
            setForm({ ...form, logins: data})
        } catch (e) {
            setForm({ ...form, massage: e.message })
        }
    }

    const takePerson = async (login) => {
        try {
            const data = await request('/api/chose', 'POST', {id : sessionStorage.userId, login});
            setForm({ ...form,
                 smsTake: data.smsTake,
                 smsSend: data.smsSend,
                 email: data.information.email,
                 tel: data.information.tel,
                 posit: data.information.posit,
                 info: data.information.info,
                 loginTo: login,});
        } catch (e) {
            setForm({ ...form, massage: e.message })
        }
    }

    const sendMessage = async (sms) => {
        try {
            await request('/api/send', 'POST', {id : sessionStorage.userId, login : form.loginTo, sms});
        } catch (e) {
            setForm({ ...form, massage: e.message })
        }
    }

    // useEffect(() => {
    //     takeAllPerson();
    //     console.log(1);
    //   });

    // let timerAllPerson = setInterval(() => {
    //     takeAllPerson();
    //     takePerson();
    //     console.log(1)
    // }, 10000);

    return (
        <>
            <div className="headerPage">
                <h2>YOUCHAT</h2>
                <div className="exitPage" onClick={exitPage}>
                    <div className="exitRoundPage">
                        <p>l</p>
                    </div>
                </div>
            </div>
            <div className="bodyPage">
                <div className="contactPage">
                    <ul>
                    {form.logins.map(data => (
                        <li onClick={()=>takePerson(data)}>
                            {data}
                        </li>
                    ))}
                    </ul>
                </div>
                <div className="smsPage">
                    <div className="smsPageHeader">
                        <h2>Тамразян Михаил Сергеевич / Директор</h2>
                        <div>
                            <p>Телефон: 89778231232</p>
                            <p>Почта: drgswsd@mail.ru</p>
                        </div>
                    </div>
                    <div className="smsPageBody">
                        <ul>
                            <li className="reserve">
                                <img src={img} alt="Image preview..."/>
                                <div>
                                    <div>
                                        <p>Привет Привет Привет Привет Привет Привет Привет Привет Привет Привет Привет Привет Привет Привет Привет Привет Привет Привет </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <img src={img} alt="Image preview..."/>
                                <div>
                                    <div>
                                        <p>Привет Привет Привет Привет Привет Привет Привет Привет Привет Привет Привет Привет Привет Привет Привет Привет Привет Привет </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="smsPageFooter">
                        <input className="smsInput"/>
                        <div id="smsFile">
                            <label>
                                <input type="file" className="smsFile" id="uploade-file"/>
                                <span>&#926;</span>
                            </label>
                        </div>
                        <button>Отправить</button>
                    </div>
                </div>
            </div>
        </>
    )
};
export default MainPage;