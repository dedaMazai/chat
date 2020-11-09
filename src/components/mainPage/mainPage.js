import React from 'react';

import './mainPage.css';

import img from './foto.jpg';
function MainPage () {
    return (
        <>
            <div className="headerPage">
                <h2>YOUCHAT</h2>
                <div className="exitPage">
                    <div className="exitRoundPage">
                        <p>I</p>
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