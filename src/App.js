import React, { useEffect, useState } from "react";
import useSound from 'use-sound'
import paper from './img/paper.png'
import scissors from './img/scissors.png'
import rock from './img/rock.png'
import './style.css'
import NickBoard from "./components/NickBoard";
import Hands from "./components/Hands";
import Selection from "./components/Selection";
import Result from "./components/Result";
import PpSelection from "./components/PpSelection";
import SelectionShown from "./components/SelectionShown";
// Logos
import angel from './pp_img/angel-outfit.png'
import cronwedSkull from './pp_img/crowned-skull.png'
import diamond from './pp_img/cut-diamond.png'
import eagle from './pp_img/eagle-emblem.png'
import crown from './pp_img/laurel-crown.png'
import science from './pp_img/materials-science.png'
import octopus from './pp_img/octopus.png'
import star from './pp_img/round-star.png'
import scales from './pp_img/scales.png'
import seaDragon from './pp_img/sea-dragon.png'
import skullShield from './pp_img/skull-shield.png'
import snail from './pp_img/snail.png'
import cat from './pp_img/white-cat.png'
import wingedSword from './pp_img/winged-sword.png'
import wolf from './pp_img/wolf-head.png'
import howl from './pp_img/wolf-howl.png'
import yinYang from './pp_img/yin-yang.png'
// Sounds
import end from './sounds/retro-falling-down.mp3'
import countDown from './sounds/countdown.mp3'
import start from './sounds/game-start.mp3'

// kaybeden tarafın eli ekrandan düşecek RESULT GLOW ŞEKİLDE DEĞİŞECEK
// SES EFEKTLERİ EKLE
// IF input value boş işse submit engellenecek!

