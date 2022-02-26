import { ProxyState } from "../AppState.js"
import { quotesApi } from "./AxiosService.js";

class QuotesService {
  async getQuotes() {
    const res = await quotesApi.get()
    console.log(res.data, 'quote at service')
    ProxyState.quote = res.data
  }


}


export const quotesService = new QuotesService()