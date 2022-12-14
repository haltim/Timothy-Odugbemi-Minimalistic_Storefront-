import { getCurrencies, updateSelectedCurrency } from "../Actions/Currency.action";

export class CurrencyDispatcher {
  static updateSelectedCurrency(dispatch, currency) {
    dispatch(updateSelectedCurrency(currency));
  }

  static async updateCurrenciesData(dispatch, currencies) {
    dispatch(getCurrencies(currencies));
  }
}

export default new CurrencyDispatcher();
