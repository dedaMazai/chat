import React, {useContext, useState} from 'react';
import {useHttp} from '../../hooks/http.hook';
import {AuthContext} from '../context/AuthContext';

import foto from './foto.jpg';

import './auth.css';
function Auth () {
    const auth = useContext(AuthContext);
    const {loading, request} = useHttp();
    const [form, setForm] = useState({
        num: 0, email: '', password: '', login: '', massage: '', cod: '', info: '', posit: '', tel: ''
    });
    const [img, setImg] = useState({img: foto});
    let ref = React.createRef();
    const previewFile = () => {
        var file = ref.current.files[0],
            reader = new FileReader();

        reader.onloadend = () => {
            setImg({img: reader.result})
        }

        if (file) {
            reader.readAsDataURL(file);
        } else {
            setImg({img: foto})
        }
    }
    console.log(form)

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    };

    const authDown = (press) => {
        setForm({  ...form, num: press })
    };

    const registerHandler = async () => {
        try {
            const data = await request('/api/signup', 'POST', {...form});
            setForm({ ...form, massage: data.message, num: 0})
        } catch (e) {
            setForm({ ...form, massage: e.message })
        }
    }

    const loginHandler = async () => {
        try {
          const data = await request('/api/login', 'POST', ({ email: form.email, password: form.password}));
          auth.login(data.token, data.id)
          setForm({ ...form, massage: data.message })
        } catch (e) {
            setForm({ ...form, massage: e.message })
        }
    }

    if (form.num === 0) {
        return (
            <div className="auth">
                <div className="authLogin">
                    <form>
                        <input  type="text"
                                className="inputLogin"
                                name="email"
                                placeholder="Email"
                                onChange={changeHandler}/>
                        <input  type="password"
                                className="inputPassword"
                                name="password"
                                placeholder="Password"
                                onChange={changeHandler}/>
                        <input  className="buttonLogin"
                                type="button"
                                value="Войти"
                                disabled={loading || form.email === '' || form.password === '' ? true : false}
                                onClick={loginHandler}/>
                    </form>
                    <h3 className="signup" onClick={() =>authDown(1)}> Зарегистрироваться. </h3>
                </div>
                <div className={form.massage === '' || form.massage === null || form.massage === undefined ? "hidden" : "massage"}>
                    <h2> {form.massage} </h2>
                </div>
            </div>
        )
    }else if(form.num === 1){
        return (
            <div className="auth">
                <div className="authSignup">
                    <form>
                        <div className="authPhoto">
                            <img src={img.img} alt="Image preview..."/>
                            <div className="file-upload">
                                <label>
                                    <input
                                        ref={ref}
                                        type="file"
                                        accept="image/*"
                                        onChange={previewFile}
                                        className="file"
                                    />
                                    <span>Загрузить</span>
                                </label>
                            </div>
                        </div>
                        <div>
                            <input  type="text"
                                    className="inputLogin"
                                    name="login"
                                    placeholder="Псевдоним"
                                    onChange={changeHandler}/>
                            <input  type="password"
                                    className="inputPassword"
                                    name="password"
                                    placeholder="Пароль"
                                    onChange={changeHandler}/>
                            <input  type="password"
                                    className="inputPassword"
                                    placeholder="Повторите пароль"/>
                            <input  type="text"
                                    className="inputPassword"
                                    name="cod"
                                    placeholder="Код регистрации"
                                    onChange={changeHandler}/>
                        </div>
                        <div>
                            <input  type="text"
                                    className="inputLogin"
                                    name="info"
                                    placeholder="Ф.И.О."
                                    onChange={changeHandler}/>
                            <input  type="text"
                                    className="inputPassword"
                                    name="email"
                                    placeholder="Почта"
                                    onChange={changeHandler}/>
                            <input  type="tel"
                                    className="inputPassword"
                                    name="tel"
                                    placeholder="Телефон"
                                    onChange={changeHandler}/>
                            <input  type="text"
                                    className="inputPassword"
                                    name="posit"
                                    placeholder="Должность"
                                    onChange={changeHandler}/>
                            <input  className="buttonLogin"
                                    type="button"
                                    value="Зарегистрироваться"
                                    disabled={loading || form.login === '' || form.password === '' || form.email === '' ? true : false}
                                    onClick={registerHandler}/>
                            <h3 className="signup" onClick={() =>authDown(0)}> Уже зарегистрированы? </h3>
                        </div>
                    </form>
                    <div className={form.massage === '' || form.massage === null || form.massage === undefined ? "hidden" : "massage"}>
                        <h2> {form.massage} </h2>
                    </div>
                </div>
            </div>
        )
    }

};

export default Auth;