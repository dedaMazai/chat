import React, {useContext, useState} from 'react';
import {AuthContext} from '../context/AuthContext';
import {useHttp} from '../../hooks/http.hook';

import './mainPage.css';

import img from './foto.jpg';
function MainPage () {
    const auth = useContext(AuthContext);
    // const {loading, request} = useHttp();

    // const [form, setForm] = useState({
    //     num: 0, email: '', password: '', login: '', massage: '', cod: '', info: '', posit: '', tel: ''
    // });

    const exitPage = () => {
        auth.logout()
    };
    // const registerHandler = async () => {
    //     try {
    //         const data = await request('/api/signup', 'POST', {...form});
    //         setForm({ ...form, massage: data.message, num: 0})
    //     } catch (e) {
    //         setForm({ ...form, massage: e.message })
    //     }
    // }

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
                        <li>Михаил Литвин</li>
                        <li>Виктор Литвин</li>
                        <li>Андрей Литвин</li>
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