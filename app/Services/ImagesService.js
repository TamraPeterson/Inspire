import { ProxyState } from "../AppState.js"
import { imagesApi } from "./AxiosService.js"

class ImagesService {
  async getImages() {
    const res = await imagesApi.get()
    ProxyState.image = res.data
  }
}

export const imagesService = new ImagesService()