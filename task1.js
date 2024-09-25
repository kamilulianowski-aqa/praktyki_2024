/* 

1. Zainstaluj Postmana na komputerze
2. Zapoznaj się z API Narodowego Banku Polskiego https://api.nbp.pl/#kursyParams
3. Wyykonaj w Postmanie request https://api.nbp.pl/api/exchangerates/tables/A
4. Dowiedz sie czym jest curl, jak mona go uzywac, następnie wklej curl jako komentarz tutaj

# curl https://example.com/file.txt -o file.txt
# curl -X POST https://example.com/api -d "name=John&age=30"
# curl -H "Authorization: Bearer TOKEN" https://example.com/api

5. Poczytaj o async / await, przyda się w kolejnym zadaniu
6. W javascript z uzyciem async / await wykonaj request do https://api.nbp.pl/api/exchangerates/tables/A i wypisz aktualny kurs walut USD, EUR, GBP

async function getExchangeRates() {
  try {
    
    const response = await fetch('https://api.nbp.pl/api/exchangerates/tables/A/?format=json');
    
   
    if (!response.ok) {
      throw new Error('Błąd podczas pobierania danych');
    }

    
    const data = await response.json();
    const rates = data[0].rates;

    
    const usdRate = rates.find(rate => rate.code === 'USD');
    const eurRate = rates.find(rate => rate.code === 'EUR');
    const gbpRate = rates.find(rate => rate.code === 'GBP');

    
    console.log(`Kurs USD: ${usdRate.mid} PLN`);
    console.log(`Kurs EUR: ${eurRate.mid} PLN`);
    console.log(`Kurs GBP: ${gbpRate.mid} PLN`);
    
  } catch (error) {
    console.error('Wystąpił błąd:', error);
  }
}


getExchangeRates();


7. Wykonaj request do api który sprawdzi aktualną cenę złota, następnie jako console.log  wypisz ją

async function getGoldPrice() {
  try {
    const response = await fetch('https://api.nbp.pl/api/cenyzlota/?format=json');

   
    if (!response.ok) {
      throw new Error('Błąd podczas pobierania ceny złota');
    }
    const data = await response.json();

    
    const goldPrice = data[0].cena;

    
    console.log(`Aktualna cena złota: ${goldPrice} PLN za gram`);
    
  } catch (error) {
    console.error('Wystąpił błąd:', error);
  }
}

getGoldPrice();

