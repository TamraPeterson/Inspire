import { ProxyState } from "../AppState.js"
import { imagesApi } from "./AxiosService.js"

class ImagesService {
  async getImages() {
    const res = await imagesApi.get()
    console.log(res.data, 'get images at service')
    ProxyState.image = res.data
  }
}

export const imagesService = new ImagesService()