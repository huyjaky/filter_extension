import React from "react";
import Label from "../components/Label"
import Example from "../components/Example"
import Volume from "../components/Volume"

const Layer = () => {
    return (
        <div style={{ position: 'absolute', backgroundColor: '#FEF8E8', inset: '10px', backgroundImage: 'linear-gradient(to top, #FFE4A4, #FEF8E8)', borderRadius: '10px' }}>
            <div style={{ padding: '15px', display: 'flex', gap: '10px', height: '480px' }}>
                <div style={{ width: '350px' }}>
                    <div>
                        <Label textAlign={'center'} text={"Bò"} height={'70px'} fontSize={'45px'} alignContent={'center'} color={'#FFDB5A'} />
                    </div>
                    <div style={{ paddingTop: '15px' }}>
                        <Label text={"Di chuyển bằng cách dùng tay và đầu gối."} height={'130px'} width={'93%'} fontPadding={'10px'} fontSize={'20px'} color={'#FFFFFF'} />
                    </div>
                    <div style={{ paddingTop: '15px', display: 'flex', gap: '10px' }}>
                        <div>
                            <Label text={"DANH TỪ"} alignContent={'center'} height={'35px'} width={'87px'} textAlign={'center'} border={'3px solid #FFB905'} backgroundColor={'#FFFFFF'} color={'#0083E1'} boxShadow={'none'} />
                        </div>
                        <div>
                            <Label text={"ĐỘNG TỪ"} alignContent={'center'} height={'35px'} width={'87px'} textAlign={'center'} boxShadow={"none"} color={'#FFDB5A'} />
                        </div>
                        <div>
                            <Label text={"TÍNH TỪ"} alignContent={'center'} height={'35px'} width={'87px'} textAlign={'center'} border={'3px solid #FFB905'} backgroundColor={'#FFFFFF'} color={'#0083E1'} boxShadow={'none'} />
                        </div>
                    </div>
                    <div style={{ paddingTop: '15px', display: 'flex', gap: '15px' }}>
                        <Example textType={"ĐỒNG NGHĨA"} TuNgu={"Trườn, lê lết"} ViDu={"Con rắn đang trườn dưới đất."} />
                        <Example textType={"TRÁI NGHĨA"} />
                    </div>
                </div>
                <div style={{ width: '320px' }}>
                    <div style={{height: '70px'}}>
                        <Volume />
                    </div>
                    <div style={{paddingTop: '15px'}}>
                        <div style={{height: '365px', border: '3px solid #FFB800', borderRadius: '7px', paddingLeft: '7px', paddingRight: '7px', paddingTop: '5px'}}>
                            <div style={{paddingBottom: '5px'}}><Label height={'60px'} width={'90%'} fontPadding={'10px'} backgroundColor={'#A83D00'} border={'2px solid #FFB800'} text={"Ví dụ: Em bé mới biết bò."} paddingLeft={'10px'} fontSize={'17.5px'} color={'#FFFFFF'} fontWeight={'normal'} /></div>
                            <div style={{height: '270px', borderRadius: '10px'}}>
                                <img src="https://www.parents.com/thmb/vRdPsXKhfskKRnIKjvDw1cAKf1I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/550_FAN2012961-66aa200cabd1493e999b8b190fa3830e.jpg" style={{height: '100%', width: '100%', objectFit: 'cover', borderRadius: '10px'}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layer;