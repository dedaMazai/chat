import React, {useContext, useState, useEffect} from 'react';
import {AuthContext} from '../context/AuthContext';
import {useHttp} from '../../hooks/http.hook';

import './mainPage.css';

import img from './foto.jpg';
function MainPage () {
    const auth = useContext(AuthContext);
    const {loading, request} = useHttp();
    const ref = React.createRef();

    const [form, setForm] = useState({
        email: '',
        password: '',
        logins: [],
        loginTo: '',
        idTake: '',
        smsAll: [],
        massage: '',
        smsInput: '',
        info: '',
        posit: '',
        tel: ''
    });
    const dataLocal = JSON.parse(localStorage.getItem('userData'));

    const exitPage = () => {
        auth.logout();
        delete localStorage.login;
    };
    const takeAllPerson = async () => {
        try {
            const data = await request('/api/all', 'POST', {id : dataLocal.userId});
            setForm({ ...form, logins: data})
        } catch (e) {
            setForm({ ...form, massage: e.message })
        }
    }

    const takePerson = async (login) => {
        try {
            const person = await request('/api/chose', 'POST', {id : dataLocal.userId, login});
            let smsAll = [];
                person.smsSend.map( function (name) {
                    smsAll.push({ "sms" : name.sms, "reverse" : "reverse", "data" : name.data })
                });
                person.smsTake.map( function (name) {
                    smsAll.push({ "sms" : name.sms, "reverse" : "", "data" : name.data })
                });
                smsAll.sort(function(a,b){
                    return new Date(b.data) - new Date(a.data);
                }).reverse();
            setForm({ ...form,
                 smsAll,
                 email: person.information.email,
                 tel: person.information.tel,
                 posit: person.information.posit,
                 info: person.information.info,
                 idTake: person.information.id,
                 loginTo: login,});
            localStorage.login = login;
        } catch (e) {
            setForm({ ...form, massage: e.message })
        }
    }

    const sendMessage = async (sms) => {
        try {
            ref.current.value = '';
            await request('/api/send', 'POST', { id : dataLocal.userId, login : form.loginTo, sms });
            await takePerson(localStorage.login);
        } catch (e) {
            setForm({ ...form, massage: e.message })
        }
    }

    const changeInput = event => {
        setForm({ ...form, smsInput: event.target.value })
    };

    // useEffect(() => {
    //     const data = JSON.parse(localStorage.getItem('userData'));
    //     console.log(data)});
    //   setInterval(() => {
    //     takeAllPerson();
    //     console.log(1)
    // }, 5000);

    // let timerAllPerson = setInterval(() => {
    //     takeAllPerson();
    //     takePerson();
    //     console.log(1)
    // }, 10000);
    // takeAllPerson();
    // console.log(form.smsTake);

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
                        <h2> {form.info} | {form.posit}</h2>
                        <div>
                            <p>Телефон: {form.tel}</p>
                            <p>Почта: {form.email}</p>
                        </div>
                    </div>
                    <div className="smsPageBody" onClick={()=>takeAllPerson()}>
                        <ul>
                            {form.smsAll.map(data => (
                                <li className = {data.reverse} >
                                    <img src={img} alt="Image preview..."/>
                                    <div>
                                        <div>
                                            <p>{data.sms}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="smsPageFooter">
                        <input className="smsInput" ref={ref} onChange={changeInput}/>
                        <div id="smsFile">
                            <label>
                                <input type="file"
                                className="smsFile"
                                id="uploade-file"
                                disabled={form.loginTo === "" || form.loginTo === undefined ? true : false}/>
                                <span>&#926;</span>
                            </label>
                        </div>
                        <button onClick={()=>sendMessage(form.smsInput)}
                                disabled={form.loginTo === "" || form.loginTo === undefined || form.smsInput === "" ? true : false}>Отправить</button>
                    </div>
                </div>
            </div>
        </>
    )
};
export default MainPage;