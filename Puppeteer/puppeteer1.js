const puppeteer = require('puppeteer');
const fs =require('fs/promises');

/*(async () => {
  const browser = await puppeteer.launch({
      headless: false,
      slowMo: 200,
      executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    });
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();*/

/*async function captureScreenshot(){
      const browser = await puppeteer.launch({
          headless: false,
          slowMo: 200,
          executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        });
      const page = await browser.newPage();
      await page.goto('https://google.com');
      await page.screenshot({ path: 'example.png' });
    
      await browser.close();
    };*/
    
//captureScreenshot();

/*async function navigateWebPage(){
      const browser = await puppeteer.launch({
          headless: false,
          slowMo: 200,
          executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        });
      const page = await browser.newPage();
      await page.goto('https://quotes.toscrape.com/');
      await page.click('a[href="/login"]');
      await new Promise(r => setTimeout(r, 5000));
      //await page.screenshot('example.png');
      await browser.close();
    };*/

//navigateWebPage();

async function webDataFromWebRemove(){
      const browser = await puppeteer.launch({
          headless: false,
          slowMo: 400,
          executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        });
      const page = await browser.newPage();
      await page.goto('https://www.example.com');
      const result=await page.evaluate(()=>{
           const title=document.querySelector('h1').innerText
           const description=document.querySelector('p').innerText
           const moreInfo=document.querySelector('a').innerText

           return{
            title,
            description,
            moreInfo
           }
      })
      console.log(result);
      await browser.close();
    };

//webDataFromWebRemove();

async function handleDinamicWebPage(){
      const browser = await puppeteer.launch({
          headless: false,
          slowMo: 600,
          executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        });
      const page = await browser.newPage();
      await page.goto('https://quotes.toscrape.com/');
      const result = await page.evaluate(() => {
            const quotes = document.querySelectorAll('.quote');
            const data = Array.from(quotes).map((quote) => {
              const quoteText = quote.querySelector('.text').innerText;
              const author = quote.querySelector('.author').innerText;
              const tags = Array.from(quote.querySelectorAll('.tags')).map((tag) => tag.innerText);
              return {
                quoteText,
                author,
                tags,
              };
            });
            return data;
          });
      console.log(result);
      await fs.writeFile("quotes.json",JSON.stringify(result));

      await browser.close();
    };
/*
    async function handleDinamicWebPage() {
      const browser = await puppeteer.launch({
        headless: false,
        slowMo: 600,
        executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
      });
      const page = await browser.newPage();
      await page.goto('https://quotes.toscrape.com/');
      const result = await page.evaluate(() => {
        const quotes = document.querySelectorAll('.quote');
        const data = Array.from(quotes).map((quote) => {
          const quoteText = quote.querySelector('.text').innerText;
          const author = quote.querySelector('.author').innerText;
          const tags = Array.from(quote.querySelectorAll('.tags')).map((tag) => tag.innerText);
          return {
            quoteText,
            author,
            tags,
          };
        });
        return data;
      });
      console.log(result);
      await fs.writeFile("quotes.json", JSON.stringify(result));
    
      await browser.close();
    };*/
handleDinamicWebPage();

/*const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless:false,
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge Dev\\Application\\msedge.exe'
  });
  const page = await browser.newPage();
  await page.goto('https://www.microsoft.com/edge/download/insider');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();
*/
/*const puppeteer = require('puppeteer');

async function run() {
  // Iniciar una instancia de Puppeteer
  const browser = await puppeteer.launch({
      executablePath: 'C:\Users/LI/Desktop/chrome.exe',
      headless:'false'
});

  // Abrir una nueva página
  const page = await browser.newPage();

  // Navegar a una URL específica
  await page.goto('https://www.ejemplo.com');

  // Tomar una captura de pantalla de la página
  await page.screenshot({ path: 'screenshot.png' });

  // Obtener el título de la página
  const pageTitle = await page.title();
  console.log('Título de la página:', pageTitle);

  // Cerrar el navegador
  await browser.close();
}

run();*/

/*const puppeteer = require('puppeteer');

async function openWebPage(){
   const browser= await puppeteer.launch({
         executablePath: 'C:\Program Files\Google\Chrome\Application\chrome',
         headless:'false'
   });
   const page=await browser.newPage();
   await page.goto("https://example.com/");
   await browser.close();
}

openWebPage();*/