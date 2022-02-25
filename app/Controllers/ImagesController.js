import { ProxyState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js";
import { Pop } from "../Utils/Pop.js";

async function _getImages() {
  try {
    await imagesService.getImages()
  } catch (error) {
    Pop.toast(error.message, 'error in controller')
    console.error(error)
  }
}


function _drawImage() {
  console.log('drawing image')
  let image = ProxyState.image
  document.body.style.backgroundImage = `url('${image.largeImgUrl}')`
}



export class ImagesController {
  constructor() {

    _getImages()
    console.log('constructor in controller')
    ProxyState.on('image', _drawImage)
  }
}