function App() {

  const logos = [
    {
      logo : angel
    },
    {
      logo: wolf
    },
    {
      logo: howl
    },
    {
      logo: yinYang
    },
    {
      logo: cat
    },
    {
      logo: wingedSword
    },
    {
      logo: seaDragon
    },
    {
      logo: skullShield
    },
    {
      logo: snail
    },
    {
      logo: cronwedSkull
    },
    {
      logo: star
    },
    {
      logo: scales
    },
    {
      logo: crown
    },
    {
      logo: science
    },
    {
      logo: octopus
    },
    {
      logo: diamond
    },
    {
      logo: eagle
    }
  ]
  const names = [
    {
      name: 'Warrior'
    },
    {
      name: 'Canarie'
    },
    {
      name: 'Thomas Shelby'
    },
    {
      name: 'Hawkeye'
    },
    {
      name: 'Stephen'
    },
    {
      name: 'BigSkeleton'
    },
    {
      name: 'Arem'
    },
    {
      name: 'Impartial Lizy'
    },
    {
      name: 'Horda'
    },
    {
      name: 'Erdrine'
    },
    {
      name: 'Howling Wolve'
    }
  ]

  // Game Part
  const [selection,setSelection] = useState(rock)
  const [awaySelection,setAwaySelection] = useState(rock)
  const [shake,setShake] = useState('homeHand')
  const [awayShake,setAwayShake] = useState('awayHand')
  let [homeScore,setHomeScore] = useState(0)
  let [awayScore,setAwayScore] = useState(0)
  const [result,setResult] = useState('---')
  const [wrapper,setWrapper] = useState(false)
  const [game,setGame] = useState(false)
  const [selectionDisabled,setSelectionDisabled] = useState(false)
  const [error,setError] = useState(false)
  const [nextBtnDisabled,setNextBtnDisabled] = useState(true)
  const [resetBtnDisabled,setResetBtnDisabled] = useState(true)
  // Selection Part
  const [shownPP,setShownPP] = useState(angel)
  const [awayPP,setAwayPP] = useState()
  const [homeName,setHomeName] = useState('')
  const [awayName,setAwayName] = useState()
  // Sounds
  const [endSound] = useSound(end)
  const [startSound] = useSound(start)
  const [countDownSound] = useSound(countDown)

  // Selections
  function rockSelection(){
    setSelection(rock)
  }
  function paperSelection(){
    setSelection(paper)
  }
  function scissorsSelection(){
    setSelection(scissors)
  }

  // PLAY
  function play(){
    setSelection(rock)
    setAwaySelection(rock)
    setShake('homeHandShake')
    setAwayShake('awayHandShake')
    setSelectionDisabled(true)
    countDownSound()
    setTimeout(() => {
      setShake('homeHand')
      setAwayShake('awayHand')
      randomAway()
      setSelection(selection)
      setSelectionDisabled(false)
    }, 2900);
  }

  // Win,Lose and Draw Functions
  function win(){
    let resultP = document.getElementById('result')
    resultP.style.color = 'green'
    setResult('WIN!')
    setHomeScore(++homeScore)
  }
  function lose(){
    let resultP = document.getElementById('result')
    resultP.style.color = 'red'
    setResult('LOSE!')
    setAwayScore(++awayScore)
  }
  function draw(){
    let resultP = document.getElementById('result')
    resultP.style.color = 'black'
    setResult('DRAW!')
  }
  
  // Random Opponent hand selector
  function randomAway(){
    var randomIndex = Math.floor(Math.random()*3)
    if(randomIndex === 0){
      setAwaySelection(rock)
      if(selection === rock){
        draw()
      }else if(selection === paper){
        win()
      }else if(selection === scissors){
        lose()
      }
    }else if(randomIndex === 1){
      setAwaySelection(paper)
      if(selection === rock){
        lose()
      }else if(selection === paper){
        draw()
      }else if(selection === scissors){
        win()
      }
    }else if(randomIndex === 2){
      setAwaySelection(scissors)
      if(selection === rock){
        win()
      }else if(selection === paper){
        lose()
      }else if(selection === scissors){
        draw()
      }
    }
  }

  // Game Winner!!
  useEffect(()=>{
    if(homeScore === 3){
      setWrapper(true)
      setAwayShake('awayFallingHand')
      endSound()
      setSelectionDisabled(true)
      setNextBtnDisabled(false)
      setTimeout(() => {
        setWrapper(false)
        setAwayShake('awayHand')
      }, 1500);
    }else if(awayScore === 3){
      setWrapper(true)
      setSelectionDisabled(true)
      setShake('fallingHand')
      endSound()
      setResetBtnDisabled(false)
      setTimeout(() => {
        setWrapper(false)
      }, 1500);
    }
  }, [homeScore, setHomeScore, awayScore, setAwayScore, endSound])


  const ppSelector = (e) =>{
    setShownPP(e.target.src)
    console.log(shownPP)
  }
  const homeNameValue = (e) =>{
    setHomeName(e.target.value)

  }
  function gameStarter(){
     
    if(homeName === ''){
      setError(true)
      console.log('asdasd')
    }else{
      setError(false)
      setGame(true)
      let randomLogoIndex = Math.floor(Math.random() * logos.length)
      let randomNameIndex = Math.floor(Math.random() * names.length)
      setAwayPP(logos[randomLogoIndex].logo)
      setAwayName(names[randomNameIndex].name)
    }
  }
  function reset(){
    window.location.reload()
  }
  function next(){
    let randomLogoIndex = Math.floor(Math.random() * logos.length)
    let randomNameIndex = Math.floor(Math.random() * names.length)
    setAwayPP(logos[randomLogoIndex].logo)
    setAwayName(names[randomNameIndex].name)
    setHomeScore(0)
    setAwayScore(0)
    setSelectionDisabled(false)
    setNextBtnDisabled(true)
  }
  
  return (
    <div className={!wrapper ? 'wrapper' : 'shakeWrapper'}>
      {!game && <div className="startWrapper">
        <div className="logoSelectionWrapper">
          <h2>Select Your Logo!</h2>
          <div className="logoSelection"> 
          {logos.map((logo) =>(
          <PpSelection logo={logo.logo} click={(e) => ppSelector(e)} />
        ))}
          </div>
        
           </div>
        <SelectionShown error={error} logo={shownPP} click={gameStarter} homeNameValue={(e) => homeNameValue(e)} />
        </div>}
      {game && <div>
      <NickBoard homePP={shownPP} awayPP={awayPP} homeName={homeName} awayName={awayName} />
      <Result result={result}  />
      <Hands homeHand={selection} awayHand={awaySelection} shake={shake} setShake={setShake}
      awayShake={awayShake} home={homeScore} away={awayScore} />
      <Selection selectionDisabled={selectionDisabled} rock={rock} paper={paper} scissors={scissors} play={play}
       rockSelection={rockSelection} paperSelection={paperSelection} scissorsSelection={scissorsSelection}
        reset={reset} resetBtnDisabled={resetBtnDisabled} next={next} nextBtnDisabled={nextBtnDisabled} />
      </div>}
    </div>
  );
}

export default App;
