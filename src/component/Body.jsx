import Image from "./smallercom/Image";
import Paragraph from './smallercom/Paragraph';
import Input from './smallercom/Input';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from '../Images/icon-search.svg';
import Company from '../Images/icon-company.svg';
import Location from '../Images/icon-location.svg';
import Twitter from '../Images/icon-twitter.svg';
import Website from '../Images/icon-website.svg';
import Ava from '../Images/img.jpg';
import Sun from '../Images/icon-sun.svg';
import Moon from '../Images/icon-moon.svg';


export default function Body(props){

    const [value, setValue] = useState("");
    const [content, setContent] = useState([]);
    const [name, setName] = useState("No name");
    const [avatar, setAvatar] = useState([Ava]);
    const [followers, setFollowers] = useState("0");
    const [following, setFollowing] = useState("0");
    const [bio, setBio] = useState("This profile has no bio");
    const [year, setYear] = useState('0000');
    const [month, setMonth] = useState("00");
    const [day, setDay] = useState("Monday");
    const [repo, setRepo] = useState('0');
    const [location, setLocation] = useState("No Location");
    const [blog, setBlog] = useState("No Blog");
    const [company, setCompany] = useState("No company");
    const [twitter, setTwitter] = useState("No twitter");
    const [log, setLogin] = useState("No handle")
    const [theme, setTheme]  = useState("container")
    const [atheme, setAtheme] = useState("app")
    const [bodyy, setBody] = useState('body1')
    const [sun, setSun] = useState([Sun])
   
    

    const [theme2, setTheme2] = useState("LIGHT")
    const themeC = () => {
         if(theme2 == 'LIGHT'){
             setTheme2("DARK")
             setTheme('revCon')
             setAtheme('app2')
             setBody('body2')
             setSun(Moon)
         }else{
             setTheme2("LIGHT")
             setTheme('container')
             setAtheme('app')
             setBody('body1')
             setSun(Sun)
         }
    }
    
    console.log(content)
    let link = 'https://api.github.com/users/';
    let use = value;
    let api = link + use;
    useEffect(()=>{
      axios.get(api)
      .then((response)=> setContent(response.data))
    }, [api])
   
    const handleSubmit = (e) =>{
        e.preventDefault();
        let val = e.target.value.toLowerCase();
        setValue(val)    
    }

    const display = () => {
        if(value.length < 1){
           alert("Enter Username....")
        }
        else if(content.length < 1){
            alert("Error: Request failed with status code 403 Try in an HOUR!!!");
        }else if(value.toLowerCase() != content.login.toLowerCase()){
            alert("There is no user with the name " + value );
        }
        else{
        if(content.bio == null){
            setBio("This profile has no bio")
        }else{
            setBio(content.bio)
        }
        if(content.name == null){
            setName("No name")
        }else{
            setName(content.name)
        }
        if(content.avatar_url == null){
            setAvatar({Ava})
        }else{
            setAvatar(content.avatar_url)
        }
        if(content.followers == null){
            setFollowers("0")
        }else{
            setFollowers(content.followers)
        }
        if(content.following == null){
            setFollowing("0")
        }else{
            setFollowing(content.following)
        }
        if(content.company == null){
            setCompany("No Company")
        }else{
            setCompany(content.company)
        }
        if(content.blog == ""){
            setBlog("No blog added")
        }else{
            setBlog(content.blog)
        }
        if(content.created_at == null){
            setDay("0")
            setMonth('0')
            setYear('0000')
        }else{
            let time = content.created_at;
            let year = time.substr(0,4);
            let month = time.substr(5,2);
            let day = time.substr(8,2);
            if(month < 10){
                let x = month.substr(1,1);
                let y = parseInt(x);
                switch (y){
                case 1:
                   setMonth("January")
                  break;
                case 2:
                    setMonth("Feburary")
                  break;
                case 3:
                    setMonth("March")
                  break;
                case 4:
                    setMonth("April")
                  break;
                case 5:
                    setMonth("May")
                  break;
                case 6:
                    setMonth("June")
                  break;
                case 7:
                    setMonth("July")
                    break;
                case 8:
                    setMonth("August")
                    break;
                case 9:
                    setMonth("September")
                    break;
                }
            }
            else{
            switch(month) {
               
                case 10:
                    setMonth("October")
                    break;
                case 11:
                    setMonth("November")
                    break;
                case 12:
                    setMonth("December")
                    break;
                default:
                    setMonth("Month")
              }}
            setDay(day);
            setYear(year);
        }
        if(content.twitter_username == null){
            setTwitter("no gihut page")
        }else{
            setTwitter(content.twitter_username)
        }
        if(content.public_repos == null){
            setRepo("0")
        }else{
            setRepo(content.public_repos)
        }
        if(content.location == null){
            setLocation("No name")
        }else{
            setLocation(content.location)
        }
        if(content.login == null){
            setLogin("handle")
        }else{
            setLogin(content.login)
        }
      
    }
    } 
    return(
      <div className={atheme}>
            <div className={theme}>
         <div className="navBar">
            <div className="logo">devFinder</div>
            <div className="light" onClick={themeC}><span className="li">{theme2}</span><span className="img"><Image src={sun}/></span></div>
        </div>
         <div className="top top2">
        <div className="imgg"><Image src={Search} /></div>
        <div><input className="inp" type="text" value={value} placeholder="Search Username... onChange={handleSubmit} /></div>
         <div><input className="btn" type="submit" placeholder="Search" onClick={display}/></div>
        </div>
        <div>
        <div className={bodyy}>
        <div className="left">
            <Image src={avatar} />
        </div>

         <div className="right">
             
        <div className="top top3 topp">
        <div className="name">
             <Paragraph  desc={name} id="p2" at="@" desc2={log} />

         </div>
         <div className="date"><p>Joined {day} {month} {year}</p></div>
        
        </div>
       
      
        <p className="bio">{bio}</p>
        <div className="middle">
        <div>
            <Paragraph desc="Repos" desc2={repo} />
        </div>
        <div>
            <Paragraph desc="Followers" desc2={followers} />
        </div>
        <div>
            <Paragraph desc="Following" desc2={following} />
        </div>
        </div>

        <div className="bottom">
           <div className="up">
           <Paragraph src={Location} desc={location} />
            <Paragraph src2={Twitter} desc2={twitter}  />
           </div>
           <div className="down">
           <Paragraph src={Website} desc={blog} />
            <Paragraph src2={Company} desc2={company} />
           </div>
        </div>
        </div>
        </div>
        </div>
        </div>
      </div>
    )
}
