import Controls from "./controls.js"
import Timer from"./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"
import { 
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  minutesDisplay,
  secondsDisplay
} from "./elements.js"



// DOM - Documente Object Model

//Refatoração: Mudar o código para deixá-lo mais entendível
//Deixar o código mais performático
//SEM ALTERAR suas funcionalidades


//Aqui fazemos a 'Injeção'(Literalmente injetamos aqui) da Factory de tudo que possui dependência
const controls = Controls({
buttonPause,
buttonPlay,
buttonSet,
buttonStop
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,

})

const sound = Sound()

Events({controls, timer, sound})
