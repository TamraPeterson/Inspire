import { ProxyState } from "../AppState.js";
import { quotesApi } from "../Services/AxiosService.js";
import { quotesService } from "../Services/QuotesService.js";
import { Pop } from "../Utils/Pop.js";




async function _getQuotes() {
  try {
    await quotesService.getQuotes()
  } catch (error) {
    Pop.toast(error.message, 'error in quotes controller')
    console.error(error)
  }
}

function _drawQuote() {
  let quote = ProxyState.quote

  document.getElementById('quote').innerHTML = `<h5 class="quote">"${quote.content}"</h5>`

  document.getElementById('author').innerHTML = `<h6 class="author">-${quote.author}</h6>`
}




export class QuotesController {
  constructor() {
    _getQuotes()
    ProxyState.on('quote', _drawQuote)
  }
}