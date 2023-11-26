function Banner({fun}){
    return(
        <>
        <div className='d-md-none bg-cover justify-content-between border ' style={{ display: 'flex',flexDirection:'column',position:'relative', width: '100%',height:'300px',   backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.6) 100%), url("Rectangle12.png")',backgroundAttachment:'fixed' }}>
            <div class='d-flex justify-content-between  mt-4'>
                <img className="w-25 " src='arrow_back_24px_outlined.svg' style={{height:'24px',width:'24px', marginLeft:'-10px',borderRadius:'4px'}}/>
                <div  className='w-25  mr-3'  style={{width:'10px',height:'28px',border: '2px solid rgba(255, 255, 255, 1)',borderRadius:'4px'}}>
                    <span  style={{   fontFamily: 'IBM Plex Sans', fontSize: '14px', fontWeight: 500, lineHeight: '15.6px', letterSpacing: '0em', textAlign: 'left', color:'rgba(255, 255, 255, 1)' }} onClick={()=>{fun(true);console.log(fun)}}>Join Group</span>
                </div>
            </div> 
            <div className=" d-flex flex-column  mb-3" >
                <span  style={{ width: '378px', height: 'auto',marginTop:'0px',marginLeft:'16px',  fontFamily: 'IBM Plex Sans', fontSize: '17px', fontWeight: 700, letterSpacing: '0em', textAlign: 'left', color: '#FFFFFF' }}>Computer Engineering</span>
                <span  style={{ width: '327px', height: '23px', marginLeft: '16px' ,color:'#FFFFFF', fontFamily: 'IBM Plex Sans', fontSize: '12px', fontWeight: 400, letterSpacing: '0em', textAlign: 'left'}}>142,765 Computer Engineers follow this</span>
            </div>
        </div>
        <div className='d-none d-md-flex ' style={{ display: 'flex',flexDirection:'column',marginTop:'0px',position:'relative', width: 'auto', height: '380px',  backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.6) 100%), url("Rectangle 2.png")', backgroundSize: 'cover' }}>
           <span style={{ width: '378px', height: '47px',marginTop:'282px',marginLeft:'200px',  fontFamily: 'IBM Plex Sans', fontSize: '36px', fontWeight: 700, lineHeight: '47px', letterSpacing: '0em', textAlign: 'left', color: '#FFFFFF' }}>Computer Engineering</span>
           <span style={{ width: '327px', height: '23px', marginLeft: '200px' ,color:'#FFFFFF', fontFamily: 'IBM Plex Sans', fontSize: '18px', fontWeight: 400, lineHeight: '23px', letterSpacing: '0em', textAlign: 'left'}}>142,765 Computer Engineers follow this</span>
        </div>
    </>
    )
}
export default Banner;