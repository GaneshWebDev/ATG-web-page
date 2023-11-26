function Post(){
    const posts=[
        {
            img:'Sarthak Kamra.png',
            title:'✍️ Article',
            about:'What if famous brands had regular fonts? Meet RegulaBrands!',
            desc:'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
            proImg:'proSarthak Kamra.png',
            date:null,
            add:null,
            data:null,
            location:null,
            link:null,
            name:'Sarthak Kamra'
        },
        {
            img:'Sarah West (1).png',
            title:'🔬️ Education',
            about:'Tax Benefits for Investment under National Pension Scheme launched by Government',
            desc:'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
            proImg:'Sarah West (2).png',
            date:null,
            data:null,
            location:null,
            add:null,
            link:null,
            name:'Sarah West'
        },
        {
            img:'Ronal Jones.png',
            title:'🗓️ Meetup',
            about:'Finance & Investment Elite Social Mixer @Lujiazui',
            desc:null,
            proImg:'proRonal Jones.png',
            date:{
                img:'Vector3.png',
               day:'fri',
               date:12,
               month:'Oct',
               year:'2018'
            },
            data:null,
            add:null,
            location:{
                city:'Ahmedabad',
                country:'India'
            },
            link:{text:'Visit Website',color:'orange'},
            name:'Sarthak Kamra'
        },  {
            img:null,
            title:'💼️ Job',
            about:'What if famous brands had regular fonts? Meet RegulaBrands!',
            desc:'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
            proImg:'Joseph Gray.png',
            date:null,
            add:{
                img:'outline-work_outline-24px.png',
                text:'Innovaccer Analytics Private Ltd.'
            },
            data:null,
            location:{
                img:'outline-location_on-24px.png',
                city:'Noida',
                country:'India'
            },
            link:{text:'Apply on Timesjobs',color:'green'}
            ,
            name:'Sarthak Kamra'
        }
    ]
    return(
        <div className=' d-flex  flex-column align-items-center  '>
            <div className=' d-flex justify-content-between w-75 mt-4 border-bottom p-2'>
                <div className=' d-flex justify-content-between '>
                    <span className='mr-4 font-weight-bold border-dark border-bottom'>All Posts(32)</span>
                    <span className="d-none d-md-block mr-4" style={{color:' rgba(138, 138, 138, 1)'}}>Article</span>
                    <span className="d-none d-md-block mr-4" style={{color:' rgba(138, 138, 138, 1)'}}>Event</span>
                    <span className="d-none d-md-block mr-4" style={{color:' rgba(138, 138, 138, 1)'}}>Eduction</span>
                    <span className="d-none d-md-block mr-4" style={{color:' rgba(138, 138, 138, 1)'}}>Job</span>
                </div>
                <div className='d-flex'>
                    <button class=" d-none d-md-block  border-0 rounded-5 h-100 dropdown-toggle mr-3" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{backgroundColor:'rgba(237, 238, 240, 1)'}}>
                        Write Post
                    </button>
                    <button class=" d-md-none  border-0 rounded-5 h-100 dropdown-toggle " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{backgroundColor:'rgba(237, 238, 240, 1)'}}>Filter: All    </button>
                    <div className='d-none d-md-flex align-items-center justify-content-center bg-primary h-100 p-1' style={{borderRadius:'5px',cursor:'pointer'}}><img className="mr-1" src='Vector.png' alt='img'/><span>Join Group</span></div>
                </div>
            </div>
        <div className="d-flex  justify-content-center ">
            <div className=" d-none d-md-flex flex-column mt-2 " >
                 {posts.map(post=>{
                    return(
                        <div className='d-flex flex-column border rounded mt-3 ' style={{width:'100%'}}>
                            {post.img&&<img style={{width:'100%'}} src={post.img}/>}
                            <div className="d-flex flex-column ml-3">
                                <div className="d-flex mt-2">
                                   <span style={{fontSize:'0.8rem', fontWeight:'bold'}}>{post.title}</span>
                                </div>
                                <div className="d-flex  justify-content-between  align-items-center mt-2">
                                    <span style={{fontSize:'1rem', fontWeight:'bold',textAlign:'start'}}> {post.about.split(' ').map((word, index) => (
                                                            <span key={index}>
                                                                {word}
                                                                {' '}
                                                                {(index + 1) % 8 === 0 && <br />}
                                                            </span>
                                                            ))}</span>
                                    <img src='vector2.png' style={{height:'7px'}} className='mr-4'/>
                                </div>
                                <div className="d-flex mt-2">
                                     {post.desc&&<span style={{color:' rgba(92, 92, 92, 1)',fontSize:"14px"}}>{post.desc}</span>}
                                </div>
                                 {post.location&&<div className="d-flex ">
                                 {post.date&&<div className="d-flex align-items-center font-weight-bold">
                                    <img src={post.date.img} style={{height:'15px'}}/>
                                    <span className='ml-1'>{post.date.day}</span>
                                    <span className='ml-1'>{post.date.date}</span>
                                    <span className='ml-1'>{post.date.month}</span>
                                    <span className='ml-1'>{post.date.year}</span>
                                    </div>}
                                    {post.add&&<div className='d-flex font-weight-bold'>
                                        <img src={post.add.img} style={{height:'16px'}} className='mt-1'/>
                                        <span>{post.add.text}</span>
            
                                        </div>}
                                    <div className='d-flex font-weight-bold  ml-1 ml-md-4'>
                                          <img src="outline-location_on-24px.png" style={{height:'17px'}}  className='mt-1'/>
                                          <span>{post.location.city},</span>
                                          <span>{post.location.country}</span>
                                    </div>
                                 </div>
                                }
                             </div>
                              {post.link&&<div className="border rounded ml-3 mr-3 mt-2"><span style={{color:`${post.link.color}`}}>{post.link.text}</span></div>}
                            <div className='d-flex align-items-center justify-content-between mt-4 mb-2 ml-3 '>
                                <div className='d-flex align-items-center' >
                                    <img src={post.proImg} style={{height:'30px',width:'30px'}}/>
                                    <span style={{fontSize:'0.9rem'}}  className='ml-1 font-weight-bold'>{post.name}</span>
                                </div>
                                <div className='d-flex align-items-center'style={{fontSize:'0.8rem'}}>
                                    <img src="visibility_24px_outlined.svg" />
                                    <span>1.4k views</span>
                                    <img src="Group 2.3.png" className='ml-4 mr-3' style={{height:'20px'}}/>
                                </div>
                            </div>

                        </div>
                    )
                 })}
             </div>
             <div className=" d-md-none d-flex flex-column mt-2 " >
                <img src='edit_24px_outlined.svg' style={{height:'35px',left:'85%',top:'88%', padding:'5px',width:'35px',background:' linear-gradient(180deg, #FF5C5C 0%, #F0568A 100%)'}} className='z-1  position-fixed rounded-circle'/>
                 {posts.map(post=>{
                    return(
                        <div className='d-flex flex-column border rounded mt-2 ' style={{width:'100%'}}>
                            {post.img&&<img style={{width:'100%'}} src={post.img}/>}
                            <div className="d-flex flex-column ml-3">
                                <div className="d-flex mt-2">
                                   <span style={{fontSize:'0.7rem', fontWeight:'bold'}}>{post.title}</span>
                                </div>
                                <div className="d-flex  justify-content-between  align-items-center mt-2">
                                    <span style={{fontSize:'0.8rem', fontWeight:'bold',textAlign:'start'}}> {post.about.split(' ').map((word, index) => (
                                                            <span key={index}>
                                                                {word}
                                                                {' '}
                                                                {(index + 1) % 5 === 0 && <br />}
                                                            </span>
                                                            ))}</span>
                                    <img src='vector2.png' style={{height:'6px'}} className='mr-4'/>
                                </div>
                                <div className="d-flex mt-2">
                                     {post.desc&&<span className='mr-2' style={{color:' rgba(92, 92, 92, 1)',fontSize:"0.6rem"}}>{post.desc}</span>}
                                </div>
                                 {post.location&&<div className="d-flex ">
                                 {post.date&&<div className="d-flex align-items-center font-weight-bold" style={{fontSize:'0.8rem'}}>
                                    <img src={post.date.img} style={{height:'13px' }}/>
                                    <span className='ml-1'>{post.date.day}</span>
                                    <span className='ml-1'>{post.date.date}</span>
                                    <span className='ml-1'>{post.date.month}</span>
                                    <span className='ml-1'>{post.date.year}</span>
                                    </div>}
                                    {post.add&&<div className='d-flex font-weight-bold'>
                                        <img src={post.add.img} style={{height:'13px'}} className='mt-1'/>
                                        <span style={{fontSize:'0.8rem'}}>{post.add.text}</span>
            
                                        </div>}
                                    <div className='d-flex font-weight-bold   ml-4' style={{fontSize:'0.8rem'}}>
                                          <img src="outline-location_on-24px.png" style={{height:'13px'}}  className='mt-1'/>
                                          <span>{post.location.city},</span>
                                          <span>{post.location.country}</span>
                                    </div>
                                 </div>
                                }
                             </div>
                              {post.link&&<div className="border rounded ml-3 mr-3 mt-2"><span style={{color:`${post.link.color}`,fontSize:'0.8rem' }}>{post.link.text}</span></div>}
                            <div className='d-flex align-items-center justify-content-between mt-4 mb-2 ml-3 '>
                                <div className='d-flex align-items-center' >
                                    <img src={post.proImg} style={{height:'20px',width:'20px'}}/>
                                    <span style={{fontSize:'0.8rem'}}  className='ml-1 font-weight-bold'>{post.name}</span>
                                </div>
                                <div className='d-flex align-items-center'style={{fontSize:'0.7rem'}}>
                                    <img src="visibility_24px_outlined.svg"  style={{height:'15px'}}/>
                                    <span>1.4k views</span>
                                    <img src="Group 2.3.png" className='ml-4 mr-3' style={{height:'15px'}}/>
                                </div>
                            </div>

                        </div>
                    )
                 })}
             </div>
             <div className='d-none d-md-flex flex-column ml-5 mt-3 w-25'>
                <div className='d-flex align-items-center justify-content-between border-bottom pb-1'>
                    <div>
                        <img src='outline-location_on-24px.png'/>
                        <span>Nodia, India</span>
                    </div>
                    <div>
                        <img src='baseline-edit-24px.png'/>
                    </div>
                </div>
                <div className='mt-3'>
                    <img src='baseline-error_outline-24px.png'/>
                    <span style={{fontSize:'0.8rem' ,textAlign:'left'}}>Your location will help us serve better and extend a personalised experience.</span>
                </div>
             </div>
            </div>
        </div>
    )
}
export default Post;
